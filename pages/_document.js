import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
              {/* Cloudflare Turnstile - loaded on every page, rendered explicitly per-form */}
              <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
            </Head>
            <body>
              {/* Anti-flash script: runs synchronously before first paint to set the correct theme class */}
              <script
                dangerouslySetInnerHTML={{
                  __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}else if(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');localStorage.setItem('theme','dark')}}catch(e){}})();`,
                }}
              />
              <Main />
              <NextScript />
            </body>
        </Html>
    )
}