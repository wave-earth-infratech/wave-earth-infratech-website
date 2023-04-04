import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
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

            <Sidebar />

            <div className="rts-banner-three-area rts-section-gap">

                <div className="container pt--150 pb--90">
                    <div className="row">
                        <div className="banner-three-wrapper">
                            <span className="pre-title">Hospitality & Leisure</span>
                            <h1 className="title">
                                Where fluid <br/>
                                form describes <br/>
                        <span className="strock" id="fullText">
                            Function
                        </span>
                            </h1>
                            <span className="bottom">
                        Sports Faciites <br/>
                        Building, University of Cyprus <br/>
                        <span>/2015</span>
                    </span>

                            <div className="rts-to-bottom-start">
                                <a href="#about"><img src="/images/banner/shape/03.png" alt="shape image"/></a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="banner-image-area">
                    <img src="/images/banner/01.png" alt="banner-image"/>
                </div>
            </div>


            <Footer />

            <Js />
        </>
    )
}