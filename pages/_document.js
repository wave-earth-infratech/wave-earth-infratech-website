import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>
            <body>
              <Main />
              <NextScript />
              {/* Netlify Identity — required for Decap CMS login redirect on the live site */}
              <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" defer />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    if (window.netlifyIdentity) {
                      window.netlifyIdentity.on("init", function(user) {
                        if (!user) {
                          window.netlifyIdentity.on("login", function() {
                            document.location.href = "/admin/";
                          });
                        }
                      });
                    }
                  `,
                }}
              />
            </body>
        </Html>
    )
}