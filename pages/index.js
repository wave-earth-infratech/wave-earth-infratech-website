import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta />
            <Head>
            <title>Wave Earth Infratech</title>
            <meta name="description" content="" />

            </Head>

            <Header />

            <Footer />

            <Js />
        </>
    )
}