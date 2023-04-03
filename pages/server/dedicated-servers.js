import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function DedicatedServers() {
    return (
        <>
            <Meta />
            <Head>
            <title>Dedicated Servers</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />

                <div className="top-header item7 overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className="wrapper">
                                    <h1 className="heading">Dedicated Servers</h1>
                                    <h3 className="subheading mb-3">High performance dedicated servers with cloud
                                        flexibility and scalability.</h3>
                                    <a href="#features" className="golink gocheck"> Features </a>
                                    <a href="#addons" className="golink gocheck"> Add-Ons </a>
                                    <a href="#highlights" className="golink gocheck"> Highlights</a><br/>
                                    <a className="btn btn-default-pink-fill cd-filter-trigger wow animated shake delay-2s"><i
                                        className="fa fa-filter"></i> Show Filter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="cd-main-content sec-up bg-seccolorstyle">
                    <div className="cd-filter bg-seccolorstyle">
                        <form>
                            <div className="container">
                                <div className="sec-main pb-5 sec-bg1 p-5 bg-seccolorstyle noshadow nopadding">
                                    <div className="row">
                                        <a href="#0" className="cd-close"><i className="fas fa-long-arrow-alt-left"></i></a>
                                        <div className="col-md-6">
                                            <div className="cd-filter-block" data-filter-group>
                                                <h4 className="mergecolor">Choose Server</h4>
                                                <ul className="radio-group radios-filter cd-filter-content list">
                                                    <li>
                                                        <input value="all" type="radio" name="radioButton" id="radio1"
                                                               checked />
                                                        <label className="radio-label seccolor" htmlFor="radio1">All
                                                            Servers</label>
                                                    </li>
                                                    <li>
                                                        <input value=".linux" type="radio" name="radioButton"
                                                               id="radio2" />
                                                            <label className="radio-label seccolor"
                                                                   htmlFor="radio2">Linux</label>
                                                    </li>
                                                    <li>
                                                        <input value=".windows" type="radio" name="radioButton"
                                                               id="radio3" />
                                                            <label className="radio-label seccolor"
                                                                   htmlFor="radio3">Windows</label>
                                                    </li>
                                                    <li>
                                                        <input value=".managed" type="radio" name="radioButton"
                                                               id="radio4" />
                                                            <label className="radio-label seccolor"
                                                                   htmlFor="radio4">Managed</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="cd-filter-block" data-filter-group>
                                                <h4 className="mergecolor">Location</h4>
                                                <div className="cd-filter-content cd-select">
                                                    <select className="select-filter seccolor">
                                                        <option value="all">Select Datacenter</option>
                                                        <option value=".data1">New York</option>
                                                        <option value=".data2">Montreal</option>
                                                        <option value=".data3">Portugal</option>
                                                        <option value=".data4">London</option>
                                                        <option value=".data5">Moscow</option>
                                                        <option value=".data6">Hong Kong</option>
                                                        <option value=".data7">Singapure</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="cd-filter-block checkbox-group" data-filter-group>
                                                <h4 className="mergecolor">CPU Cores</h4>
                                                <ul className="cd-filter-content cd-filters list">
                                                    <li>
                                                        <input className="filter" value=".cores2" type="checkbox"
                                                               id="checkbox1" />
                                                            <label className="checkbox-label seccolor"
                                                                   htmlFor="checkbox1">2</label>
                                                    </li>
                                                    <li>
                                                        <input className="filter" value=".cores4" type="checkbox"
                                                               id="checkbox2" />
                                                            <label className="checkbox-label seccolor"
                                                                   htmlFor="checkbox2">4</label>
                                                    </li>
                                                    <li>
                                                        <input className="filter" value=".cores6" type="checkbox"
                                                               id="checkbox3" />
                                                            <label className="checkbox-label seccolor"
                                                                   htmlFor="checkbox3">6</label>
                                                    </li>
                                                    <li>
                                                        <input className="filter" value=".cores8" type="checkbox"
                                                               id="checkbox4" />
                                                            <label className="checkbox-label seccolor"
                                                                   htmlFor="checkbox4">8</label>
                                                    </li>
                                                    <li>
                                                        <input className="filter" value=".cores12" type="checkbox"
                                                               id="checkbox5" />
                                                            <label className="checkbox-label seccolor"
                                                                   htmlFor="checkbox5">12</label>
                                                    </li>
                                                    <li>
                                                        <input className="filter" value=".cores16" type="checkbox"
                                                               id="checkbox6" />
                                                            <label className="checkbox-label seccolor"
                                                                   htmlFor="checkbox6">16</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="cd-filter-block" data-filter-group>
                                                <h4 className="mergecolor">RAM</h4>
                                                <div className="cd-filter-content cd-filters list seccolor">
                                                    <datalist>
                                                        <option value="0"> 16</option>
                                                        <option value="1"> 32</option>
                                                        <option value="2"> 64</option>
                                                        <option value="3"> 96</option>
                                                        <option value="4"> 128</option>
                                                        <option value="5"> 256</option>
                                                    </datalist>
                                                    <div className="range-slider">
                                                        <input name="minSize"
                                                               className="range-slider-input tooltip-parent seccolor"
                                                               type="range" min="0" max="5" value="0"
                                                               data-list="sizeLegend"/>
                                                    </div>
                                                    <div className="range-slider">
                                                        <input name="maxSize"
                                                               className="range-slider-input tooltip-parent seccolor"
                                                               type="range" min="0" max="5" value="5"
                                                               data-list="sizeLegend"/>
                                                    </div>
                                                </div>
                                                <div className="search-disabled">
                                                    <input type="text" className="input" data-ref="input-search"
                                                           placeholder="Enter a domain extension (.com)"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>


                <div className="mixcontainer pb-5 pt-4 sec-bg2 motpath bg-colorstyle" data-ref="container">
                    <div className="container ">
                        <div className="pricing special">
                            <div className="p-0 m-0">
                                <div className="mix linux data1 cores2" data-size="0">
                                    <div className="wrapper text-start noshadow">
                                        <div className="plans badge feat bg-grey">linux</div>
                                        <div className="top-content bg-seccolorstyle topradius">
                                            <img className="svg mb-3" src="/fonts/svg/linuxserver.svg"
                                                 alt="linux" />
                                                <div className="title">Intel Xeon E3-1231 v5 / 4x 3.20Ghz</div>
                                                <div className="fromer seccolor">Excepteur sint occaecat cupidatat</div>
                                                <div className="price mergecolor"><sup>$</sup>82.00 <span
                                                    className="period">/month</span></div>
                                                <a href="" className="btn btn-default-yellow-fill">Configure</a>
                                        </div>
                                        <ul className="list-info bg-pink">
                                            <li><i className="icon-cpu"></i> <span className="c-purple">CPU</span><br/>
                                                <span>4x 3.20Ghz 2 Cores</span></li>
                                            <li><i className="icon-ram"></i> <span className="c-purple">RAM</span><br/>
                                                <span>16GB (up to 32GB)</span></li>
                                            <li><i className="icon-drivessd"></i> <span
                                                className="c-purple">DRIVES</span><br/> <span>2 x 1TB SATA 3.5</span>
                                            </li>
                                            <li><i className="icon-git"></i> <span
                                                className="c-purple">UPLINK</span><br/> <span>1Gbps - 20TB</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mix windows data2 cores4" data-size="1">
                                    <div className="wrapper text-start noshadow">
                                        <div className="plans badge feat bg-grey">windows</div>
                                        <div className="top-content bg-seccolorstyle topradius">
                                            <img className="svg mb-3" src="/fonts/svg/windowserver.svg"
                                                 alt="windows" />
                                                <div className="title">Intel Xeon E3-1230 v6 / 6x 3.20Ghz</div>
                                                <div className="fromer seccolor">Excepteur sint occaecat cupidatat</div>
                                                <div className="price mergecolor"><sup>$</sup>133.00 <span
                                                    className="period">/month</span></div>
                                                <a href="" className="btn btn-default-yellow-fill">Configure</a>
                                        </div>
                                        <ul className="list-info bg-purple">
                                            <li><i className="icon-cpu"></i> <span className="c-pink">CPU</span><br/>
                                                <span>6x 3.20Ghz 4 Cores</span></li>
                                            <li><i className="icon-ram"></i> <span className="c-pink">RAM</span><br/>
                                                <span>32GB (up to 64GB)</span></li>
                                            <li><i className="icon-drivessd"></i> <span className="c-pink">DRIVES</span><br/>
                                                <span>2 x 1TB SATA 3.0</span></li>
                                            <li><i className="icon-git"></i> <span className="c-pink">UPLINK</span><br/>
                                                <span>1Gbps - 20TB</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mix managed data3 cores6" data-size="2">
                                    <div className="wrapper text-start noshadow">
                                        <div className="plans badge feat bg-pink">special</div>
                                        <div className="top-content bg-seccolorstyle topradius">
                                            <img className="svg mb-3" src="/fonts/svg/managedserver.svg"
                                                 alt="managed" />
                                                <div className="title">Intel Xeon E3-1231 v6 / 8x 3.30Ghz</div>
                                                <div className="fromer seccolor">Excepteur sint occaecat cupidatat</div>
                                                <div className="price mergecolor"><sup>$</sup>184.00 <span
                                                    className="period">/month</span></div>
                                                <a href="" className="btn btn-default-yellow-fill">Configure</a>
                                        </div>
                                        <ul className="list-info bg-pink">
                                            <li><i className="icon-cpu"></i> <span className="c-purple">CPU</span><br/>
                                                <span>8x 3.30Ghz 6 Cores</span></li>
                                            <li><i className="icon-ram"></i> <span className="c-purple">RAM</span><br/>
                                                <span>64GB (up to 96GB)</span></li>
                                            <li><i className="icon-drivessd"></i> <span
                                                className="c-purple">DRIVES</span><br/> <span>2 x 1TB SATA 3.5</span>
                                            </li>
                                            <li><i className="icon-git"></i> <span
                                                className="c-purple">UPLINK</span><br/> <span>1Gbps - 30TB</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mix linux data4 cores8" data-size="3">
                                    <div className="wrapper text-start noshadow">
                                        <div className="plans badge feat bg-grey">linux</div>
                                        <div className="top-content bg-seccolorstyle topradius">
                                            <img className="svg mb-3" src="/fonts/svg/linuxserver.svg"
                                                 alt="linux" />
                                                <div className="title">Intel Xeon E3-1231 v5 / 8x 3.40Ghz</div>
                                                <div className="fromer seccolor">Excepteur sint occaecat cupidatat</div>
                                                <div className="price mergecolor"><sup>$</sup>159.00 <span
                                                    className="period">/month</span></div>
                                                <a href="" className="btn btn-default-yellow-fill">Configure</a>
                                        </div>
                                        <ul className="list-info bg-purple">
                                            <li><i className="icon-cpu"></i> <span className="c-pink">CPU</span><br/>
                                                <span>8x 3.40Ghz 8 Cores</span></li>
                                            <li><i className="icon-ram"></i> <span className="c-pink">RAM</span><br/>
                                                <span>96GB (up to 128GB)</span></li>
                                            <li><i className="icon-drivessd"></i> <span className="c-pink">DRIVES</span><br/>
                                                <span>4 x 1TB SATA 3.0</span></li>
                                            <li><i className="icon-git"></i> <span className="c-pink">UPLINK</span><br/>
                                                <span>1Gbps - 20TB</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mix windows data5 cores12" data-size="4">
                                    <div className="wrapper text-start noshadow">
                                        <div className="plans badge feat bg-grey">windows</div>
                                        <div className="top-content bg-seccolorstyle topradius">
                                            <img className="svg mb-3" src="/fonts/svg/windowserver.svg"
                                                 height="65" alt="windows" />
                                                <div className="title">Intel Xeon E3-1230 v6 / 8x 3.20Ghz</div>
                                                <div className="fromer seccolor">Excepteur sint occaecat cupidatat</div>
                                                <div className="price mergecolor"><sup>$</sup>199.00 <span
                                                    className="period">/month</span></div>
                                                <a href="" className="btn btn-default-yellow-fill">Configure</a>
                                        </div>
                                        <ul className="list-info bg-pink">
                                            <li><i className="icon-cpu"></i> <span className="c-purple">CPU</span><br/>
                                                <span>8x 3.20Ghz 12 Cores</span></li>
                                            <li><i className="icon-ram"></i> <span className="c-purple">RAM</span><br/>
                                                <span>128GB (up to 265GB)</span></li>
                                            <li><i className="icon-drivessd"></i> <span
                                                className="c-purple">DRIVES</span><br/> <span>4 x 2TB SATA 3.0</span>
                                            </li>
                                            <li><i className="icon-git"></i> <span
                                                className="c-purple">UPLINK</span><br/> <span>1Gbps - 30TB</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mix managed data6 cores16" data-size="5">
                                    <div className="wrapper text-start noshadow">
                                        <div className="plans badge feat bg-grey">managed</div>
                                        <div className="top-content bg-seccolorstyle topradius">
                                            <img className="svg mb-3" src="/fonts/svg/managedserver.svg"
                                                 alt="managed" />
                                                <div className="title">Intel Xeon E3-1231 v6 / 8x 3.30Ghz</div>
                                                <div className="fromer seccolor">Excepteur sint occaecat cupidatat</div>
                                                <div className="price mergecolor"><sup>$</sup>184.00 <span
                                                    className="period">/month</span></div>
                                                <a href="" className="btn btn-default-yellow-fill">Configure</a>
                                        </div>
                                        <ul className="list-info bg-purple">
                                            <li><i className="icon-cpu"></i> <span className="c-pink">CPU</span><br/>
                                                <span>8x 3.30Ghz 16 Cores</span></li>
                                            <li><i className="icon-ram"></i> <span className="c-pink">RAM</span><br/>
                                                <span>256GB (up to 512GB)</span></li>
                                            <li><i className="icon-drivessd"></i> <span className="c-pink">DRIVES</span><br/>
                                                <span>2 x 1TB SATA 3.5</span></li>
                                            <li><i className="icon-git"></i> <span className="c-pink">UPLINK</span><br/>
                                                <span>1Gbps - 30TB</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="gap"></div>
                                <div className="gap"></div>
                                <div className="gap"></div>
                            </div>
                        </div>
                        <div className="cd-fail-message bg-seccolorstyle seccolor noshadow">" No items could be found
                            matching the criteria "
                        </div>
                    </div>
                </div>


                <section id="features" className="history-section sec-normal bg-colorstyle">
                    <div className="container">
                        <div className="randomline">
                            <div className="bigline"></div>
                            <div className="smallline"></div>
                        </div>
                        <div className="sec-main sec-bg1 bg-colorstyle noshadow">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="info-content">
                                        <h2 className="mb-4 mergecolor"><b>SO Installation</b></h2>
                                        <p className="seccolor">But I must explain to you how all this mistaken idea
                                            of <a href="#" className="golink">denouncing pleasure</a> and praising pain
                                            was born and I will. Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt.</p>
                                        <p className="seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div className="col-md-10 offset-md-1 pt-5 wow animated fadeInUp fast">
                                    <img className="svg" src="/patterns/os.svg" alt="dns redundant" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="info-content">
                                        <h2 className="mb-4 mergecolor"><b>Maximum Performance</b></h2>
                                        <p className="seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, <a href="#" className="golink">quis nostrud exercitation
                                                ullamco</a> laboris nisi.</p>
                                        <p className="seccolor">But I must explain to you how all this mistaken idea of
                                            denouncing pleasure and praising pain was born and I will. Lorem ipsum dolor
                                            sit amet.</p>
                                    </div>
                                </div>
                                <div className="col-md-10 offset-md-1 pt-5 wow animated fadeInUp fast">
                                    <img className="svg" src="/patterns/ssd.svg" alt="dns redundant" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="addons" className="sec-normal history-section custom sec-bg3 bg-seccolorstyle">
                    <div className="faq">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 text-center">
                                    <h2 className="section-heading text-white mergecolor">Customise with premium
                                        add-ons</h2>
                                    <p className="section-subheading text-muted mergecolor">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="section-offer services w-100">
                                        <div className="tabs offers-tabs">
                                            <div className="tabs-header mb-5">
                                                <ul>
                                                    <li className="col-sm-12 col-md-3 col-lg-3 text-white active">
                                                        <i className="icon-preferences"></i>
                                                        <div className="mergecolor">Control Panel</div>
                                                    </li>
                                                    <li className="col-sm-12 col-md-3  col-lg-3 text-white">
                                                        <i className="icon-speed"></i>
                                                        <div className="text-white mergecolor">Bandwidth</div>
                                                    </li>
                                                    <li className="col-sm-12 col-md-3  col-lg-3 text-white">
                                                        <i className="icon-privacy"></i>
                                                        <div className="mergecolor">SSL Certificates</div>
                                                    </li>
                                                    <li className="col-sm-12 col-md-3  col-lg-2 text-white">
                                                        <i className="icon-protection"></i>
                                                        <div className="mergecolor">Protection</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tabs-content text-start scrollme">
                                                <div className="tabs-item active">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-5">
                                                            <img className="svg" src="/patterns/controlpanel.svg"
                                                                 alt="monitoring 24/7/365" />
                                                        </div>
                                                        <div className="col-md-12 col-lg-6 offset-lg-1">
                                                            <div className="info-content text-white">
                                                                <h4 className="mergecolor">Easy management with cPanel
                                                                    or Plesk</h4>
                                                                <p className="seccolor">But I must explain to you how
                                                                    all this mistaken idea of <a href="#"
                                                                                                 className="golink">denouncing
                                                                        pleasure</a> and praising pain was born and I
                                                                    will. </p>
                                                                <p className="seccolor">Lorem ipsum dolor sit amet,
                                                                    consectetur adipiscing elit, sed do eiusmod tempor
                                                                    incididunt.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tabs-item">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-5">
                                                            <img className="svg" src="/patterns/performance.svg"
                                                                 alt="performance" />
                                                        </div>
                                                        <div className="col-md-12 col-lg-6 offset-lg-1">
                                                            <div className="info-content text-white">
                                                                <h4 className="mergecolor">10x more performance with
                                                                    Bandwidth</h4>
                                                                <p className="seccolor">But I must explain to you how
                                                                    all this mistaken idea of <a href="#"
                                                                                                 className="golink">denouncing
                                                                        pleasure</a> and praising pain was born and I
                                                                    will. </p>
                                                                <p className="seccolor">Lorem ipsum dolor sit amet,
                                                                    consectetur adipiscing elit, sed do eiusmod tempor
                                                                    incididunt.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tabs-item">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-5">
                                                            <img className="svg" src="/patterns/ssl.svg"
                                                                 alt="SSL Certificates" />
                                                        </div>
                                                        <div className="col-md-12 col-lg-6 offset-lg-1">
                                                            <div className="info-content text-white">
                                                                <h4 className="mergecolor">Secure browsing
                                                                    experience</h4>
                                                                <p className="seccolor">But I must explain to you how
                                                                    all this mistaken idea of <a href="#"
                                                                                                 className="golink">denouncing
                                                                        pleasure</a> and praising pain was born and I
                                                                    will. </p>
                                                                <p className="seccolor">Lorem ipsum dolor sit amet,
                                                                    consectetur adipiscing elit, sed do eiusmod tempor
                                                                    incididunt.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tabs-item">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-5">
                                                            <img className="svg"
                                                                 src="/patterns/protectvisitors.svg"
                                                                 alt="Protection" />
                                                        </div>
                                                        <div className="col-md-12 col-lg-6 offset-lg-1">
                                                            <div className="info-content text-white">
                                                                <h4 className="mergecolor">Maximum Physical
                                                                    Security</h4>
                                                                <p className="seccolor">But I must explain to you how
                                                                    all this mistaken idea of <a href="#"
                                                                                                 className="golink">denouncing
                                                                        pleasure</a> and praising pain was born and I
                                                                    will. </p>
                                                                <p className="seccolor">Lorem ipsum dolor sit amet,
                                                                    consectetur adipiscing elit, sed do eiusmod tempor
                                                                    incididunt.</p>
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


                <section className="sec-normal sec-bg1 bg-colorstyle">
                    <div className="best-plans pricing">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2 className="section-heading mergecolor">Dedicated Technical Specifications</h2>
                                    <p className="section-subheading mergecolor">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt.</p>
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
                                                        <span className="fas fa-check-circle me-2 f-20"></span> Instant
                                                        Provisioning
                                                    </div>
                                                </td>
                                                <td><span className="fas fa-check-circle me-2 f-20"></span> Intel Xeon
                                                </td>
                                                <td><span className="fas fa-check-circle me-2 f-20"></span> Free cPanel
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="title-table" data-bs-toggle="popover"
                                                         data-bs-trigger="hover" data-bs-placement="top"
                                                         data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                                        <span className="fas fa-check-circle me-2 f-20"></span> CentOS /
                                                        Ubuntu
                                                    </div>
                                                </td>
                                                <td><span className="fas fa-check-circle me-2 f-20"></span> SuperMicro
                                                </td>
                                                <td><span className="fas fa-check-circle me-2 f-20"></span> WHMCS</td>
                                            </tr>
                                            <tr>
                                                <td className="title-table"><span
                                                    className="fas fa-check-circle me-2"></span> CloudLinux
                                                </td>
                                                <td><span className="fas fa-check-circle me-2 f-20"></span> Juniper
                                                    Networks
                                                </td>
                                                <td><span className="fas fa-check-circle me-2 f-20"></span> IPs</td>
                                            </tr>
                                            <tr>
                                                <td className="title-table"><span
                                                    className="fas fa-check-circle me-3"></span> Server Rebuild
                                                </td>
                                                <td><span className="fas fa-check-circle me-2 f-20"></span> DDos
                                                    mitigation
                                                </td>
                                                <td><span className="fas fa-check-circle me-2 f-20"></span> SAN storage
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


                <section id="highlights"
                         className="sec-normal best-plans pricing cpupath sec-bg4 scrollme bg-colorstyle">
                    <div className="container">
                        <div className="sec-main sec-bg1 animateme">
                            <div className="plans badge feat bg-pink hideelement">highlights</div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="table-responsive-lg">
                                        <table className="table compare">
                                            <thead>
                                            <tr>
                                                <td className="bb-green title">Dedicated Processors</td>
                                                <td className="bb-green title">Memory</td>
                                                <td className="bb-green title">Storage</td>
                                                <td className="bb-green title">Monthly</td>
                                                <td className="bb-green title">Availability</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-pink me-1">HOT</div>
                                                    E3-1230 v3 3.3GHz Haswell | 4 Cores
                                                </td>
                                                <td>32GB</td>
                                                <td>320GB SSD</td>
                                                <td><span className="ltgh">$99.00</span> <b
                                                    className="c-black mergecolor">$59.00</b></td>
                                                <td><a href="" className="btn btn-default-yellow-fill">Config</a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-pink me-1">SALE</div>
                                                    E3-1230 v5 3.4GHz Skylake | 4 Cores
                                                </td>
                                                <td>32GB</td>
                                                <td>520GB SSD</td>
                                                <td><span className="ltgh">$177.00</span> <b
                                                    className="c-black mergecolor">$120.00</b></td>
                                                <td><a href="" className="btn btn-default-yellow-fill">Config</a></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="badge bg-grey me-1">OUT</div>
                                                    E3-1230 v5 3.4GHz Skylake | 8 Cores
                                                </td>
                                                <td>64GB</td>
                                                <td>960GB SSD</td>
                                                <td><b className="c-black mergecolor">$239.00</b></td>
                                                <td><a href="" className="btn btn-default-fill disabled">Sold out</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-0">2x E5-2620 v4 2.1GHz Broadwell | 16 Cores</td>
                                                <td className="border-0">128GB</td>
                                                <td className="border-0">4x 960GB SSD</td>
                                                <td className="border-0"><b className="c-black mergecolor">$410.00</b>
                                                </td>
                                                <td className="border-0"><a href=""
                                                                            className="btn btn-default-yellow-fill">Config</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="help pt-4 pb-80 bg-colorstyle">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <div className="plans badge feat left bg-grey"><i
                                            className="fas fa-long-arrow-alt-left"></i></div>
                                        <a href="hosting" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/cloudfiber.svg" alt="" />
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Go to Cloud Reseller</div>
                                                <div className="description seccolor">Do you need to host multiple
                                                    Websites?
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <div className="plans badge feat bg-grey"><i
                                            className="fas fa-long-arrow-alt-right"></i></div>
                                        <a href="vps" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/vps.svg" alt="" />
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Go to VPS Server</div>
                                                <div className="description seccolor">Needs scalable resources in
                                                    Hosting Environment?
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