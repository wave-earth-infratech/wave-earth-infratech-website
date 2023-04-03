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
            <title>Domains</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />

                <div className="top-header item6 overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className="wrapper">
                                    <h1 className="heading">Filter Perfect Domain Name</h1>
                                    <h3 className="subheading mb-4">Choose from hundreds of extensions and put your
                                        website in the world.</h3>
                                    <form className="mb-5 nomargin"
                                          action="https://inebur.com/whmcs/domainchecker.php?carttpl=antler&systpl=antler"
                                          method="post">
                                        <div className="general-input w-50">
                                            <input type="text" name="domain"
                                                   placeholder="Get your next domain name here" className="fill-input"/>
                                                <input type="submit" value="Search"
                                                       className="btn btn-default-yellow-fill initial-transform"/>
                                        </div>
                                    </form>
                                    <a className="btn btn-default-pink-fill cd-filter-trigger wow animated shake delay-2s"><i
                                        className="fa fa-filter"></i> Show Filter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="cd-main-content mb-80 sec-up bg-seccolorstyle">
                    <div className="cd-filter bg-seccolorstyle">
                        <form>
                            <div className="container">
                                <div className="sec-main pb-5 sec-bg1 p-5 bg-seccolorstyle noshadow nopadding">
                                    <div className="plans badge feat bg-pink">filter</div>
                                    <div className="row">
                                        <a href="#0" className="cd-close"><i className="fas fa-long-arrow-alt-left"></i></a>
                                        <div className="col-md-6">
                                            <div className="cd-filter-block" data-filter-group>
                                                <h4 className="mergecolor">Highlight</h4>
                                                <ul className="radio-group radios-filter cd-filter-content list">
                                                    <li>
                                                        <input value="all" type="radio" name="radioButton" id="radio1"
                                                               checked/>
                                                        <label className="radio-label seccolor" htmlFor="radio1">All
                                                            Domains</label>
                                                    </li>
                                                    <li>
                                                        <input value=".sale" type="radio" name="radioButton"
                                                               id="radio2"/>
                                                            <label className="radio-label seccolor"
                                                                   htmlFor="radio2">Sales</label>
                                                    </li>
                                                    <li>
                                                        <input value=".newest" type="radio" name="radioButton"
                                                               id="radio3"/>
                                                            <label className="radio-label seccolor"
                                                                   htmlFor="radio3">Newest</label>
                                                    </li>
                                                    <li>
                                                        <input value=".popular" type="radio" name="radioButton"
                                                               id="radio4"/>
                                                            <label className="radio-label seccolor"
                                                                   htmlFor="radio4">Popular</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="cd-filter-block checkbox-group" data-filter-group>
                                                <h4 className="mergecolor">Types</h4>
                                                <ul className="cd-filter-content cd-filters list">
                                                    <li>
                                                        <input className="filter" value=".gtld" type="checkbox"
                                                               id="checkbox1"/>
                                                            <label className="checkbox-label seccolor"
                                                                   htmlFor="checkbox1">gtld (Generic)</label>
                                                    </li>
                                                    <li>
                                                        <input className="filter" value=".cctld" type="checkbox"
                                                               id="checkbox2"/>
                                                            <label className="checkbox-label seccolor"
                                                                   htmlFor="checkbox2">cctld (Country)</label>
                                                    </li>
                                                    <li>
                                                        <input className="filter" value=".ngtld" type="checkbox"
                                                               id="checkbox3"/>
                                                            <label className="checkbox-label seccolor"
                                                                   htmlFor="checkbox3">ngtld (News)</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="cd-filter-block" data-filter-group>
                                                <div className="cd-filter-content cd-select">
                                                    <select className="select-filter">
                                                        <option value="all">Select Category</option>
                                                        <option value=".business">Business</option>
                                                        <option value=".commerce">Commerce</option>
                                                        <option value=".social">Social</option>
                                                        <option value=".health">Health</option>
                                                        <option value=".educations">Education</option>
                                                        <option value=".technology">Technology</option>
                                                        <option value=".others">Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="cd-filter-block checkbox-group" data-filter-group>
                                                <input type="text" className="input" data-ref="input-search"
                                                       placeholder="Enter a domain extension (.com)"/>
                                            </div>
                                        </div>
                                        <div className="range-disabled">
                                            <input name="minSize" className="range-slider-input tooltip-parent"
                                                   type="range" min="0" max="5" value="0"/>
                                            <input name="maxSize" className="range-slider-input tooltip-parent"
                                                   type="range" min="0" max="5" value="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>


                <div
                    className="mixcontainer sec-normal sec-bg2 motpath bg-noimage nobottompadding bg-colorstyle tophalfpadding"
                    data-ref="container">
                    <div className="container ">
                        <div className="pricing special">
                            <div className="p-0 m-0">
                                <div className="best-plans pricing">
                                    <div className="sec-main sec-bg1">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="table-responsive-lg">
                                                    <table className="table compare">
                                                        <thead>
                                                        <tr>
                                                            <td className="bb-pink pt-0 title ">Extensions (TLD)</td>
                                                            <td className="bb-pink pt-0 title">Register</td>
                                                            <td className="bb-pink pt-0 title">Renew</td>
                                                            <td className="bb-pink pt-0 title">Transfer</td>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr className="mix ext gtld  popular others .com">
                                                            <td>
                                                                <div className="badge bg-grey me-1">popular</div>
                                                                <span className="c-black mergecolor">.com</span></td>
                                                            <td>$16.00</td>
                                                            <td>$19.90</td>
                                                            <td>$19.90</td>
                                                        </tr>
                                                        <tr className="mix ext gtld sale others  .info">
                                                            <td>
                                                                <div className="badge bg-pink me-1">sale</div>
                                                                <span className="c-black mergecolor">.info</span></td>
                                                            <td><span className="ltgh">$11.90</span> <b
                                                                className="c-pink">$7.99</b></td>
                                                            <td>$11.90</td>
                                                            <td>$14.00</td>
                                                        </tr>
                                                        <tr className="mix ext ngtld newest health .hospital">
                                                            <td>
                                                                <div className="badge bg-purple me-1">newest</div>
                                                                <span className="c-black mergecolor">.hospital</span>
                                                            </td>
                                                            <td>$52.24</td>
                                                            <td>$52.24</td>
                                                            <td>$59.00</td>
                                                        </tr>
                                                        <tr className="mix ext gtld popular others .org">
                                                            <td>
                                                                <div className="badge bg-grey me-1">popular</div>
                                                                <span className="c-black mergecolor">.org</span></td>
                                                            <td>$9.00</td>
                                                            <td>$12.90</td>
                                                            <td>$12.90</td>
                                                        </tr>
                                                        <tr className="mix ext gtld others .co.uk">
                                                            <td><span className="c-black mergecolor">.co.uk</span></td>
                                                            <td>$32.00</td>
                                                            <td>$36.90</td>
                                                            <td>$36.90</td>
                                                        </tr>
                                                        <tr className="mix ext ngtld newest health .healthcare">
                                                            <td>
                                                                <div className="badge bg-purple me-1">newest</div>
                                                                <span className="c-black mergecolor">.healthcare</span>
                                                            </td>
                                                            <td>$32.00</td>
                                                            <td>$36.90</td>
                                                            <td>$36.90</td>
                                                        </tr>
                                                        <tr className="mix ext ngtld sale technology .blog">
                                                            <td>
                                                                <div className="badge bg-pink me-1">sale</div>
                                                                <span className="c-black mergecolor">.blog</span></td>
                                                            <td><span className="ltgh">$45.10</span> <b
                                                                className="c-pink">$26.00</b></td>
                                                            <td>$45.10</td>
                                                            <td>$45.10</td>
                                                        </tr>
                                                        <tr className="mix ext ngtld newest commerce .banque">
                                                            <td>
                                                                <div className="badge bg-purple me-1">newest</div>
                                                                <span className="c-black mergecolor">.banque</span></td>
                                                            <td>$32.00</td>
                                                            <td>$36.90</td>
                                                            <td>$36.90</td>
                                                        </tr>
                                                        <tr className="mix ext cctld popular .eu">
                                                            <td>
                                                                <div className="badge bg-grey me-1">popular</div>
                                                                <span className="c-black mergecolor">.eu</span></td>
                                                            <td>$5.80</td>
                                                            <td>$5.80</td>
                                                            <td>$7.00</td>
                                                        </tr>
                                                        <tr className="mix ext cctld popular .pt">
                                                            <td>
                                                                <div className="badge bg-grey me-1">popular</div>
                                                                <span className="c-black mergecolor">.pt</span></td>
                                                            <td>$13.00</td>
                                                            <td>$13.00</td>
                                                            <td>$19.90</td>
                                                        </tr>
                                                        <tr className="mix ext ngtld newest business .company">
                                                            <td><span className="c-black mergecolor">.company</span>
                                                            </td>
                                                            <td>$13.00</td>
                                                            <td>$13.00</td>
                                                            <td>$19.90</td>
                                                        </tr>
                                                        <tr className="mix ext ngtld newest social .church">
                                                            <td><span className="c-black mergecolor">.church</span></td>
                                                            <td>$42.00</td>
                                                            <td>$42.00</td>
                                                            <td>$42.00</td>
                                                        </tr>
                                                        <tr className="mix ext ngtld sale social .democrat">
                                                            <td>
                                                                <div className="badge bg-pink me-1">sale</div>
                                                                <span className="c-black mergecolor">.democrat</span>
                                                            </td>
                                                            <td><span className="ltgh">$35.10</span> <b
                                                                className="c-pink">$19.00</b></td>
                                                            <td>$35.10</td>
                                                            <td>$42.90</td>
                                                        </tr>
                                                        <tr className="mix ext ngtld popular educations .academy">
                                                            <td><span className="c-black mergecolor">.academy</span>
                                                            </td>
                                                            <td>$112.10</td>
                                                            <td>$112.10</td>
                                                            <td>$112.10</td>
                                                        </tr>
                                                        <tr className="mix ext ngtld sale health .dentist">
                                                            <td>
                                                                <div className="badge bg-pink me-1">sale</div>
                                                                <span className="c-black mergecolor">.dentist</span>
                                                            </td>
                                                            <td><span className="ltgh">$50.10</span> <b
                                                                className="c-pink">$25.05</b></td>
                                                            <td>$50.10</td>
                                                            <td>$72.90</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cd-fail-message">" No items could be found matching the criteria
                                            "
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="blobleft svg d-none" src="/img/background/blob.svg" alt="Blob Background" />


                    <section id="scroll" className="history-section feat01 sec-normal bg-colorstyle">
                        <div className="container">
                            <div className="randomline">
                                <div className="bigline"></div>
                                <div className="smallline"></div>
                            </div>
                            <div className="sec-main sec-bg1 bg-colorstyle noshadow nopadding">
                                <div className="row">
                                    <div className="col-md-12 col-lg-5 wow animated fadeInUp fast first">
                                        <img className="svg" src="/patterns/domainmanage.svg"
                                             alt="domain management"/>
                                    </div>
                                    <div className="col-md-12 col-lg-6 offset-lg-1">
                                        <div className="info-content">
                                            <h1 className="fw-bold mb-3 mergecolor">Simple Domain Management</h1>
                                            <p className="seccolor">But I must explain to you how all this mistaken idea
                                                of <a href="#" className="golink">denouncing pleasure</a> and praising
                                                pain was born and I will.</p>
                                        </div>
                                        <a href="" className="btn btn-default-yellow-fill mt-3">Learn more</a>
                                    </div>
                                </div>
                                <hr/>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="info-content">
                                                <h1 className="fw-bold mb-3 mergecolor">Automatic Domain Renewal</h1>
                                                <p className="seccolor">But I must explain to you how all this mistaken
                                                    idea of <a href="#" className="golink">denouncing pleasure</a> and
                                                    praising pain was born and I will.</p>
                                            </div>
                                            <a href="" className="btn btn-default-yellow-fill mt-3">Auto-Renewal</a>
                                        </div>
                                        <div
                                            className="col-md-12 col-lg-5 offset-lg-1 backups anima wow animated fadeInUp fast second">
                                            <img className="svg" src="/patterns/domainrenewal.svg"
                                                 alt="domain renewal"/>
                                        </div>
                                    </div>
                                    <hr/>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-5 wow animated fadeInUp fast third">
                                                <img className="svg" src="/patterns/support.svg"
                                                     alt="support 24/7/365"/>
                                            </div>
                                            <div className="col-md-12 col-lg-6 offset-lg-1">
                                                <div className="info-content">
                                                    <h1 className="fw-bold mb-3 mergecolor">Don't worry! We have support
                                                        premium 24/7/365</h1>
                                                    <p className="seccolor">But I must explain to you how all this
                                                        mistaken idea of <a href="#" className="golink">denouncing
                                                            pleasure</a> and praising pain was born and I will.</p>
                                                </div>
                                                <a href="" className="btn btn-default-yellow-fill mt-3">Get support</a>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </section>


                    <section className="sec-normal history-section custom sec-bg3 bg-seccolorstyle">
                        <div className="faq">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 text-center">
                                        <h2 className="section-heading text-white mergecolor">Advanced domain control
                                            made easy</h2>
                                        <p className="section-subheading text-white mergecolor">Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <div className="section-offer services w-100">
                                            <div className="tabs offers-tabs">
                                                <div className="tabs-header mb-5">
                                                    <ul>
                                                        <li className="col-sm-12 col-md-3 col-lg-3 text-white active">
                                                            <i className="icon-features"></i>
                                                            <div className="seccolor">Easy Management</div>
                                                        </li>
                                                        <li className="col-sm-12 col-md-3 col-lg-3 text-white">
                                                            <i className="icon-domainserver"></i>
                                                            <div className="seccolor">Domain API</div>
                                                        </li>
                                                        <li className="col-sm-12 col-md-3 col-lg-3 text-white">
                                                            <i className="icon-lock"></i>
                                                            <div className="seccolor">Domain Lock</div>
                                                        </li>
                                                        <li className="col-sm-12 col-md-3 col-lg-2 text-white">
                                                            <i className="icon-helpdesk"></i>
                                                            <div className="seccolor">Support Premium</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="tabs-content text-start scrollme">
                                                    <div className="tabs-item active">
                                                        <div className="row">
                                                            <div className="col-md-12 col-lg-5">
                                                                <img className="svg"
                                                                     src="/patterns/controlpanel.svg"
                                                                     alt="monitoring 24/7/365"/>
                                                            </div>
                                                            <div className="col-md-12 col-lg-6 offset-lg-1">
                                                                <div className="info-content text-white">
                                                                    <h4 className="mergecolor">Change DNS records
                                                                        through an easy-to-use Control Panel</h4>
                                                                    <p className="seccolor">But I must explain to you
                                                                        how all this mistaken idea of <a href="#"
                                                                                                         className="golink">denouncing
                                                                            pleasure</a> and praising pain was born and
                                                                        I will. </p>
                                                                    <p className="seccolor">Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit, sed do eiusmod
                                                                        tempor incididunt.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tabs-item">
                                                        <div className="row">
                                                            <div className="col-md-12 col-lg-5">
                                                                <img className="svg"
                                                                     src="/patterns/performance.svg"
                                                                     alt="monitoring 24/7/365"/>
                                                            </div>
                                                            <div className="col-md-12 col-lg-6 offset-lg-1">
                                                                <div className="info-content text-white">
                                                                    <h4 className="mergecolor">Register multiple domains
                                                                        can be done in a matter of seconds</h4>
                                                                    <p className="seccolor">But I must explain to you
                                                                        how all this mistaken idea of <a href="#"
                                                                                                         className="golink">denouncing
                                                                            pleasure</a> and praising pain was born and
                                                                        I will. </p>
                                                                    <p className="seccolor">Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit, sed do eiusmod
                                                                        tempor incididunt.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tabs-item">
                                                        <div className="row">
                                                            <div className="col-md-12 col-lg-5">
                                                                <img className="svg" src="/patterns/ssl.svg"
                                                                     alt="monitoring 24/7/365"/>
                                                            </div>
                                                            <div className="col-md-12 col-lg-6 offset-lg-1">
                                                                <div className="info-content text-white">
                                                                    <h4 className="mergecolor">Lock and Unlock it down
                                                                        to prevent unauthorized transfers</h4>
                                                                    <p className="seccolor">But I must explain to you
                                                                        how all this mistaken idea of <a href="#"
                                                                                                         className="golink">denouncing
                                                                            pleasure</a> and praising pain was born and
                                                                        I will. </p>
                                                                    <p className="seccolor">Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit, sed do eiusmod
                                                                        tempor incididunt.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tabs-item">
                                                        <div className="row">
                                                            <div className="col-md-12 col-lg-5">
                                                                <img className="svg" src="/patterns/support.svg"
                                                                     alt="monitoring 24/7/365"/>
                                                            </div>
                                                            <div className="col-md-12 col-lg-6 offset-lg-1">
                                                                <div className="info-content text-white">
                                                                    <h4 className="mergecolor">Don't worry! We have
                                                                        support premium 24/7/365</h4>
                                                                    <p className="seccolor">But I must explain to you
                                                                        how all this mistaken idea of <a href="#"
                                                                                                         className="golink">denouncing
                                                                            pleasure</a> and praising pain was born and
                                                                        I will. </p>
                                                                    <p className="seccolor">Lorem ipsum dolor sit amet,
                                                                        consectetur adipiscing elit, sed do eiusmod
                                                                        tempor incididunt.</p>
                                                                </div>
                                                            </div>
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
                    <hr className="fullline d-none" />


                        <section className="sec-normal sec-bg2 bg-seccolorstyle bottomhalfpadding">
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
                                                        <span>What is a domain name?</span>
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
                                                        <span>What can I do with a domain name?</span>
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
                                                        <span>How many domains can I host at Antler?</span>
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
                                                        <span>What domain should I buy? </span>
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
                        <img className="blobright svg d-none" src="/img/background/blob.svg"
                             alt="Blob Background"/>


                            <section className="help pt-4 pb-80 bg-seccolorstyle notoppadding">
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
                                                                 alt=""/>
                                                        </div>
                                                        <div className="inform">
                                                            <div className="title mergecolor">Go to Cloud Reseller</div>
                                                            <div className="description seccolor">Do you need to host
                                                                multiple Websites?
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <div className="help-container bg-colorstyle noshadow">
                                                    <div className="plans badge feat bg-grey"><i
                                                        className="fas fa-long-arrow-alt-right"></i></div>
                                                    <a href="vps" className="help-item">
                                                        <div className="img">
                                                            <img className="svg ico" src="/fonts/svg/vps.svg" alt=""/>
                                                        </div>
                                                        <div className="inform">
                                                            <div className="title mergecolor">Go to VPS Server</div>
                                                            <div className="description seccolor">Needs scalable
                                                                resources in Hosting Environment?
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