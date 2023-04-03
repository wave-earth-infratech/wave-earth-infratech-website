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
            <title>Datacenter</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />
                <div className="top-header item7 overlay scrollme">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className="wrapper animateme" data-when="span" data-from="0" data-to="0.75"
                                     data-opacity="1" data-translatey="-50">
                                    <h1 className="heading">Our Data Center</h1>
                                    <h3 className="subheading mb-0">Reliable and Powerful Infrastructure</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <section className="sec-normal history-section custom sec-bg1 bg-colorstyle nobottompadding">
                    <div className="container">
                        <div className="popup-gallery">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 text-center">
                                    <h2 className="section-heading mergecolor">Our Data Center in pictures</h2>
                                    <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4 mt-50 position-relative">
                                    <a href="/img/topbanner01.jpg" className="image-link"
                                       title="Caption text example 01">
                                        <img src="/img/topbanner01.jpg" data-src="/img/topbanner01.jpg"
                                             className="lazyload" alt=""/>
                                            <div className="zoo-content">
                                                <div className="icoo">
                                                    <i className="icon-eye"></i>
                                                </div>
                                            </div>
                                    </a>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4 mt-50 position-relative">
                                    <a href="/img/topbanner02.jpg" className="image-link"
                                       title="Caption text example 02">
                                        <img src="/img/topbanner02.jpg" data-src="/img/topbanner02.jpg"
                                             className="lazyload" alt=""/>
                                            <div className="zoo-content">
                                                <div className="icoo">
                                                    <i className="icon-eye"></i>
                                                </div>
                                            </div>
                                    </a>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4 mt-50 position-relative">
                                    <a href="/img/topbanner03.jpg" className="image-link"
                                       title="Caption text example 03">
                                        <img src="/img/topbanner03.jpg" data-src="/img/topbanner03.jpg"
                                             className="lazyload" alt=""/>
                                            <div className="zoo-content">
                                                <div className="icoo">
                                                    <i className="icon-eye"></i>
                                                </div>
                                            </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="services sec-normal sec-bg2 scrollme bg-colorstyle nobottompadding">
                    <div className="container">
                        <div className="randomline">
                            <div className="bigline"></div>
                            <div className="smallline"></div>
                        </div>
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2 className="section-heading mergecolor">Security and confidentiality of your
                                        data</h2>
                                    <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
                                    <div className="service-section bg-seccolorstyle">
                                        <div className="plans badge feat bg-pink">auto</div>
                                        <img className="svg" src="/fonts/svg/toxic.svg" alt=""/>
                                            <div className="title mergecolor">Toxic gas detection system</div>
                                            <p className="subtitle seccolor">
                                                Excepteur sint occaecat cupidatat non proident voluptate. Lorem ipsum
                                                dolor sit amet, consectetur.
                                            </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="100" data-easeinout="0">
                                    <div className="service-section bg-seccolorstyle">
                                        <img className="svg" src="/fonts/svg/video.svg" alt=""/>
                                            <div className="title mergecolor">Restricted access</div>
                                            <p className="subtitle seccolor">
                                                Excepteur sint occaecat cupidatat non proident dolor. Lorem ipsum dolor
                                                sit amet, consectetur.
                                            </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
                                    <div className="service-section bg-seccolorstyle">
                                        <div className="plans badge feat bg-grey">pro</div>
                                        <img className="svg" src="/fonts/svg/goal.svg" alt=""/>
                                            <div className="title mergecolor">Anti-DDoS protection</div>
                                            <p className="subtitle seccolor">
                                                Excepteur sint occaecat cupidatat non proident voluptate. Lorem ipsum
                                                dolor sit amet, consectetur.
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="services maping sec-normal sec-grad-grey-to-grey bottompadding">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2 className="section-heading text-white mergecolor">Our Datacenters are Located in
                                        7 Regions</h2>
                                    <p className="section-subheading text-muted mergecolor"><span className="golink">Lorem ipsum dolor</span> sit
                                        amet, consectetur adipiscing elit sed, do eiusmod tempor <span
                                            className="c-pink">incididunt lorem ipsum</span> dolor sit amet</p>
                                </div>
                                <div className="col-md-12 pt-5 scrollme position-relative">
                                    <img src="/patterns/map.svg" className="lazyload w-10 animateme"
                                         alt="Load Balancing" data-when="view" data-from="1" data-to="0"
                                         data-opacity="0"/>
                                        <span className="datacenters montreal" data-bs-toggle="popover"
                                              data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                              title="Montreal"
                                              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                        <span className="datacenters newyork" data-bs-toggle="popover"
                                              data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                              title="New York"
                                              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                        <span className="datacenters portugal" data-bs-toggle="popover"
                                              data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                              title="Portugal"
                                              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                        <span className="datacenters london" data-bs-toggle="popover"
                                              data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                              title="London"
                                              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                        <span className="datacenters moskow" data-bs-toggle="popover"
                                              data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                              title="Moskow"
                                              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                        <span className="datacenters hongkong" data-bs-toggle="popover"
                                              data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                              title="Hong Kong"
                                              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                        <span className="datacenters singapure" data-bs-toggle="popover"
                                              data-bs-container="body" data-bs-trigger="hover" data-bs-placement="top"
                                              title="Singapure"
                                              data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section
                    className="history-section pb-80 sec-bg2 motpath noimage bg-seccolorstyle nobottompadding toppadding">
                    <div className="container">
                        <div className="sec-main sec-up mb-0 sec-bg1 bg-seccolorstyle noshadow">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="info-content">
                                        <h2 className="mb-4 mergecolor"><b>High Efficiency And Performance</b></h2>
                                        <p className="seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, <a href="" className="golink">quis nostrud exercitation
                                                ullamco</a> laboris nisi.</p>
                                        <p className="seccolor">But I must explain to you how all this mistaken idea of
                                            denouncing pleasure and praising pain was born and I will. Lorem ipsum dolor
                                            sit amet.</p>
                                    </div>
                                </div>
                                <div className="col-md-10 offset-md-1 pt-5 wow animated fadeInUp fast">
                                    <img className="svg" src="/patterns/efficiency.svg" alt="redundant"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="info-content">
                                        <h2 className="mb-4 mergecolor"><b>Maximum Physical Security</b></h2>
                                        <p className="seccolor">But I must explain to you how all this mistaken idea
                                            of <a href="" className="golink">denouncing pleasure</a> and praising pain
                                            was born and I will. Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt.</p>
                                        <p className="seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div className="col-md-10 offset-md-1 pt-5 wow animated fadeInUp fast">
                                    <img className="svg" src="/patterns/maxsecurity.svg" alt="scalable"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="info-content">
                                        <h2 className="mb-4 mergecolor"><b>High Availability Redundant Systems</b></h2>
                                        <p className="seccolor">But I must explain to you how all this mistaken idea of
                                            denouncing pleasure and praising pain was born and I will. Lorem ipsum dolor
                                            sit amet, <a href="" className="golink">consectetur adipiscing elit,</a> sed
                                            do eiusmod tempor incididunt.</p>
                                        <p className="seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>
                                <div className="col-md-10 offset-md-1 pt-5 wow animated fadeInUp fast">
                                    <img className="svg" src="/patterns/redundant.svg" alt="provisioning"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <img className="blobright svg d-none" src="/img/background/blob.svg" alt="Blob Background"/>
                    
                    <section className="getready sec-bg1 scrollme bg-seccolorstyle">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="column-support-txt animateme" data-when="span" data-from="1"
                                         data-to="0" data-opacity="1" data-translatex="-60" data-easeinout="0">
                                        <div className="column-support-title text-dark mergecolor">Watch Antler Data
                                            Center
                                        </div>
                                        <div className="column-support-subtitle text-dark mergecolor">Your services in
                                            advanced Data Centers and Infrastructures.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="btn-floats">
                                        <a className="btn btn-default-yellow-fill me-3 popup-youtube"
                                           href="http://www.youtube.com/watch?v=0O2aH4XLbto">Video Data Center</a>
                                        <a href="contact.html" className="btn btn-default-pink-fill">Contact Us</a>
                                    </div>
                                </div>
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