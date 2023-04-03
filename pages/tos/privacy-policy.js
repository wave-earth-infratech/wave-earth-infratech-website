import Head from 'next/head'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta/>
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content=""/>
            </Head>

            <div className="box-container limit-width">

                <Header/>

                <div className="top-header">
                    <div className="total-grad-inverse"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wrapper">
                                    <div className="heading mb-0">General Terms And Conditions</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <section id="gotop" className="blog motpath pb-80 bg-colorstyle">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 col-lg-4">
                                <aside id="sidebar" className="sidebar mt-80 sec-bg1 bg-seccolorstyle noshadow">
                                    <div className="menu categories clear">
                                        <h5 className="mergecolor"><b>Terms</b></h5>
                                        <hr/>
                                        <div className="heading pt-2"><a href="/tos" id="showall"
                                                                         className="gocheck active seccolor"><img
                                            className="svg me-3" src="/fonts/svg/select.svg"
                                            alt="Dedicated Server"/> All General Terms</a></div>
                                        <div className="heading pt-2"><a href="/tos/terms-of-service"
                                                                         className="gocheck showSingle seccolor"
                                                                         target="1"><img className="svg me-3"
                                                                                         src="/fonts/svg/managedserver.svg"
                                                                                         alt="Shared Hosting"/> Terms of Service</a></div>
                                        <div className="heading pt-2"><a href="/tos/acceptable-use-policy"
                                                                         className="gocheck showSingle seccolor"
                                                                         target="2"><img className="svg me-3"
                                                                                         src="/fonts/svg/privacy.svg"
                                                                                         alt="Cloud Reseller"/> Acceptable Use Policy</a></div>
                                        <div className="heading pt-2"><a href="/tos/privacy-policy"
                                                                         className="gocheck showSingle seccolor"
                                                                         target="3"><img className="svg me-3"
                                                                                         src="/fonts/svg/network.svg"
                                                                                         alt="Dedicated Server"/> Privacy Policy</a></div>
                                        <div className="heading pt-2"><a href="/tos/dmca-abuse-report"
                                                                         className="gocheck showSingle seccolor"
                                                                         target="4"><img className="svg me-3"
                                                                                         src="/fonts/svg/learning.svg"
                                                                                         alt="Dedicated Server"/> DMCA/Abuse Report</a>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="pt-35 col-md-12 col-lg-8">
                                <div id="sidebar_content" className="wrap-blog">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 knowledge">
                                            <div id="div3" className="wrapper targetDiv mt-5 bg-seccolorstyle noshadow">
                                                <h5><a href="" className="category"><b>Cookie Statement</b></a> <span
                                                    className="float-end c-grey seccolor">[v2 04/2017]</span></h5>
                                                <hr/>
                                                <a href="">[1] Cookies and crawling</a>
                                                <div className="blog-info">
                                                    <p className="seccolor">Lorem ipsum, or lipsum as it is
                                                        sometimes known, is dummy text used in laying out print,
                                                        graphic or web designs. The passage is <i
                                                            className="golink">attributed to an
                                                            unknown</i> typesetter in <span
                                                            className="text-dark seccolor">the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with.</span>
                                                    </p>
                                                </div>
                                                <br/>
                                                <div className="blog-info">
                                                    <p className="seccolor">[a] Lorem ipsum, or lipsum as it is
                                                        sometimes known, is dummy text used in laying out print,
                                                        graphic or web designs. The passage is.</p>
                                                </div>
                                                <br/>
                                                <div className="blog-info">
                                                    <p className="seccolor">[b] From its medieval origins to
                                                        the digital era, learn everything there is to know
                                                        about the ubiquitous lorem ipsum passage.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services help pt-4 pb-80 bg-colorstyle">
                    <div className="container">
                        <div className="service-wrap">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <a href="javascript:void(Tawk_API.toggle())" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/livechat.svg" alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Live Chat</div>
                                                <div className="description seccolor">Lorem Ipsum is simply dummy text
                                                    printing.
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <a href="contact.html" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/emailopen.svg" alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Send Ticket</div>
                                                <div className="description seccolor">Lorem Ipsum is simply dummy text
                                                    printing.
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <div className="help-container bg-seccolorstyle noshadow">
                                        <a href="knowledgebase.html" className="help-item">
                                            <div className="img">
                                                <img className="svg ico" src="/fonts/svg/phone.svg" alt=""/>
                                            </div>
                                            <div className="inform">
                                                <div className="title mergecolor">Phone Now</div>
                                                <div className="description seccolor">Lorem Ipsum is simply dummy text
                                                    printing.
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
            <a href="#0" className="cd-top"> <i className="fas fa-angle-up"></i> </a>
            <Js/>
        </>
    )
}