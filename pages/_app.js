import '../styles/globals.css'
import { Inter, Oswald } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

function Application({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${oswald.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}

export default Application
