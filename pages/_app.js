import '../styles/globals.css'
import { Inter, Bebas_Neue } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: '400',
})

function Application({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${bebasNeue.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}

export default Application
