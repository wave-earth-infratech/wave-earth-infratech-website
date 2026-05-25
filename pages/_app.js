import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

function Application({ Component, pageProps }) {
  return (
    <main className={inter.variable}>
      <Component {...pageProps} />
    </main>
  )
}

export default Application
