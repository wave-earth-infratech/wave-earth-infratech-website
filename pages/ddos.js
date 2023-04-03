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
            <title>Ddos</title>
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
                                    <h1 className="heading">Powerful DDoS protection</h1>
                                    <h3 className="subheading">Automatic Mitigation for Sophisticated DDoS that quickly
                                        defeats attacks without impacting site performance.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
                <section className="pricing special sec-up-slider bg-colorstyle specialposition">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="wrapper first text-start wow animated fadeInUp fast noshadow">
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/security.svg" alt=""/>
                                            <div className="title">DDoS Layer 3</div>
                                            <div className="fromer seccolor">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit
                                            </div>
                                            <div className="price mergecolor"><sup>$</sup>19.99 <span
                                                className="period">/year</span></div>
                                            <a href="" className="btn btn-default-yellow-fill">Buy now</a>
                                    </div>
                                    <ul className="list-info">
                                        <li><i className="icon-lock"></i> <span className="c-purple">DDOS</span><br/>
                                            <span>3 Websites Protected</span></li>
                                        <li><i className="icon-global"></i> <span className="c-purple">DNS</span><br/>
                                            <span>DNS Amplification</span></li>
                                        <li><i className="icon-latency"></i> <span
                                            className="c-purple">TRAFFIC</span><br/> <span>15GB attack trafic</span></li>
                                        <li><i className="icon-layers"></i> <span className="c-purple">LAYER</span><br/>
                                            <span>Layer 3 attacks</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="wrapper text-start wow animated fadeInUp noshadow">
                                    <div className="plans badge feat bg-pink">most popular</div>
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/protection.svg" alt=""/>
                                            <div className="title">DDoS Layer 4</div>
                                            <div className="fromer seccolor">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit
                                            </div>
                                            <div className="price mergecolor"><sup>$</sup>32.00 <span
                                                className="period">/year</span></div>
                                            <a href="" className="btn btn-default-yellow-fill">Buy now</a>
                                    </div>
                                    <ul className="list-info bg-purple">
                                        <li><i className="icon-lock"></i> <span className="c-pink">DDOS</span><br/>
                                            <span>9 Websites Protected</span></li>
                                        <li><i className="icon-global"></i> <span className="c-pink">DNS</span><br/>
                                            <span>DNS Amplification</span></li>
                                        <li><i className="icon-latency"></i> <span className="c-pink">TRAFFIC</span><br/>
                                            <span>30GB attack trafic</span></li>
                                        <li><i className="icon-layers"></i> <span className="c-pink">LAYER</span><br/>
                                            <span>Layer 4 attacks</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="wrapper third text-start wow animated fadeInUp fast noshadow">
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/protected.svg" alt=""/>
                                            <div className="title">DDoS Layer 7</div>
                                            <div className="fromer seccolor">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit
                                            </div>
                                            <div className="price mergecolor"><sup>$</sup>70.99 <span
                                                className="period">/year</span></div>
                                            <a href="" className="btn btn-default-yellow-fill">Buy now</a>
                                    </div>
                                    <ul className="list-info">
                                        <li><i className="icon-lock"></i> <span className="c-purple">DDOS</span><br/>
                                            <span>12+ Websites Protected</span></li>
                                        <li><i className="icon-global"></i> <span className="c-purple">DNS</span><br/>
                                            <span>DNS Amplification</span></li>
                                        <li><i className="icon-latency"></i> <span
                                            className="c-purple">TRAFFIC</span><br/> <span>Unlimited attacks</span></li>
                                        <li><i className="icon-layers"></i> <span className="c-purple">LAYER</span><br/>
                                            <span>Layer 7 attacks</span></li>
                                    </ul>
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

                 
                <section className="services sec-normal exapath sec-bg4 scrollme">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2 className="section-heading">Why get an DDoS Protect from Antler?</h2>
                                    <p className="section-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
                                    <div className="service-section bg-colorstyle">
                                        <div className="plans badge feat bg-grey">datacenters</div>
                                        <img className="svg" src="/fonts/svg/redundancy.svg" alt=""/>
                                            <div className="title mergecolor">Quick Response</div>
                                            <p className="subtitle seccolor">
                                                Excepteur sint occaecat cupidatat non proident voluptate. Lorem ipsum
                                                dolor sit amet, consectetur.
                                            </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="100" data-easeinout="0">
                                    <div className="service-section bg-colorstyle">
                                        <img className="svg" src="/fonts/svg/target.svg" alt=""/>
                                            <div className="title mergecolor">Unrivaled accuracy</div>
                                            <p className="subtitle seccolor">
                                                Excepteur sint occaecat cupidatat non proident dolor. Lorem ipsum dolor
                                                sit amet, consectetur.
                                            </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
                                    <div className="service-section bg-colorstyle">
                                        <div className="plans badge feat bg-pink">visitors</div>
                                        <img className="svg" src="/fonts/svg/protection.svg" alt=""/>
                                            <div className="title mergecolor">Transparent protection</div>
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
                 
                <section id="features" className="history-section feat01 sec-normal sec-bg2 bg-colorstyle">
                    <div className="container">
                        <div className="randomline">
                            <div className="bigline"></div>
                            <div className="smallline"></div>
                        </div>
                        <div className="sec-main sec-bg1 bg-colorstyle noshadow">
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
                                    <a href="" className="btn btn-default-yellow-fill mt-3">Protect now</a>
                                </div>
                            </div>
                            <hr/>
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <div className="info-content">
                                            <h1 className="fw-bold mb-3 mergecolor">Multi-Layer DDoS Prevention</h1>
                                            <p className="seccolor">But I must explain to you how all this mistaken idea
                                                of <a href="#" className="golink">denouncing pleasure</a> and praising
                                                pain was born and I will.</p>
                                        </div>
                                        <a href="" className="btn btn-default-yellow-fill mt-3">Learn more</a>
                                    </div>
                                    <div className="col-md-12 col-lg-5 offset-lg-1 wow animated fadeInUp fast second">
                                        <img className="svg" src="/patterns/ddoslayers.svg"
                                             alt="DDoS Multi-Layers"/>
                                    </div>
                                </div>
                                <hr/>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-5 wow animated fadeInUp fast third">
                                            <img className="svg" src="/patterns/ddosalways.svg"
                                                 alt="Always DDoS Protection"/>
                                        </div>
                                        <div className="col-md-12 col-lg-6 offset-lg-1">
                                            <div className="info-content">
                                                <h1 className="fw-bold mb-3 mergecolor">Always On & On-Demand DDoS
                                                    Protection</h1>
                                                <p className="seccolor">But I must explain to you how all this mistaken
                                                    idea of <a href="#" className="golink">denouncing pleasure</a> and
                                                    praising pain was born and I will.</p>
                                            </div>
                                            <a href="" className="btn btn-default-yellow-fill mt-3">About ranking</a>
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

                 
                <section className="sec-normal sec-bg4">
                    <div className="team">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 text-center">
                                    <h2 className="section-heading">Did not find what you looking for?</h2>
                                    <p className="section-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt.</p>
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
                                        <div className="team-info bg-colorstyle">
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
                                        <div className="team-info bg-colorstyle">
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
                                        <div className="team-info bg-colorstyle">
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
                 
                <section className="help pt-4 pb-80 bg-seccolorstyle">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="help-container bg-colorstyle noshadow">
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
                                    <div className="help-container bg-colorstyle noshadow">
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