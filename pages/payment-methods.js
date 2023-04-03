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
            <title>Payment methods</title>
            <meta name="description" content="" />
            </Head>

            <div className="box-container limit-width">

                <Header />
                <div className="top-header exapath-w scrollme">
                    <div className="total-grad-inverse"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wrapper animateme" data-when="span" data-from="0" data-to="0.75"
                                     data-opacity="1" data-translatey="-50">
                                    <div className="heading">Payment Methods</div>
                                    <div className="subheading">As your business expands into local regions where
                                        alternative payments are popular, you don’t want to risk losing sales by saying
                                        no. Antler gives you the ability to accept more payment types without
                                        hesitation, so you can keep on growing.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="services sec-normal bg-colorstyle">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="sec-main sec-bg1 pay bg-seccolorstyle noshadow">
                                        <div className="plans badge feat bg-pink">card system</div>
                                        <div className="content-pay text-start scrollme">
                                            <img src="/img/payments/visa.svg"
                                                 data-src="/img/payments/visa.svg"
                                                 className="lazyload animateme bg-seccolorstyle" alt=""
                                                 data-when="enter" data-from="1" data-to="0" data-opacity="1"
                                                 data-translatex="40" data-easeinout="0"/>
                                                <img src="/img/payments/mastercard.svg"
                                                     data-src="/img/payments/mastercard.svg"
                                                     className="lazyload animateme bg-seccolorstyle" alt=""
                                                     data-when="enter" data-from="1" data-to="0" data-opacity="1"
                                                     data-translatex="30" data-easeinout="0"/>
                                                    <img src="/img/payments/americanexpress.svg"
                                                         data-src="/img/payments/americanexpress.svg"
                                                         className="lazyload animateme bg-seccolorstyle" alt=""
                                                         data-when="enter" data-from="1" data-to="0" data-opacity="1"
                                                         data-translatex="20" data-easeinout="0"/>
                                        </div>
                                        <h2 className="section-heading mt-3 mergecolor">Payment via Credit Card</h2>
                                        <p className="section-subheading mb-4 seccolor">Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p className="seccolor"><span className="c-pink">●</span> Lorem ipsum dolor sit
                                            amet, consectetur <a href="#" className="golink">adipiscing elit</a>, sed do
                                            eiusmod tempor.</p>
                                        <p className="seccolor"><span className="c-pink">●</span> But I must explain to
                                            you how all this mistaken idea of denouncing pleasure and praising pain.</p>
                                        <p className="seccolor"><span className="c-pink">●</span> Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit.</p>
                                        <div className="mt-5"><a href="#" className="golink">More information about
                                            Credit Card System</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="services sec-normal motpath bg-colorstyle">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="sec-main sec-bg1 pay bg-seccolorstyle noshadow">
                                        <div className="plans badge feat bg-pink">online system</div>
                                        <div className="content-pay text-start scrollme">
                                            <img src="/img/payments/paypal.svg"
                                                 data-src="/img/payments/paypal.svg"
                                                 className="lazyload animateme bg-seccolorstyle" alt=""
                                                 data-when="enter" data-from="1" data-to="0" data-opacity="1"
                                                 data-translatex="40" data-easeinout="0"/>
                                                <img src="/img/payments/payoneer.svg"
                                                     data-src="/img/payments/payoneer.svg"
                                                     className="lazyload animateme bg-seccolorstyle" alt=""
                                                     data-when="enter" data-from="1" data-to="0" data-opacity="1"
                                                     data-translatex="30" data-easeinout="0"/>
                                                    <img src="/img/payments/alipay.svg"
                                                         data-src="/img/payments/alipay.svg"
                                                         className="lazyload animateme bg-seccolorstyle" alt=""
                                                         data-when="enter" data-from="1" data-to="0" data-opacity="1"
                                                         data-translatex="20" data-easeinout="0"/>
                                        </div>
                                        <h2 className="section-heading mt-3 mergecolor">Payment via Digital Wallets</h2>
                                        <p className="section-subheading mb-4 seccolor">Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p className="seccolor"><span className="c-pink"> [Step 01]</span> Lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        <p className="seccolor"><span className="c-pink">[Step 02]</span> But I must
                                            explain to you how all this mistaken idea of <a href="#" className="golink">denouncing
                                                pleasure</a> and praising pain.</p>
                                        <p className="seccolor"><span className="c-pink">[Step 03]</span> Lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="mt-5"><a href="#" className="golink">More information about
                                            Digital Wallets System</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services sec-normal sec-bg2 bg-seccolorstyle">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 text-start">
                                    <h2 className="section-heading mergecolor">Multiple Payment Types</h2>
                                    <p className="section-subheading mergecolor">Different customers like to pay in
                                        different ways, and Antler lets you embrace them all. From international payment
                                        card providers like Visa and American Express to digital wallets and platforms
                                        like PayPal and WeChat Pay, we make it simple for you to complete transactions
                                        with ease.</p>
                                </div>
                                <div className="col-md-12 pb-0 pt-5 seccolor"><h4>Major debit and credit cards</h4>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/visa.svg"
                                             data-src="/img/payments/visa.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Visa</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/mastercard.svg"
                                             data-src="/img/payments/mastercard.svg" className="lazyload"
                                             alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Mastercard</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/americanexpress.svg"
                                             data-src="/img/payments/americanexpress.svg" className="lazyload"
                                             alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">American</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/discover.svg"
                                             data-src="/img/payments/discover.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Discover</a>
                                    </div>
                                </div>
                                <div className="col-md-12 pb-0 pt-5 mergecolor"><h4>Pass-through digital wallets</h4>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/visacheckout.svg"
                                             data-src="/img/payments/visacheckout.svg" className="lazyload"
                                             alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Visa Checkout</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <div className="plans badge feat bg-pink">Google</div>
                                        <img src="/img/payments/googlepay.svg"
                                             data-src="/img/payments/googlepay.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Google Pay</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <div className="plans badge feat bg-pink">Apple</div>
                                        <img src="/img/payments/applepay.svg"
                                             data-src="/img/payments/applepay.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Apple Pay</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/samsungpay.svg"
                                             data-src="/img/payments/samsungpay.svg" className="lazyload"
                                             alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Samsung Pay</a>
                                    </div>
                                </div>
                                <div className="col-md-12 pb-0 pt-5 mergecolor"><h4>Alternative payment methods</h4>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/sepa.svg"
                                             data-src="/img/payments/sepa.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Sepa</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/sofort.svg"
                                             data-src="/img/payments/sofort.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Sofort</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/boleto.svg"
                                             data-src="/img/payments/boleto.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Boleto</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/ideal.svg"
                                             data-src="/img/payments/ideal.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">iDeal</a>
                                    </div>
                                </div>
                                <div className="col-md-12 pb-0 pt-5 mergecolor"><h4>Stored-value digital wallets</h4>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/paypal.svg"
                                             data-src="/img/payments/paypal.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Paypal</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/payoneer.svg"
                                             data-src="/img/payments/payoneer.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Payoneer</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/chatpay.svg"
                                             data-src="/img/payments/chatpay.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Wechatpay</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="service-section bg-colorstyle noshadow">
                                        <img src="/img/payments/alipay.svg"
                                             data-src="/img/payments/alipay.svg" className="lazyload" alt=""/>
                                            <hr/>
                                                <p className="subtitle seccolor">
                                                    Excepteur sint occaecat cupidatat
                                                </p>
                                                <a href="" className="btn btn-default-yellow-fill">Alipay</a>
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
                
                <section id="ticket" className="exapath noimage pb-80 bg-colorstyle">
                    <div className="container">
                        <div className="sec-main sec-up mb-0 sec-bg1 bg-colorstyle noshadow nopadding">
                            <div className="randomline hideelement">
                                <div className="bigline"></div>
                                <div className="smallline"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 cd-filter-block mb-0">
                                    <div className="form-contact cd-filter-content p-0 sec-bx">
                                        <div className="text-center">
                                            <h2 className="section-heading mergecolor">Full out the Contact form to
                                                contact us</h2>
                                            <p className="mergecolor">We Will Help You To Choose The Best Plan!</p>
                                        </div>
                                        <form id="contactForm" method="POST">
                                            <div className="row">
                                                <div className="col-md-6 position-relative">
                                                    <label><i className="fas fa-user-tie"></i></label>
                                                    <input id="name" type="text" name="name" placeholder="Full Name"
                                                           required=""/>
                                                </div>
                                                <div className="col-md-6 position-relative">
                                                    <label><i className="fas fa-envelope"></i></label>
                                                    <input id="email" type="email" name="email"
                                                           placeholder="Email Address" required=""/>
                                                </div>
                                                <div className="col-md-6 position-relative">
                                                    <label><i className="fas fa-file-alt"></i></label>
                                                    <input id="subject" type="text" name="subject" placeholder="Subject"
                                                           required/>
                                                </div>
                                                <div className="col-md-6 position-relative">
                                                    <div className="cd-select mt-4">
                                                        <label className="db"></label>
                                                        <select id="department" name="department"
                                                                className="select-filter">
                                                            <option value="">Choose Department</option>
                                                            <option value="Support/Help Desk">Support/Help Desk</option>
                                                            <option value="Commercial Department">Commercial
                                                                Department
                                                            </option>
                                                            <option value="Sales Department">Sales Department</option>
                                                            <option value="Schedule Metings">Schedule Metings</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 position-relative">
                                                    <div className="form-group mt-4">
                                                        <textarea id="message" name="message" className="form-control"
                                                                  rows="5" placeholder="Message..."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 position-relative mt-5">
                                                    <input name="newsletter" type="checkbox" id="checkbox"
                                                           className="filter"/>
                                                        <label htmlFor="checkbox"
                                                               className="checkbox-label c-grey mb-4 seccolor"><span>I have read and accept the terms of the privacy policy - <a
                                                            href="legal" className="golink">RGPD</a></span></label>
                                                        <button type="submit" value="Submit"
                                                                className="btn btn-default-yellow-fill float-start me-3">Submit
                                                            Ticket
                                                        </button>
                                                        <button type="reset" value="reset"
                                                                className="btn btn-default-fill mt-0 mb-3 me-3">Reset
                                                        </button>
                                                        <br/>
                                                </div>
                                                <div id="msgSubmit" className="col-md-12 mt-4">
                                                    <h3 className="c-pink"> Message Submitted!</h3>
                                                </div>
                                            </div>
                                        </form>
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