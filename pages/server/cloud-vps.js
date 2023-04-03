import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function CloudVps() {
    return (
        <>
            <Meta />
            <Head>
            <title>Cloud VPS</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />

                <div className="top-header overlay-video">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className="wrapper">
                                    <h1 className="heading">Cloud VPS</h1>
                                    <h3 className="subheading mb-3">Enjoy increased flexibility and get the performance
                                        you need with SSD Storage.</h3>
                                    <a href="#features" className="golink gocheck"> Features </a>
                                    <a href="#custom" className="golink gocheck"> Custom VPS </a>
                                    <a href="#faq" className="golink gocheck"> FAQ </a>
                                </div>
                            </div>
                        </div>
                        <div className="banner-video">
                            <div className="cover-wrapper">
                                <video className="cover-video" autoPlay loop muted>
                                    <source src="/videos/Modem-lights.mp4" type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="pricing special sec-normal pt-80 pb-0 bg-colorstyle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4 wow animated fadeInUp">
                                <div className="wrapper first text-start noshadow">
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/vps.svg" alt=""/>
                                            <div className="title">Business VPS</div>
                                            <div className="fromer seccolor">Best value-for-money Servers</div>
                                            <div className="price mergecolor"><sup>$</sup>9.99 <span
                                                className="period">/month</span></div>
                                            <a href="http://inebur.com/whmcs/cart.php?a=add&pid=4&carttpl=antler"
                                               className="btn btn-default-yellow-fill">Order now</a>
                                    </div>
                                    <ul className="list-info">
                                        <li><i className="icon-cpu"></i> <span className="c-purple">CPU</span><br/>
                                            <span>2 Cores</span></li>
                                        <li><i className="icon-ram"></i> <span className="c-purple">RAM</span><br/>
                                            <span>2GB Memory</span></li>
                                        <li><i className="icon-drives"></i> <span className="c-purple">DISK</span><br/>
                                            <span>60GB Space</span></li>
                                        <li><i className="icon-speed"></i> <span className="c-purple">DATA</span><br/>
                                            <span>1TB Bandwidth</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 wow animated fadeInUp fast">
                                <div className="wrapper text-start noshadow">
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/vps.svg" alt=""/>
                                            <div className="title">Professional VPS</div>
                                            <div className="fromer seccolor">Intensive resources, delivered</div>
                                            <div className="price mergecolor"><sup>$</sup>19.00 <span
                                                className="period">/month</span></div>
                                            <a href="http://inebur.com/whmcs/cart.php?a=add&pid=5&carttpl=antler"
                                               className="btn btn-default-yellow-fill">Order now</a>
                                    </div>
                                    <ul className="list-info bg-purple">
                                        <li><i className="icon-cpu"></i> <span className="c-pink">CPU</span><br/> <span>3 Cores</span>
                                        </li>
                                        <li><i className="icon-ram"></i> <span className="c-pink">RAM</span><br/> <span>4GB Memory</span>
                                        </li>
                                        <li><i className="icon-drives"></i> <span className="c-pink">DISK</span><br/>
                                            <span>120GB Space</span></li>
                                        <li><i className="icon-speed"></i> <span className="c-pink">DATA</span><br/>
                                            <span>2TB Bandwidth</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 wow animated fadeInUp">
                                <div className="wrapper third text-start noshadow">
                                    <div className="plans badge feat bg-pink">recommended</div>
                                    <div className="top-content bg-seccolorstyle topradius">
                                        <img className="svg mb-3" src="/fonts/svg/vps.svg" alt=""/>
                                            <div className="title">Enterprise VPS</div>
                                            <div className="fromer seccolor">High performance and traffic</div>
                                            <div className="price mergecolor"><sup>$</sup>34.99 <span
                                                className="period">/month</span></div>
                                            <a href="http://inebur.com/whmcs/cart.php?a=add&pid=6&carttpl=antler"
                                               className="btn btn-default-yellow-fill">Order now</a>
                                    </div>
                                    <ul className="list-info">
                                        <li><i className="icon-cpu"></i> <span className="c-purple">CPU</span><br/>
                                            <span>4 Cores</span></li>
                                        <li><i className="icon-ram"></i> <span className="c-purple">RAM</span><br/>
                                            <span>8GB Memory</span></li>
                                        <li><i className="icon-drives"></i> <span className="c-purple">DISK</span><br/>
                                            <span>240GB Space</span></li>
                                        <li><i className="icon-speed"></i> <span className="c-purple">DATA</span><br/>
                                            <span>3TB Bandwidth</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <img className="blobleft svg d-none" src="/img/background/blob.svg" alt="Blob Background"/>


                    <section id="features" className="history-section sec-normal exapath bg-colorstyle">
                        <div className="container">
                            <div className="sec-main sec-bg1 bg-colorstyle noshadow nopadding">
                                <div className="row">
                                    <div className="col-md-10 offset-md-1">
                                        <div className="info-content">
                                            <h2 className="mb-4 mergecolor"><b>Fully scalable to grow with you</b></h2>
                                            <p className="seccolor">But I must explain to you how all this mistaken idea
                                                of <a href="#" className="golink">denouncing pleasure</a> and praising
                                                pain was born and I will. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                            <p className="seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                                ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-10 offset-md-1 pt-5 wow animated fadeInUp fast">
                                        <img className="svg" src="/patterns/scalable.svg" alt="scalable"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-10 offset-md-1">
                                        <div className="info-content">
                                            <h2 className="mb-4 mergecolor"><b>Instant provisioning</b></h2>
                                            <p className="seccolor">But I must explain to you how all this mistaken idea
                                                of denouncing pleasure and praising pain was born and I will. Lorem
                                                ipsum dolor sit amet, <a href="#" className="golink">consectetur
                                                    adipiscing elit,</a> sed do eiusmod tempor incididunt.</p>
                                            <p className="seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-10 offset-md-1 pt-5 wow animated fadeInUp fast">
                                        <img className="svg" src="/patterns/provisioning.svg" alt="provisioning"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-10 offset-md-1">
                                        <div className="info-content">
                                            <h2 className="mb-4 mergecolor"><b>Redundant infrastructure</b></h2>
                                            <p className="seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, <a href="#" className="golink">quis nostrud
                                                    exercitation ullamco</a> laboris nisi.</p>
                                            <p className="seccolor">But I must explain to you how all this mistaken idea
                                                of denouncing pleasure and praising pain was born and I will. Lorem
                                                ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-10 offset-md-1 pt-5 wow animated fadeInUp fast">
                                        <img className="svg" src="/patterns/redundant.svg" alt="redundant"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="getready sec-grad-yellow-to-black-right scrollme bg-seccolorstyle">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="column-support-txt animateme" data-when="enter" data-from="1"
                                         data-to="0" data-opacity="1" data-translatex="-60" data-easeinout="0">
                                        <div className="column-support-title mergecolor">Watch Antler Data Center</div>
                                        <div className="column-support-subtitle seccolor">Your services in advanced Data
                                            Centers and Infrastructures.
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


                    <section className="sec-normal sec-bg1 bg-colorstyle">
                        <div className="best-plans pricing">
                            <div className="container">
                                <div className="randomline">
                                    <div className="bigline"></div>
                                    <div className="smallline"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 text-center">
                                        <h2 className="section-heading mergecolor">VPS Server Technical
                                            Specifications</h2>
                                        <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="table-responsive-lg">
                                            <table className="table sample mt-5">
                                                <thead>
                                                <tr>
                                                    <td><span className="title">Features </span></td>
                                                    <td>
                                                        <div className="title">Performance</div>
                                                    </td>
                                                    <td>
                                                        <div className="title">Boosters</div>
                                                    </td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="title-table" data-bs-toggle="popover"
                                                             data-bs-trigger="hover" data-bs-placement="top"
                                                             data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                                            <span className="fas fa-check-circle me-2"></span>
                                                            CentOS 6/7, Ubuntu 16v
                                                        </div>
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> SSD Storage
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> cPanel</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="title-table" data-bs-toggle="popover"
                                                             data-bs-trigger="hover" data-bs-placement="top"
                                                             data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                                            <span className="fas fa-check-circle me-2"></span> Fedora
                                                            23, Debian 8
                                                        </div>
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> Tier IV Data
                                                        Center
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> Plesk Onyx
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="title-table"><span
                                                        className="fas fa-check-circle me-2"></span> Private Network
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> Juniper
                                                        Networks
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> WHMCS</td>
                                                </tr>
                                                <tr>
                                                    <td className="title-table"><span
                                                        className="fas fa-check-circle me-3"></span> Quick VNC access
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> DDos
                                                        mitigation
                                                    </td>
                                                    <td><span className="fas fa-check-circle me-2"></span> SAN storage
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


                    <section id="custom" className="sec-normal overlay item1">
                        <div className="container">
                            <div className="wpc-cloud-range">
                                <div className="row">
                                    <div className="col-sm-12 text-center">
                                        <h2 className="section-heading text-white">Custom Your VPS Server</h2>
                                        <p className="section-subheading text-white">Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="slider-ui" data-handle="1">
                                            <input className="slider-inp invisible" data-count-step="5" type="text"/>
                                            <div className="slider-line"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpc-vps-info position-relative">
                                <div className="row">
                                    <div className="col-md-12 col-lg-9">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-4">
                                                <h3 className="title bg-seccolorstyle noshadow">
                                                    <i className="icon-cpu"></i> <span className="mergecolor">CPU</span>
                                                    <span id="cpu-val" className="info">---</span>
                                                </h3>
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <h3 className="title bg-seccolorstyle noshadow">
                                                    <i className="icon-ram"></i> <span className="mergecolor">RAM</span>
                                                    <span id="ram-val" className="info">---</span>
                                                </h3>
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <h3 className="title bg-seccolorstyle noshadow">
                                                    <i className="icon-drivessd"></i> <span className="mergecolor">Disk Space</span>
                                                    <span id="disk-val" className="info">---</span>
                                                </h3>
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <h3 className="title bg-seccolorstyle noshadow">
                                                    <i className="icon-speed"></i> <span
                                                    className="mergecolor">Bandwidth</span> <span id="bw-val"
                                                                                                  className="info">---</span>
                                                </h3>
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <h3 className="title bg-seccolorstyle noshadow">
                                                    <i className="icon-repair"></i> <span
                                                    className="mergecolor">Setup</span> <span id="setup-val"
                                                                                              className="info">---</span>
                                                </h3>
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <h3 className="title bg-seccolorstyle noshadow">
                                                    <i className="icon-network"></i> <span className="mergecolor">IP Address</span>
                                                    <span id="ip-val" className="info">---</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-3">
                                        <div className="h-plans-info">
                                            <div className="content-price price-container bg-seccolorstyle noshadow">
                                                <div id="run-switch" className="run-switch">
                                                    <div className="switch m-0" onClick="switchVisible();"></div>
                                                </div>
                                                <div className="price-content">
                                                    <div className="plans badge feat bg-pink period">month</div>
                                                    <div className="price">
                                                        <span className="symbol coin mergecolor">$</span>
                                                        <span id="price-val" className="mergecolor"></span>
                                                        <span id="priceon-val" className="mergecolor"></span>
                                                    </div>
                                                    <div className="infos seccolor">
                                                        <div className="badge feat bg-grey">Info</div>
                                                        If you subscribe for an extended period, you will get a discount
                                                    </div>
                                                    <a id="orderlink" href="#" className="btn btn-default-yellow-fill">Buy
                                                        Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="faq" className="sec-normal sec-bg2 bg-colorstyle bottomhalfpadding">
                        <div className="faq">
                            <div className="container">
                                <img className="blobright svg d-none" src="/img/background/blob.svg"
                                     alt="Blob Background" />
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 text-center">
                                            <h2 className="section-heading mergecolor">Frequently Asked Questions
                                                VPS</h2>
                                            <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="accordion faq pt-5">
                                                <div className="panel-wrap">
                                                    <div className="panel-title seccolor active">
                                                        <span>Do the Virtual Private Servers have a backup policy?</span>
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
                                                                        <p>Excepteur sint occaecat cupidatat non
                                                                            proident, sunt in culpa qui officia deserunt
                                                                            mollit anim id est laborum.</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel-wrap">
                                                    <div className="panel-title seccolor">
                                                        <span>What are the benefits of Cloud VPS?</span>
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
                                                                        <p>Excepteur sint occaecat cupidatat non
                                                                            proident, sunt in culpa qui officia deserunt
                                                                            mollit anim id est laborum.</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel-wrap">
                                                    <div className="panel-title seccolor">
                                                        <span>Is Email Hosting included?</span>
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
                                                                        <p>Excepteur sint occaecat cupidatat non
                                                                            proident, sunt in culpa qui officia deserunt
                                                                            mollit anim id est laborum.</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel-wrap">
                                                    <div className="panel-title seccolor">
                                                        <span>What type of support do you offer?</span>
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
                                                                        <p>Excepteur sint occaecat cupidatat non
                                                                            proident, sunt in culpa qui officia deserunt
                                                                            mollit anim id est laborum.</p>
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


                    <section className="help pt-4 notoppadding pb-80 bg-colorstyle">
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
                                                         alt=""/>
                                                </div>
                                                <div className="inform">
                                                    <div className="title mergecolor">Go to Shared Hosting</div>
                                                    <div className="description seccolor">Need similar power but a
                                                        simpler solution?
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
                                                         alt=""/>
                                                </div>
                                                <div className="inform">
                                                    <div className="title mergecolor">Go to Dedicated Server</div>
                                                    <div className="description seccolor">Need more power and
                                                        resources?
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