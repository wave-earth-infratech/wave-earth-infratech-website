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

                <section id="owl-demo" className="owl-carousel owl-theme owl-loaded owl-drag slider-02 scrollme">
                    <div className="full h-100 sec-bg6 bg-colorstyle">
                        <div className="vc-parent">
                            <div className="vc-child">
                                <div className="top-banner">
                                    <div className="container pe-5">
                                        <img className="svg custom-element-right" src="/patterns/ddoslayers.svg"
                                             alt="DDos Monitoring" />
                                            <div className="wow animated fadeInUp fast col-sm-12 col-md-5">
                                                <div className="heading mergecolor">DDoS <br/><span id="typed2"></span>
                                                    <br/>Websites</div>
                                                <h3 className="subheading text-break seccolor">Automatic Mitigation for
                                                    Sophisticated DDoS that quickly defeats attacks without impacting
                                                    site performance. Starting for only <strong
                                                        className="c-pink">$19.99/year</strong><br/>
                                                </h3>
                                                <a href="ddos" className="btn btn-default-yellow-fill me-2 mb-2">Get
                                                    Prices</a>
                                                <a href="ddos" className="btn btn-default-pink-fill mb-2">Learn more</a>
                                            </div>
                                    </div>
                                    <div className="owl-dots"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full h-100 sec-bg6 bg-colorstyle">
                        <div className="vc-parent">
                            <div className="vc-child">
                                <div className="top-banner">
                                    <div className="container pe-5">
                                        <img className="svg custom-element-right" src="/patterns/api.svg"
                                             alt="Dedicated Server" />
                                            <div className="col-sm-12 col-md-6">
                                                <div className="heading mergecolor">Dedicated <br/>Server with <br/> <span
                                                    id="typed1"></span></div>
                                                <h3 className="subheading text-break seccolor">Powerful servers with
                                                    high-end resources that will guarantee resource exclusivity,
                                                    starting at just <strong className="c-pink">$90.22/mo</strong><br/>
                                                </h3>
                                            </div>
                                            <a href="dedicated" className="btn btn-default-yellow-fill me-2 mb-2">Get
                                                Prices</a>
                                            <a href="dedicated" className="btn btn-default-pink-fill mb-2">Learn
                                                more</a>
                                    </div>
                                    <div className="owl-dots"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full h-100 sec-bg6 bg-colorstyle">
                        <div className="vc-parent">
                            <div className="vc-child">
                                <div className="top-banner">
                                    <div className="container pe-5">
                                        <img className="svg custom-element-right" src="/patterns/cloudvps.svg"
                                             alt="Cloud VPS Server" />
                                            <div className="col-sm-12 col-md-6">
                                                <h1 className="heading mergecolor">Virtual <br/>Cloud <br/>Servers</h1>
                                                <h3 className="subheading seccolor">
                                                    <i className="c-pink feat fas fa-check-circle me-2"></i> Immediate
                                                    scalability<br/>
                                                    <i className="c-pink feat fas fa-check-circle me-2"></i> High
                                                    performance<br/>
                                                    <i className="c-pink feat fas fa-check-circle me-2"></i> Fast
                                                    deployment
                                                </h3>
                                            </div>
                                            <a href="vps" className="btn btn-default-yellow-fill me-2 mb-2">Get
                                                Prices</a>
                                            <a href="vps" className="btn btn-default-pink-fill mb-2">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <img className="blobleft svg d-none" src="/img/background/blob.svg" alt="Blob Background" />

                    <section className="pricing special sec-bg2 bg-colorstyle specialposition">
                        <div className="container">
                            <div className="sec-up-slider nopadding">
                                <div className="row">
                                    <div className="col-md-12 col-lg-4">
                                        <div className="wrapper first noshadow">
                                            <div className="top-content bg-seccolorstyle topradius">
                                                <img className="svg mb-3" src="/fonts/svg/cloudfiber.svg" alt="" />
                                                    <div className="title">Shared Hosting</div>
                                                    <div className="fromer seccolor">Starting at:</div>
                                                    <div className="price seccolor"><sup>$</sup>8.19 <span
                                                        className="period">/month</span></div>
                                                    <a href="hosting" className="btn btn-default-yellow-fill">All
                                                        plans</a>
                                            </div>
                                            <ul className="list-info">
                                                <li><i className="icon-drives"></i> <span
                                                    className="c-purple">DISK</span><br/> <span>250GB SSD</span></li>
                                                <li><i className="icon-speed"></i> <span
                                                    className="c-purple">DATA</span><br/> <span>1TB Bandwidth</span></li>
                                                <li><i className="icon-emailopen"></i> <span
                                                    className="c-purple">EMAIL</span><br/> <span>120 Emails</span></li>
                                                <li><i className="icon-domains"></i> <span
                                                    className="c-purple">TLD</span><br/> <span>30 Domains</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-4">
                                        <div className="wrapper noshadow">
                                            <div className="plans badge feat bg-pink">recommended</div>
                                            <div className="top-content bg-seccolorstyle topradius">
                                                <img className="svg mb-3" src="/fonts/svg/dedicated.svg" alt="" />
                                                    <div className="title">Dedicated Server</div>
                                                    <div className="fromer seccolor">annually get (20% discount)</div>
                                                    <div className="price seccolor"><sup>$</sup>82.00 <span
                                                        className="period">/month</span></div>
                                                    <a href="configurator"
                                                       className="btn btn-default-yellow-fill">Configure</a>
                                            </div>
                                            <ul className="list-info bg-purple">
                                                <li><i className="icon-cpu"></i> <span className="c-pink">CPU</span><br/>
                                                    <span>4x 3.20Ghz 2 Cores</span></li>
                                                <li><i className="icon-ram"></i> <span className="c-pink">RAM</span><br/>
                                                    <span>16GB (up to 32GB)</span></li>
                                                <li><i className="icon-drivessd"></i> <span
                                                    className="c-pink">DRIVES</span><br/> <span>2 x 1TB SATA 3.5</span>
                                                </li>
                                                <li><i className="icon-git"></i> <span
                                                    className="c-pink">UPLINK</span><br/> <span>1Gbps - 20TB</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-4">
                                        <div className="wrapper third noshadow">
                                            <div className="top-content bg-seccolorstyle topradius">
                                                <img className="svg mb-3" src="/fonts/svg/vps.svg" alt="" />
                                                    <div className="title">Cloud VPS</div>
                                                    <div className="fromer seccolor">Starting at:</div>
                                                    <div className="price seccolor"><sup>$</sup>9.99 <span
                                                        className="period">/month</span></div>
                                                    <a href="vps" className="btn btn-default-yellow-fill">All plans</a>
                                            </div>
                                            <ul className="list-info">
                                                <li><i className="icon-cpu"></i> <span
                                                    className="c-purple">CPU</span><br/> <span>2 Cores</span></li>
                                                <li><i className="icon-ram"></i> <span
                                                    className="c-purple">RAM</span><br/> <span>2GB Memory</span></li>
                                                <li><i className="icon-drives"></i> <span
                                                    className="c-purple">DISK</span><br/> <span>20GB SSD Space</span>
                                                </li>
                                                <li><i className="icon-speed"></i> <span
                                                    className="c-purple">DATA</span><br/> <span>1TB Bandwidth</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                <section className="balancing sec-normal bg-colorstyle">
                    <div className="h-services">
                        <div className="container">
                            <div className="randomline">
                                <div className="bigline"></div>
                                <div className="smallline"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 className="section-heading whitecolor mergecolor">Cloud Load Balancing</h2>
                                    <p className="section-subheading whitecolor mergecolor">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-md-12">
                                    <div className="wrap-service load">
                                        <div className="wow animated fadeInUp fast">
                                            <img className="svg mt-50 w-100 ltr-img d-block"
                                                 src="/patterns/balancing.svg" alt="Load Balancing" />
                                                <img className="svg mt-50 w-100 rtl-img d-none"
                                                     src="/patterns/balancing-rtl.svg" alt="Load Balancing"/>
                                        </div>
                                        <div className="row text-info text-center">
                                            <div className="col-md-4 pb-2 pt-5"><b className="c-purple">[1] Users</b>
                                                <br/>
                                                    <span className="info seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                                            </div>
                                            <div className="col-md-4 pb-2 pt-5"><b className="c-purple">[2] Load
                                                Balancing</b> <br/>
                                                <span className="info seccolor">Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae omnis iste</span>
                                            </div>
                                            <div className="col-md-4 pb-2 pt-5"><b className="c-purple">[3] Cloud
                                                Servers</b> <br/>
                                                <span className="info seccolor">Omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <svg className="division-ontop bg-white d-none" viewBox="0 0 1440 150">
                    <path fill="#fdd700" fill-opacity="1"
                          d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                    </path>
                </svg>


                <section className="services sec-normal sec-bg4">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2 className="section-heading">Why Choose Ruralserver?</h2>
                                    <p className="section-subheading">Solutions to meet every Web Design & Development need Powering 1800+ Web Professionals globally with confidence. </p>
                                </div>
                                <div className="col-md-12 col-lg-4 wow animated fadeInUp fast">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <div className="plans badge feat bg-pink">Premium</div>
                                        <img className="svg" src="/fonts/svg/helpdesk.svg" alt="" />
                                            <div className="title mergecolor">Support 24x7x365</div>
                                            <p className="subtitle seccolor">
                                                Get instant help from our rapid support team
                                            </p>
                                            <a href="/about-ruralserver/" className="btn btn-default-yellow-fill">Read more</a>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 wow animated fadeInUp">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <div className="plans badge feat bg-pink">Control Panel</div>
                                        <img className="svg" src="/fonts/svg/window.svg" alt="" />
                                            <div className="title mergecolor">Directadmin fast hosting</div>
                                            <p className="subtitle seccolor">
                                                Included Softaculous, CloudLinux and Jetbackup
                                            </p>
                                            <a href="/about-ruralserver/" className="btn btn-default-yellow-fill">Read more</a>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 wow animated fadeInUp fast">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img className="svg" src="/fonts/svg/cloudmanaged.svg" alt="" />
                                            <div className="title mergecolor">Perfomance Optimized</div>
                                            <p className="subtitle seccolor">All shared hosting optimised with CloudLinux</p>
                                            <a href="/about-ruralserver/" className="btn btn-default-yellow-fill">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services maping sec-normal sec-grad-grey-to-grey bg-colorstyle bottompadding">
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
                                    <img src="/patterns/map.svg" className="lazyload w-10 animateme" alt="Load Balancing"
                                         data-when="view" data-from="1" data-to="0" data-opacity="0" />
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

                <section className="casestudy sec-bg2 bg-colorstyle">
                    <div className="container">
                        <div className="sec-main sec-up bg-purple mb-0 nomargin">
                            <img className="lazyload ltr-img d-block" src="img/casestudy.png"
                                 data-src="/img/casestudy.png" alt="Case Study"/>
                                <img className="lazyload rtl-img d-none" src="img/casestudy-rtl.png"
                                     data-src="/img/casestudy-rtl.png" alt="Case Study"/>
                                    <div className="plans badge feat bg-dark">case study</div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-9">
                                            <div className="slider-container slider-filter">
                                                <div className="slider-wrap">
                                                    <div className="swiper-container main-slider" data-autoplay="4000"
                                                         data-touch="1" data-mouse="0" data-slides-per-view="responsive"
                                                         data-loop="1" data-speed="1200" data-mode="horizontal"
                                                         data-xs-slides="1" data-sm-slides="1" data-md-slides="1"
                                                         data-lg-slides="1">
                                                        <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                <h3 className="author">Everth Group</h3>
                                                                <div className="content-info">
                                                                    <p>Sed ut perspiciatis unde omnis iste natus error
                                                                        sit voluptatem accusantium doloremque
                                                                        laudantium, totamer rem aperiam, eaque ipsa quae
                                                                        ab illo inventore veritatis et quasi.</p>
                                                                    <div className="mb-3"> Michael Jones - Executive
                                                                        Director
                                                                    </div>
                                                                    <a href="#"
                                                                       className="btn btn-default-yellow-fill mb-2">Case
                                                                        Study Download</a>
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <h3 className="author">RuralServer</h3>
                                                                <div className="content-info">
                                                                    <p>RuralServer is a leading provider of web hosting, reseller hosting, VPS hosting, cloud hosting and dedicated servers. We provide our clients a complete suite of products that help them establish & grow their online presence.</p>

                                                                    <a href="#f"
                                                                       className="btn btn-default-yellow-fill mb-2">Case
                                                                        Study Download</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="pagination vertical-mode pagination-index"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </section>

                <section className="services help sec-bg2 pt-4 pb-80 bg-colorstyle">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <a href="javascript:void(Tawk_API.toggle())" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/livechat.svg" height="65"
                                                     alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Live Chat</div>
                                                <div className="description seccolor">Live chat support 9:30 AM - 6:30 PM IST
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <a href="https://client.ruralserver.com/contact.php" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/emailopen.svg" height="65"
                                                     alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Send Ticket</div>
                                                <div className="description seccolor">Open ticket for sale and support department.
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <a href="https://client.ruralserver.com/knowledgebase.php" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/book.svg" height="65" alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Knowledge base</div>
                                                <div className="description seccolor">Knowledge Base and FAQ
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