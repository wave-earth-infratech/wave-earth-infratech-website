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
            <title>Shared linux hosting</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />
                <section className="main-container slider">
                    <div className="silder-container">
                        <div className="carousel header-main-slider">
                            
                            <div className="carousel-cell overlay">
                                <div className="total-grad-pink-blue-intense"></div>
                                <div className="slider-content">
                                    <div className="container ">
                                        <div className="col-sm-12 col-md-12 px-0">
                                            <h1 data-aos="fade-up" data-aos-duration="800">Gaming Servers <br/> <span
                                                id="typed3"></span></h1>
                                            <p data-aos="fade-up" data-aos-duration="1200">Powerful servers with
                                                high-end resources that will guarantee<br/> resource exclusivity and
                                                    highest level of gaming server availability <br/>starting at just <b
                                                        className="c-pink">$3.00/mo</b><br/></p>
                                            <a href="#" className="btn btn-default-yellow-fill me-3 mb-2">Get Plans</a>
                                            <a href="#" className="btn btn-default-pink-fill mb-2">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel">
                                    <img className="svg opa-4 img-defaultbanner" src="/patterns/gaming.svg"
                                         alt="Gaming Servers"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                
                <section className="pricing special sec-up-slider bg-colorstyle specialposition">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="wrapper first text-start noshadow">
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/dedicated.svg" alt=""/>
                                            <div className="title">Minecraft Server</div>
                                            <div className="fromer seccolor">High Performance starting at:</div>
                                            <div className="price mergecolor"><sup>$</sup>3.00 <span
                                                className="period">/month</span></div>
                                            <a href="#" className="btn btn-default-yellow-fill">All plans</a>
                                    </div>
                                    <ul className="list-info">
                                        <li><i className="icon-cpu"></i> <span
                                            className="c-purple">Intel Xeon</span><br/> <span>6x 3.20Ghz</span></li>
                                        <li><i className="icon-ram"></i> <span className="c-purple">RAM DDR4</span><br/>
                                            <span>32GB (up to 128GB)</span></li>
                                        <li><i className="icon-drives"></i> <span
                                            className="c-purple">DISK RAID 1</span><br/> <span>480GB SSD</span></li>
                                        <li><i className="icon-inverse"></i> <span
                                            className="c-purple">BACKUPS</span><br/> <span>Auto 6H</span></li>
                                        <li><i className="icon-protection"></i> <span
                                            className="c-purple">DDOS PRO</span><br/> <span>Included</span></li>
                                        <li><i className="icon-location"></i> <span className="c-purple">LOCATION</span><br/>
                                            <span>Falkenstein</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="wrapper text-start noshadow">
                                    <div className="plans badge feat bg-pink">premium</div>
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/dedicated.svg" alt=""/>
                                            <div className="title">Counter Strike Server</div>
                                            <div className="fromer seccolor">Powerful Performance starting at:</div>
                                            <div className="price mergecolor"><sup>$</sup>7.20 <span
                                                className="period">/month</span></div>
                                            <a href="#" className="btn btn-default-yellow-fill">All plans</a>
                                    </div>
                                    <ul className="list-info bg-purple">
                                        <li><i className="icon-cpu"></i> <span className="c-pink">Intel Xeon</span><br/>
                                            <span>12x 3.50Ghz</span></li>
                                        <li><i className="icon-ram"></i> <span className="c-pink">RAM DDR4</span><br/>
                                            <span>32GB (up to 128GB)</span></li>
                                        <li><i className="icon-drives"></i> <span
                                            className="c-pink">DISK RAID 1</span><br/> <span>480GB SSD</span></li>
                                        <li><i className="icon-inverse"></i> <span className="c-pink">BACKUPS</span><br/>
                                            <span>Auto 12H</span></li>
                                        <li><i className="icon-protection"></i> <span className="c-pink">DDOS PRO</span><br/>
                                            <span>Included</span></li>
                                        <li><i className="icon-location"></i> <span
                                            className="c-pink">LOCATION</span><br/> <span>New York, US</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="wrapper third text-start noshadow">
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/dedicated.svg" alt=""/>
                                            <div className="title seccolor">Starbound Server</div>
                                            <div className="fromer seccolor">Extreme Performance starting at:</div>
                                            <div className="price mergecolor"><sup>$</sup>9.99 <span
                                                className="period">/month</span></div>
                                            <a href="#" className="btn btn-default-yellow-fill">All plans</a>
                                    </div>
                                    <ul className="list-info">
                                        <li><i className="icon-cpu"></i> <span
                                            className="c-purple">Intel Xeon</span><br/> <span>12x 3.70Ghz</span></li>
                                        <li><i className="icon-ram"></i> <span className="c-purple">RAM DDR4</span><br/>
                                            <span>64GB (up to 256GB)</span></li>
                                        <li><i className="icon-drives"></i> <span
                                            className="c-purple">DISK RAID 10</span><br/> <span>512GB SSD</span></li>
                                        <li><i className="icon-inverse"></i> <span
                                            className="c-purple">BACKUPS</span><br/> <span>Auto 3H</span></li>
                                        <li><i className="icon-protection"></i> <span
                                            className="c-purple">DDOS PRO</span><br/> <span>Included</span></li>
                                        <li><i className="icon-location"></i> <span className="c-purple">LOCATION</span><br/>
                                            <span>Los Angeles, US</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="services sec-normal sec-bg3 motpath scrollme bg-colorstyle">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2 className="section-heading text-white mergecolor">Why Antler Gaming
                                        Servers?</h2>
                                    <p className="section-subheading text-muted mergecolor">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
                                    <div className="service-section bg-seccolorstyle noshadow">
                                        <img className="svg" src="/fonts/svg/gaming.svg" alt=""/>
                                            <div className="title mergecolor">MC:PC & MC:PE Support</div>
                                            <p className="subtitle seccolor">
                                                Excepteur sint occaecat cupidatat non proident voluptate. Lorem ipsum
                                                dolor sit amet, consectetur.
                                            </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="100" data-easeinout="0">
                                    <div className="service-section bg-seccolorstyle noshadow">
                                        <img className="svg" src="/fonts/svg/speed.svg" alt=""/>
                                            <div className="title mergecolor">Fast Activation</div>
                                            <p className="subtitle seccolor">
                                                Excepteur sint occaecat cupidatat non proident dolor. Lorem ipsum dolor
                                                sit amet, consectetur.
                                            </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
                                    <div className="service-section bg-seccolorstyle noshadow">
                                        <div className="plans badge feat bg-pink">manage</div>
                                        <img className="svg" src="/fonts/svg/window.svg" alt=""/>
                                            <div className="title mergecolor">Intuitive Control Panel</div>
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
                
                <section id="scroll" className="history-section feat01 sec-normal pb-0 bg-colorstyle">
                    <div className="container">
                        <div className="randomline">
                            <div className="bigline"></div>
                            <div className="smallline"></div>
                        </div>
                        <div className="sec-main sec-bg1 bg-colorstyle noshadow nopadding">
                            <div className="row">
                                <div className="col-md-12 col-lg-5 wow animated fadeInUp fast first">
                                    <img className="svg" src="/patterns/protectvisitors.svg"
                                         alt="DDoS Protection"/>
                                </div>
                                <div className="col-md-12 col-lg-6 offset-lg-1">
                                    <div className="info-content">
                                        <h1 className="fw-bold mb-3 mergecolor">Most Powerful DDoS Protection</h1>
                                        <p className="seccolor">But I must explain to you how all this mistaken idea
                                            of <a href="#" className="golink">denouncing pleasure</a> and praising pain
                                            was born and I will.</p>
                                    </div>
                                    <a href="#" className="btn btn-default-yellow-fill mt-3">Protect now</a>
                                </div>
                            </div>
                            <hr/>
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <div className="info-content">
                                            <h1 className="fw-bold mb-3 mergecolor">High Performance Hardware</h1>
                                            <p className="seccolor">But I must explain to you how all this mistaken idea
                                                of <a href="#" className="golink">denouncing pleasure</a> and praising
                                                pain was born and I will.</p>
                                        </div>
                                        <a href="" className="btn btn-default-yellow-fill mt-3">Upgrade now</a>
                                    </div>
                                    <div className="col-md-12 col-lg-5 offset-lg-1 wow animated fadeInUp fast">
                                        <img className="svg second" src="/patterns/performance.svg"
                                             alt="performance"/>
                                    </div>
                                </div>
                                <hr/>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-5 wow animated fadeInUp fast">
                                            <img className="svg third" src="/patterns/monitoring.svg"
                                                 alt="monitoring 24/7/365"/>
                                        </div>
                                        <div className="col-md-12 col-lg-6 offset-lg-1">
                                            <div className="info-content">
                                                <h1 className="fw-bold mb-3 mergecolor">24/7/365 Monitoring &
                                                    Support</h1>
                                                <p className="seccolor">But I must explain to you how all this mistaken
                                                    idea of <a href="#" className="golink">denouncing pleasure</a> and
                                                    praising pain was born and I will.</p>
                                            </div>
                                            <a href="#" className="btn btn-default-yellow-fill mt-3">Learn more</a>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </section>

                
                <section className="help pt-4 pb-80 globalpadding bg-colorstyle tophalfpadding">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <div className="plans badge feat left bg-grey"><i
                                            className="fas fa-long-arrow-alt-left"></i></div>
                                        <a href="hosting" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/cloudfiber.svg"
                                                     height="65" alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Go to Shared Hosting</div>
                                                <div className="description seccolor">Need similar power but a simpler
                                                    solution?
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <div className="plans badge feat bg-grey"><i
                                            className="fas fa-long-arrow-alt-right"></i></div>
                                        <a href="dedicated" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/dedicated.svg"
                                                     height="65" alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Go to Dedicated Server</div>
                                                <div className="description seccolor">Need more power and resources?
                                                </div>
                                            </div>
                                        </a>
                                    </div>
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