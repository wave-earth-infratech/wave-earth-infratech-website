const OAUTH_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize'
const OAUTH_TOKEN_URL = 'https://github.com/login/oauth/access_token'

const CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID
const CLIENT_SECRET = process.env.GITHUB_OAUTH_CLIENT_SECRET

export default async function handler(req, res) {
  const { code, provider } = req.query
  const origin = process.env.NEXT_PUBLIC_SITE_URL || `https://${req.headers.host}`

  // ── Step 1: Redirect to GitHub for authorization ─────────────────────────
  if (!code && provider === 'github') {
    if (!CLIENT_ID) {
      return res.status(500).send('GITHUB_OAUTH_CLIENT_ID is not set')
    }
    const authUrl = new URL(OAUTH_AUTHORIZE_URL)
    authUrl.searchParams.set('client_id', CLIENT_ID)
    authUrl.searchParams.set('scope', 'repo,user')
    authUrl.searchParams.set('redirect_uri', `${origin}/api/auth`)
    return res.redirect(authUrl.toString())
  }

  // ── Step 2: Exchange code for access token ────────────────────────────────
  if (code) {
    if (!CLIENT_ID || !CLIENT_SECRET) {
      return res.status(500).send('GitHub OAuth credentials are not configured')
    }

    try {
      const tokenRes = await fetch(OAUTH_TOKEN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
          redirect_uri: `${origin}/api/auth`,
        }),
      })

      const data = await tokenRes.json()

      if (data.error || !data.access_token) {
        const msg = data.error_description || data.error || 'Authentication failed'
        return res.status(400).send(`OAuth error: ${msg}`)
      }

      // Safely embed token - JSON.stringify handles any special chars
      const payload = JSON.stringify({
        token: data.access_token,
        provider: 'github',
      })

      const html = `<!DOCTYPE html>
<html>
<head><title>Authorizing...</title></head>
<body>
<script>
(function() {
  var payload = ${payload};
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:' + JSON.stringify(payload),
      '*'
    );
    window.close();
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
<p>Authorizing... you can close this window.</p>
</body>
</html>`

      return res.setHeader('Content-Type', 'text/html').send(html)
    } catch (err) {
      console.error('[/api/auth] OAuth error:', err)
      return res.status(500).send('Authentication failed - check server logs')
    }
  }

  return res.status(400).send('Bad request')
}
