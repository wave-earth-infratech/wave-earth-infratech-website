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
            <title>RuralServer - Web Hosting India, India’s No.1 Web Hosting Company</title>
            <meta name="description" content="" />

            </Head>

            <div className="box-container limit-width">

                <Header />

             <h3>Test index</h3>

                <Footer />
            </div>
            <a href="#0" className="cd-top"> <i className="fas fa-angle-up"></i> </a>
            <Js />
        </>
    )
}