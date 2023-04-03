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
            <title>About Ruralserver</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />
                <div className="top-header item8 overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className="wrapper">
                                    <h1 className="heading">About Us</h1>
                                    <div className="included">
                                        <h4 className="mb-3">Why Choose Antler?</h4>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Best hosting provider</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Award cloud infrastructure</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Awesome control panels</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Reference Domain solutions</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Support Premium 24/7/365</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <section id="clientstats" className="pricing special sec-uping scrollme bg-colorstyle specialposition">
                    <div className="container">
                        <div className="row justify-content-end pb-80">
                            <div className="col-sm-12 col-md-6 col-lg-4 animateme" data-when="enter" data-from="0"
                                 data-to="1" data-opacity="1" data-translatey="-20">
                                <div className="wrapper price-container text-start bg-seccolorstyle noshadow">
                                    <div className="top-content pb-5">
                                        <img className="svg mb-3" src="/fonts/svg/woman.svg" height="65" alt=""/>
                                            <div className="title mergecolor">19.322+ Clients</div>
                                            <div className="fromer pt-3 seccolor">More than 19,322+ active customers
                                                trust to us daily about 52.120 services.
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 animateme" data-when="span" data-from="0"
                                 data-to="1" data-opacity="1" data-translatey="50">
                                <div className="wrapper price-container text-start bg-seccolorstyle noshadow">
                                    <div className="plans badge feat bg-grey">top</div>
                                    <div className="top-content pb-5">
                                        <img className="svg mb-3" src="/fonts/svg/rack.svg" height="65" alt=""/>
                                            <div className="title mergecolor">9.510 Infrastructure</div>
                                            <div className="fromer pt-3 seccolor">7 Datacenters with 2750+ servers have
                                                high availability systems.
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="sec-normal sec-bg2 bg-colorstyle tophalfpadding nobottompadding">
                    <div className="team">
                        <div className="container">
                            <div className="randomline">
                                <div className="bigline"></div>
                                <div className="smallline"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 text-center">
                                    <h2 className="section-heading mergecolor">Meet Our Management Team</h2>
                                    <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="wrapper">
                                        <div className="img-section">
                                            <div className="soc-icons-wrap">
                                                <div className="icons">
                                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                                    <a href=""><i className="fab fa-google-plus-g"></i></a>
                                                    <a href=""><i className="fab fa-twitter"></i></a>
                                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-info bg-seccolorstyle noshadow">
                                            <img className="svg" src="/patterns/supportman.svg" alt="team"/>
                                                <h3 className="heading mergecolor">John T. Erikson</h3>
                                                <div className="subheading seccolor">Support, Helpdesk</div>
                                                <div className="desc seccolor">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit
                                                </div>
                                                <a href="#" className="btn btn-default-yellow-fill mt-4">Contact</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="wrapper">
                                        <div className="img-section">
                                            <div className="soc-icons-wrap">
                                                <div className="icons">
                                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                                    <a href=""><i className="fab fa-google-plus-g"></i></a>
                                                    <a href=""><i className="fab fa-twitter"></i></a>
                                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-info bg-seccolorstyle noshadow">
                                            <img className="svg" src="/patterns/commercialman.svg" alt="team"/>
                                                <h3 className="heading mergecolor">Walter T. Adams</h3>
                                                <div className="subheading seccolor">Commercial Department</div>
                                                <div className="desc seccolor">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit
                                                </div>
                                                <a href="#" className="btn btn-default-yellow-fill mt-4">Contact</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="wrapper">
                                        <div className="img-section">
                                            <div className="soc-icons-wrap">
                                                <div className="icons">
                                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                                    <a href=""><i className="fab fa-google-plus-g"></i></a>
                                                    <a href=""><i className="fab fa-twitter"></i></a>
                                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-info bg-seccolorstyle noshadow">
                                            <div className="plans badge feat bg-pink">online</div>
                                            <img className="svg" src="/patterns/salesman.svg" alt="team"/>
                                                <h3 className="heading mergecolor">Verna B. Ahmed</h3>
                                                <div className="subheading seccolor">Sales Department</div>
                                                <div className="desc seccolor">Lorem ipsum dolor sit amet, consectetur
                                                    adipiscing elit
                                                </div>
                                                <a href="#" className="btn btn-default-yellow-fill mt-4">Contact</a>
                                        </div>
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
                
                <section className="casestudy sec-bg1 bg-colorstyle">
                    <div className="container">
                        <div className="sec-main sec-up bg-purple mb-0 nomargin">
                            <img className="lazyload ltr-img d-block" src="/img/casestudy.png"
                                 data-src="/img/casestudy.png" alt="Case Study"/>
                                <img className="lazyload rtl-img d-none" src="/img/casestudy-rtl.png"
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
                                                                    <a href="casestudy/casestudy-everthgroup.pdf"
                                                                       className="btn btn-default-yellow-fill mb-2">Case
                                                                        Study Download</a>
                                                                </div>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <h3 className="author">Growtop Company</h3>
                                                                <div className="content-info">
                                                                    <p>Sed ut perspiciatis unde omnis iste natus error
                                                                        sit voluptatem accusantium doloremque
                                                                        laudantium, totamer rem aperiam, eaque ipsa quae
                                                                        ab illo inventore.</p>
                                                                    <div className="mb-3"> Matt Radford -
                                                                        President &amp; Managing Director
                                                                    </div>
                                                                    <a href="/casestudy/casestudy-growtop.pdf"
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
                
                <section className="getready sec-bg1 bg-colorstyle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="column-support-txt">
                                    <h2 className="section-heading mergecolor">Visit our facilities!</h2>
                                    <p className="section-subheading mergecolor">Please schedule an date with our sales
                                        manager if you're interested in visit us.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="btn-floats">
                                    <a href="contact.html" className="btn btn-default-pink-fill">Contact Sales
                                        Manager</a>
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