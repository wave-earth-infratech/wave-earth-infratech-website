import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'



function SharedLinuxHosting({ data }) {
    return (
        <>
            <Meta />
            <Head>
            <title>Shared linux hosting</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />

                <div className="top-header item5 overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className="wrapper">
                                    <h1 className="heading">Shared Hosting</h1>
                                    <h3 className="subheading col-sm-8">Blazing fast & stable hosting
                                        infrastructure</h3>

                                    <div className="included">
                                        <h4 className="mb-3">All plans include</h4>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Directadmin litespeed</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Unlimited email</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Free SSL certificate</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Redundant DNS</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Powerful SSD</li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-check-circle"></i> Support 24/7/365</li>
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
                                <div className="wrapper price-container text-start wow animated fadeInUp fast noshadow">
                                    <div className="plans badge feat bg-pink">30% Discount</div>
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/cloudlinux.svg" alt="" />
                                        <div className="title">{data.p_117.name}</div>
                                        <div className="fromer seccolor">annually get (20% discount)</div>
                                        <div className="price-content">
                                            <div className="price">
                                                <sup className="coin mergecolor">{data.p_117.pricing.INR.prefix}</sup>
                                                <span className="discount mergecolor">{data.p_117.pricing.INR.annually}</span>
                                                <small className="mergecolor">/</small><span
                                                className="period annually mergecolor">year</span>
                                            </div>
                                            <div className="price">
                                                <sup className="coin mergecolor">{data.p_117.pricing.USD.prefix}</sup>
                                                <span className="discount mergecolor">{data.p_117.pricing.USD.annually}</span>
                                                <small className="mergecolor">/</small><span
                                                className="period annually mergecolor">year</span>
                                            </div>
                                        </div>
                                        <a href="http://inebur.com/whmcs/cart.php?a=add&pid=9&carttpl=antler"
                                           className="btn btn-default-yellow-fill">Order now</a>
                                    </div>

                                    <ul className="list-info">
                                        <li><i className="icon-drives"></i> <span className="c-purple">DISK</span><br/>
                                            <span>50GB SSD</span></li>
                                        <li><i className="icon-speed"></i> <span className="c-purple">DATA</span><br/>
                                            <span>1TB Bandwidth</span></li>
                                        <li><i className="icon-emailopen"></i> <span
                                            className="c-purple">EMAIL</span><br/> <span>120 Emails</span></li>
                                        <li><i className="icon-domains"></i> <span className="c-purple">TLD</span><br/>
                                            <span>1 Domains</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 animateme" data-when="span" data-from="0"
                                 data-to="1" data-opacity="1" data-translatey="50">
                                <div className="wrapper price-container text-start wow animated fadeInUp noshadow">
                                    <div className="plans badge feat bg-grey">best value</div>
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/cloudlinux.svg" alt="" />
                                        <div className="title">{data.p_3.name}</div>
                                        <div className="fromer seccolor">annually get (20% discount)</div>
                                        <div className="price-content">
                                            <div className="price">
                                                <sup className="coin mergecolor">{data.p_3.pricing.INR.prefix}</sup>
                                                <span className="discount mergecolor">{data.p_3.pricing.INR.annually}</span>
                                                <small className="mergecolor">/</small><span
                                                className="period annually mergecolor">year</span>
                                            </div>
                                            <div className="price">
                                                <sup className="coin mergecolor">{data.p_3.pricing.USD.prefix}</sup>
                                                <span className="discount mergecolor">{data.p_3.pricing.USD.annually}</span>
                                                <small className="mergecolor">/</small><span
                                                className="period annually mergecolor">year</span>
                                            </div>
                                        </div>
                                        <a href="http://inebur.com/whmcs/cart.php?a=add&pid=10&carttpl=antler"
                                           className="btn btn-default-yellow-fill">Order now</a>
                                    </div>
                                    <ul className="list-info bg-purple">
                                        <li><i className="icon-drives"></i> <span className="c-pink">DISK</span><br/>
                                            <span>2TB SSD</span></li>
                                        <li><i className="icon-speed"></i> <span className="c-pink">DATA</span><br/>
                                            <span>Unlimited Bandwidth</span></li>
                                        <li><i className="icon-emailopen"></i> <span className="c-pink">EMAIL</span><br/>
                                            <span>Unlimited Emails</span></li>
                                        <li><i className="icon-domains"></i> <span className="c-pink">TLD</span><br/>
                                            <span>5 Domains</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="scroll" className="history-section feat01 sec-normal bg-colorstyle">
                    <div className="container">
                        <div className="randomline">
                            <div className="bigline"></div>
                            <div className="smallline"></div>
                        </div>
                        <div className="sec-main sec-bg1 bg-colorstyle noshadow nopadding">
                            <div className="row">
                                <div className="col-md-12 col-lg-5 wow animated fadeInUp fast">
                                    <img className="svg first" src="/patterns/dns.svg" alt="dns redundant" />
                                </div>
                                <div className="col-md-12 col-lg-6 offset-lg-1">
                                    <div className="info-content">
                                        <h1 className="fw-bold mb-3 mergecolor">Redundant DNS</h1>
                                        <p className="seccolor">But I must explain to you how all this mistaken idea
                                            of <a href="#" className="golink">denouncing pleasure</a> and praising pain
                                            was born and I will.</p>
                                    </div>
                                    <a href="#" className="btn btn-default-yellow-fill mt-3">Learn more</a>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="info-content">
                                        <h1 className="fw-bold mb-3 mergecolor">Remote Daily Backups</h1>
                                        <p className="seccolor">But I must explain to you how all this mistaken idea
                                            of <a href="#" className="golink">denouncing pleasure</a> and praising
                                            pain was born and I will.</p>
                                    </div>
                                    <a href="" className="btn btn-default-yellow-fill mt-3">Backup now</a>
                                </div>
                                <div className="col-md-12 col-lg-5 offset-lg-1 wow animated fadeInUp fast">
                                    <img className="svg second" src="/patterns/backups.svg" alt="backups" />
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-12 col-lg-5 wow animated fadeInUp fast">
                                    <img className="svg third" src="/patterns/monitoring.svg"
                                         alt="monitoring 24/7/365" />
                                </div>
                                <div className="col-md-12 col-lg-6 offset-lg-1">
                                    <div className="info-content">
                                        <h1 className="fw-bold mb-3 mergecolor">24/7/365 Monitoring</h1>
                                        <p className="seccolor">But I must explain to you how all this mistaken
                                            idea of <a href="#" className="golink">denouncing pleasure</a> and
                                            praising pain was born and I will.</p>
                                    </div>
                                    <a href="" className="btn btn-default-yellow-fill mt-3">Learn more</a>
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

                <section className="services sec-normal motpath sec-bg4 scrollme">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2 className="section-heading">Why choose Antler for your hosting?</h2>
                                    <p className="section-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
                                    <div className="service-section bg-colorstyle">
                                        <div className="plans badge feat bg-pink">Softaculous</div>
                                        <img className="svg" src="/fonts/svg/select.svg" height="60" alt="" />
                                        <div className="title mergecolor">Easy 1-click-installer</div>
                                        <p className="subtitle seccolor">
                                            Excepteur sint occaecat cupidatat non proident voluptate. Lorem ipsum
                                            dolor sit amet, consectetur.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="100" data-easeinout="0">
                                    <div className="service-section bg-colorstyle">
                                        <img className="svg" src="/fonts/svg/speed.svg" height="60" alt="" />
                                        <div className="title mergecolor">Superfast Websites</div>
                                        <p className="subtitle seccolor">
                                            Excepteur sint occaecat cupidatat non proident dolor. Lorem ipsum dolor
                                            sit amet, consectetur.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 animateme" data-when="enter" data-from="1"
                                     data-to="0" data-opacity="1" data-translatey="-100" data-easeinout="0">
                                    <div className="service-section bg-colorstyle">
                                        <div className="plans badge feat bg-pink">Free</div>
                                        <img className="svg" src="/fonts/svg/inverse.svg" height="60" alt="" />
                                        <div className="title mergecolor">Website Migrations</div>
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
                <section className="sec-normal sec-bg1 bg-colorstyle  nobottompadding">
                    <div className="best-plans pricing">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2 className="section-heading mergecolor">Hosting Technical Specifications</h2>
                                    <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-sm-12">
                                    <div className="table-responsive-lg">
                                        <table className="table sample mt-5">
                                            <thead>
                                            <tr>
                                                <td><span className="title">Software </span> <span
                                                    className="badge bg-pink">PLUS</span></td>
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
                                                        <span className="fas fa-check-circle me-2"></span> PHP
                                                        5.5/5.6/7.0/7.1
                                                    </div>
                                                </td>
                                                <td><span className="fas fa-check-circle me-2"></span> MySQL 5.6</td>
                                                <td><span className="fas fa-check-circle me-2"></span> Zend Engine</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="title-table" data-bs-toggle="popover"
                                                         data-bs-trigger="hover" data-bs-placement="top"
                                                         data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                                        <span className="fas fa-check-circle me-2"></span> Perl
                                                    </div>
                                                </td>
                                                <td><span className="fas fa-check-circle me-2"></span> phpMyAdmin 4.6.6
                                                </td>
                                                <td><span className="fas fa-check-circle me-2"></span> Zend Optimizer
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="title-table"><span
                                                    className="fas fa-check-circle me-2"></span> Python 2.6.6
                                                </td>
                                                <td><span className="fas fa-check-circle me-2"></span> FTPES Supported
                                                </td>
                                                <td><span className="fas fa-check-circle me-2"></span> Zend Guard Loader
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="title-table"><span
                                                    className="fas fa-check-circle me-3"></span> PostgreSQL
                                                </td>
                                                <td><span className="fas fa-check-circle me-2"></span> MSSQL Stored
                                                    Procedures
                                                </td>
                                                <td><span className="fas fa-check-circle me-2"></span> ionCube Loader
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
                <img className="blobright svg d-none" src="/img/background/blob.svg" alt="Blob Background" />

                <section className="sec-normal sec-bg2 bg-colorstyle">
                    <div className="faq">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 text-center">
                                    <h2 className="section-heading mergecolor">Frequently Asked Questions
                                        Hosting</h2>
                                    <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-sm-12">
                                    <div className="accordion faq pt-5">
                                        <div className="panel-wrap">
                                            <div className="panel-title seccolor active">
                                                <span>What is Cloud Hosting?</span>
                                                <div className="float-end">
                                                    <i className="fa fa-plus"></i>
                                                    <i className="fa fa-minus c-pink"></i>
                                                </div>
                                            </div>
                                            <div className="panel-collapse inlinecss d-block" >
                                                <div className="wrapper-collapse">
                                                    <div className="info">
                                                        <ul className="list seccolor">
                                                            <li><p>Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                                                labore et dolore magna.</p><p>Excepteur sint
                                                                occaecat cupidatat non proident, sunt in culpa qui
                                                                officia deserunt mollit anim id est laborum.</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel-wrap">
                                            <div className="panel-title seccolor">
                                                <span>Does Shared Web Hosting include Email Hosting as well?</span>
                                                <div className="float-end">
                                                    <i className="fa fa-plus"></i>
                                                    <i className="fa fa-minus c-pink"></i>
                                                </div>
                                            </div>
                                            <div className="panel-collapse">
                                                <div className="wrapper-collapse">
                                                    <div className="info">
                                                        <ul className="list seccolor">
                                                            <li><p>Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                                                labore et dolore magna.</p><p>Excepteur sint
                                                                occaecat cupidatat non proident, sunt in culpa qui
                                                                officia deserunt mollit anim id est laborum.</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel-wrap">
                                            <div className="panel-title seccolor">
                                                <span>Is an upgrade possible from my current Linux Shared Hosting Plan?</span>
                                                <div className="float-end">
                                                    <i className="fa fa-plus"></i>
                                                    <i className="fa fa-minus c-pink"></i>
                                                </div>
                                            </div>
                                            <div className="panel-collapse">
                                                <div className="wrapper-collapse">
                                                    <div className="info">
                                                        <ul className="list seccolor">
                                                            <li><p>Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                                                labore et dolore magna.</p><p>Excepteur sint
                                                                occaecat cupidatat non proident, sunt in culpa qui
                                                                officia deserunt mollit anim id est laborum.</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel-wrap">
                                            <div className="panel-title seccolor">
                                                <span>Is there any money back guarantee with the Linux Web Hosting services?</span>
                                                <div className="float-end">
                                                    <i className="fa fa-plus"></i>
                                                    <i className="fa fa-minus c-pink"></i>
                                                </div>
                                            </div>
                                            <div className="panel-collapse">
                                                <div className="wrapper-collapse">
                                                    <div className="info">
                                                        <ul className="list seccolor">
                                                            <li><p>Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit, sed do eiusmod tempor incididunt ut
                                                                labore et dolore magna.</p><p>Excepteur sint
                                                                occaecat cupidatat non proident, sunt in culpa qui
                                                                officia deserunt mollit anim id est laborum.</p>
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

                <section className="circle-section sec-normal sec-bg1 bg-seccolorstyle bottomhalfpadding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 text-center">
                                <h2 className="section-heading mergecolor">Our Statistics</h2>
                                <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt consectetur adipiscing.</p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 text-center pt-5">
                                <div className="col-sm-12 col-md-4 col-lg-4 float-start">
                                    <div className="skill-section">
                                        <div className="circle-wrapper">
                                            <div className="circle-entry clearfix">
                                                <div className="circle center-block color-dark-2"
                                                     data-startdegree="0" data-dimension="180"
                                                     data-text="<strong class='number seccolor'>19.322</strong><div class='title-round'>Clients</div>"
                                                     data-width="5" data-fontsize="17" data-percent="90"
                                                     data-fgcolor="#808080" data-bgcolor="transparent"
                                                     data-bordersize="1"></div>
                                            </div>
                                            <p className="seccolor">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4 float-start">
                                    <div className="skill-section">
                                        <div className="circle-wrapper">
                                            <div className="circle-entry clearfix">
                                                <div className="circle center-block color-dark-2 seccolor"
                                                     data-startdegree="0" data-dimension="180"
                                                     data-text="<strong class='number seccolor'>9.510</strong><div class='title-round'>Equipment</div>"
                                                     data-width="5" data-fontsize="17" data-percent="65"
                                                     data-fgcolor="#808080" data-bgcolor="transparent"
                                                     data-bordersize="1"></div>
                                            </div>
                                            <p className="seccolor">Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4 float-start">
                                    <div className="skill-section">
                                        <div className="circle-wrapper">
                                            <div className="circle-entry clearfix">
                                                <div className="circle center-block color-dark-2 seccolor"
                                                     data-startdegree="0" data-dimension="180"
                                                     data-text="<strong class='number seccolor'>1231</strong><div class='title-round'>Projects</div>"
                                                     data-width="5" data-fontsize="17" data-percent="45"
                                                     data-fgcolor="#808080" data-bgcolor="transparent"
                                                     data-bordersize="1"></div>
                                            </div>
                                            <p className="seccolor">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>
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

SharedLinuxHosting.getInitialProps = async (ctx) => {
    const res = await fetch('https://client.ruralserver.com/api.php?type=product&pid=117,3')
    const json = await res.json()
    return { data: json }
}

export default SharedLinuxHosting