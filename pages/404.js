import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta />
            <Head>
            <title>404 page Not Found - RuralServer</title>
            <meta name="description" content="" />

            </Head>

            <div className="box-container limit-width">

                <Header />

                <section className="sec-normal notfound pt-150 scrollme">
                    <div className="total-grad-pink-blue-intense"></div>
                    <div className="container animateme" data-when="exit" data-from="0" data-to="0.75" data-opacity="1"
                         data-translatey="-50">
                        <div className="row justify-content-center">
                            <div className="col-9">
                                <img className="svg" src="/patterns/notfound.svg" alt="Provisioning notfound" />
                            </div>
                        </div>
                        <div className="col-md-12 text-center pt-5">
                            <p className="text-white">Sorry, it appears that the page you’ve requested cannot be
                                found.<br/> Please press the button below to go home page or <Link href="contact"
                                                                                               className="golink">contact
                                    us</Link></p>
                            <Link href="/" className="btn btn-default-grad-purple-fill mt-3">Go Home Page</Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
            <a href="#0" className="cd-top"> <i className="fas fa-angle-up"></i> </a>
            <Js />
        </>
    )
}