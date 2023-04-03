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
            <title>Linux reseller hosting</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />
                <div className="top-header item7 overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className="wrapper">
                                    <h1 className="heading">Cloud Reseller</h1>
                                    <h3 className="subheading">Cloud Reseller plans are designed for you to earn
                                        money!</h3>
                                    <div id="run-switch" className="run-switch">
                                        <div className="mo">Monthly Price</div>
                                        <div className="switch"></div>
                                        <div className="an active">Anually Price</div>
                                    </div>
                                    <div className="included">
                                        <h4 className="mb-3">All plans include</h4>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> c-Panel, WHM</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Unlimited traffic</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Unlimited Database</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Latest PHP Technology</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> 400+ Softaculous Apps</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Daily Backups</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <a className="gocontent godown gocheck" href="#scroll">
                    <img className="svg" src="/fonts/svg/arrowdown.svg" height="80" alt="features" />
                        <span>Features</span>
                </a>


                <section className="pricing special sec-uping pb-5 bg-colorstyle specialposition">
                    <div className="container">
                        <div className="randomline">
                            <div className="bigline"></div>
                            <div className="smallline"></div>
                        </div>
                        <div className="row justify-content-end scrollme">
                            <div className="col-sm-12 col-md-6 col-lg-4 animateme" data-when="enter" data-from="0"
                                 data-to="1" data-opacity="1" data-translatey="-20">
                                <div className="wrapper price-container text-start wow animated fadeInUp noshadow">
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/reseller.svg" height="65"
                                             alt="" />
                                            <div className="title">Linux 30 Accounts</div>
                                            <div className="fromer seccolor">annually get (20% discount)</div>
                                            <div className="price-content">
                                                <div className="price">
                                                    <sup className="coin mergecolor">$</sup>
                                                    <span className="value mergecolor">239.40</span>
                                                    <small className="mergecolor">/</small><span
                                                    className="period annually mergecolor">year</span>
                                                </div>
                                            </div>
                                            <a href="" className="btn btn-default-yellow-fill">Order now</a>
                                    </div>
                                    <ul className="list-info">
                                        <li><i className="icon-drives"></i> <span className="c-purple">DISK</span><br/>
                                            <span>250GB SSD</span></li>
                                        <li><i className="icon-speed"></i> <span className="c-purple">DATA</span><br/>
                                            <span>1TB Bandwidth</span></li>
                                        <li><i className="icon-emailopen"></i> <span
                                            className="c-purple">EMAIL</span><br/> <span>120 Emails</span></li>
                                        <li><i className="icon-domains"></i> <span className="c-purple">TLD</span><br/>
                                            <span>30 Domains</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 animateme" data-when="span" data-from="0"
                                 data-to="1" data-opacity="1" data-translatey="50">
                                <div className="wrapper price-container text-start wow animated fadeInUp fast noshadow">
                                    <div className="plans badge feat bg-pink">best value</div>
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/cloudlinux.svg" height="65"
                                             alt="" />
                                            <div className="title">Linux 80 accounts</div>
                                            <div className="fromer seccolor">annually get (20% discount)</div>
                                            <div className="price-content">
                                                <div className="price">
                                                    <sup className="coin mergecolor">$</sup>
                                                    <span className="value mergecolor">299.40</span>
                                                    <small className="mergecolor">/</small><span
                                                    className="period annually mergecolor">year</span>
                                                </div>
                                            </div>
                                            <a href="" className="btn btn-default-yellow-fill">Order now</a>
                                    </div>
                                    <ul className="list-info bg-purple">
                                        <li><i className="icon-drives"></i> <span className="c-pink">DISK</span><br/>
                                            <span>2TB SSD</span></li>
                                        <li><i className="icon-speed"></i> <span className="c-pink">DATA</span><br/>
                                            <span>Unlimited Bandwidth</span></li>
                                        <li><i className="icon-emailopen"></i> <span className="c-pink">EMAIL</span><br/>
                                            <span>Unlimited Emails</span></li>
                                        <li><i className="icon-domains"></i> <span className="c-pink">TLD</span><br/>
                                            <span>Unlimited Domains</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <img className="blobleft svg d-none" src="/img/background/blob.svg" alt="Blob Background" />


                    <section id="scroll" className="history-section feat01 sec-normal bg-colorstyle">
                        <div className="container">
                            <div className="randomline">
                                <div className="bigline"></div>
                                <div className="smallline"></div>
                            </div>
                            <div className="sec-main sec-bg1 bg-colorstyle noshadow nopadding">
                                <div className="row">
                                    <div className="col-md-12 col-lg-5 wow animated fadeInUp fast">
                                        <img className="svg first" src="/patterns/api.svg" alt="api automation" />
                                    </div>
                                    <div className="col-md-12 col-lg-6 offset-lg-1">
                                        <div className="info-content">
                                            <h1 className="fw-bold mb-3 mergecolor">Reseller API Automation</h1>
                                            <p className="seccolor">But I must explain to you how all this mistaken idea
                                                of <a href="#" className="golink">denouncing pleasure</a> and praising
                                                pain was born and I will.</p>
                                        </div>
                                        <a href="" className="btn btn-default-yellow-fill mt-3">Go API</a>
                                    </div>
                                </div>
                                <hr/>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="info-content">
                                                <h1 className="fw-bold mb-3 mergecolor">High Websites Performance</h1>
                                                <p className="seccolor">But I must explain to you how all this mistaken
                                                    idea of <a href="#" className="golink">denouncing pleasure</a> and
                                                    praising pain was born and I will.</p>
                                            </div>
                                            <a href="" className="btn btn-default-yellow-fill mt-3">Learn more</a>
                                        </div>
                                        <div className="col-md-12 col-lg-5 offset-lg-1 wow animated fadeInUp fast">
                                            <img className="svg second" src="/patterns/performance.svg"
                                                 alt="performance" />
                                        </div>
                                    </div>
                                    <hr/>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-6 wow animated fadeInUp fast ">
                                                <img className="svg third" src="/patterns/install.svg"
                                                     alt="1-click-installer" />
                                            </div>
                                            <div className="col-md-12 col-lg-5 offset-lg-1">
                                                <div className="info-content">
                                                    <h1 className="fw-bold mb-3 mergecolor">Easy 1-click-installer</h1>
                                                    <p className="seccolor">But I must explain to you how all this
                                                        mistaken idea of <a href="#" className="golink">denouncing
                                                            pleasure</a> and praising pain was born and I will.</p>
                                                </div>
                                                <a href="" className="btn btn-default-yellow-fill mt-3">Go cPanel</a>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </section>


                    <section className="services sec-normal scrollme motpath toppadding bg-colorstyle">
                        <div className="container">
                            <div className="service-wrap">
                                <div className="row">
                                    <div className="col-sm-12 text-center">
                                        <h2 className="section-heading mergecolor">Why choose Cloud Reseller?</h2>
                                        <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                         data-to="0" data-opacity="1" data-translatex="-60" data-easeinout="0">
                                        <div className="service-section bg-seccolorstyle noshadow">
                                            <img className="svg" src="/fonts/svg/hierarchy.svg" alt="" />
                                                <div className="title mergecolor">Seamless Upgrades</div>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat non proident voluptate. Lorem
                                                    ipsum dolor sit amet, consectetur.
                                                </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                         data-to="0" data-opacity="1" data-translatey="60" data-easeinout="0">
                                        <div className="service-section bg-seccolorstyle noshadow">
                                            <img className="svg" src="/fonts/svg/cloudmanaged.svg" alt="" />
                                                <div className="title mergecolor">Perfomance Optimized</div>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat non proident dolor. Lorem ipsum
                                                    dolor sit amet, consectetur.
                                                </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                         data-to="0" data-opacity="1" data-translatex="60" data-easeinout="0">
                                        <div className="service-section bg-seccolorstyle noshadow">
                                            <div className="plans badge feat bg-pink">control panel</div>
                                            <img className="svg" src="/fonts/svg/window.svg" alt="" />
                                                <div className="title mergecolor">Free cPanel & WHM</div>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat non proident voluptate. Lorem
                                                    ipsum dolor sit amet, consectetur.
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="sec-normal sec-bg1 bg-colorstyle">
                        <div className="best-plans pricing">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 text-center">
                                        <h2 className="section-heading mergecolor">Reseller Technical
                                            Specifications</h2>
                                        <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="table-responsive-lg">
                                            <table className="table sample mt-5">
                                                <thead>
                                                <tr>
                                                    <td>
                                                        <span className="title">Software </span> <span
                                                        className="badge bg-pink">PLUS</span>
                                                    </td>
                                                    <td>
                                                        <div className="title">Databases</div>
                                                    </td>
                                                    <td>
                                                        <div className="title">Additional Software</div>
                                                    </td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="title-table" data-bs-toggle="popover"
                                                             data-bs-trigger="hover" data-bs-placement="top"
                                                             data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                                            <span className="fas fa-check-circle me-2"></span> Latest
                                                            cPanel
                                                        </div>
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> MySQL 5.6
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> WordPress
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="title-table" data-bs-toggle="popover"
                                                             data-bs-trigger="hover" data-bs-placement="top"
                                                             data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                                            <span
                                                                className="fas fa-check-circle me-2"></span> CloudLinux
                                                            6.9
                                                        </div>
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> phpMyAdmin
                                                        4.6.6
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> Joomla,
                                                        Prestashop
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="title-table"><span
                                                        className="fas fa-check-circle me-2"></span> PHP 5.5/5.6/7.0
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> FTPES
                                                        Supported
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> Zend Engine
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="title-table"><span
                                                        className="fas fa-check-circle me-3"></span>Python 2.6.6
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> MSSQL Stored
                                                        Procedures
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> ionCube
                                                        Loader
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border-0"><a href=""
                                                                                className="btn btn-default-pink-fill">All
                                                        Specs</a></td>
                                                    <td className="border-0"><a href=""
                                                                                className="btn btn-default-pink-fill">All
                                                        Specs</a></td>
                                                    <td className="border-0"><a href=""
                                                                                className="btn btn-default-pink-fill">All
                                                        Specs</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="sec-normal sec-bg2 bg-seccolorstyle bottomhalfpadding">
                        <div className="faq">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 text-center">
                                        <h2 className="section-heading mergecolor">Frequently Asked Questions
                                            Reseller</h2>
                                        <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="accordion faq pt-5">
                                            <div className="panel-wrap">
                                                <div className="panel-title seccolor active">
                                                    <span>What exactly is Cloud Reseller?</span>
                                                    <div className="float-end">
                                                        <i className="fa fa-plus"></i>
                                                        <i className="fa fa-minus c-pink"></i>
                                                    </div>
                                                </div>
                                                <div className="panel-collapse d-block">
                                                    <div className="wrapper-collapse">
                                                        <div className="info">
                                                            <ul className="list seccolor">
                                                                <li>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna.</p>
                                                                    <p>Excepteur sint occaecat cupidatat non proident,
                                                                        sunt in culpa qui officia deserunt mollit anim
                                                                        id est laborum.</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel-wrap">
                                                <div className="panel-title seccolor">
                                                    <span>Is there a brandable control panel?</span>
                                                    <div className="float-end">
                                                        <i className="fa fa-plus"></i>
                                                        <i className="fa fa-minus c-pink"></i>
                                                    </div>
                                                </div>
                                                <div className="panel-collapse">
                                                    <div className="wrapper-collapse">
                                                        <div className="info">
                                                            <ul className="list seccolor">
                                                                <li>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna.</p>
                                                                    <p>Excepteur sint occaecat cupidatat non proident,
                                                                        sunt in culpa qui officia deserunt mollit anim
                                                                        id est laborum.</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel-wrap">
                                                <div className="panel-title seccolor">
                                                    <span>Can my Linux Reseller plan be upgraded when needed?</span>
                                                    <div className="float-end">
                                                        <i className="fa fa-plus"></i>
                                                        <i className="fa fa-minus c-pink"></i>
                                                    </div>
                                                </div>
                                                <div className="panel-collapse">
                                                    <div className="wrapper-collapse">
                                                        <div className="info">
                                                            <ul className="list seccolor">
                                                                <li>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna.</p>
                                                                    <p>Excepteur sint occaecat cupidatat non proident,
                                                                        sunt in culpa qui officia deserunt mollit anim
                                                                        id est laborum.</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel-wrap">
                                                <div className="panel-title seccolor">
                                                    <span>I am not sure about the plan, can I change it later on?</span>
                                                    <div className="float-end">
                                                        <i className="fa fa-plus"></i>
                                                        <i className="fa fa-minus c-pink"></i>
                                                    </div>
                                                </div>
                                                <div className="panel-collapse">
                                                    <div className="wrapper-collapse">
                                                        <div className="info">
                                                            <ul className="list seccolor">
                                                                <li>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna.</p>
                                                                    <p>Excepteur sint occaecat cupidatat non proident,
                                                                        sunt in culpa qui officia deserunt mollit anim
                                                                        id est laborum.</p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <img className="blobright svg d-none" src="/img/background/blob.svg" alt="Blob Background" />


                    <Footer />
            </div>
            <a href="#0" className="cd-top"> <i className="fas fa-angle-up"></i> </a>
            <Js />
        </>
    )
}