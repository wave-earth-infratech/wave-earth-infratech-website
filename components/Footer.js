import Link from 'next/link'
export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

  return (
    <>

        <div className="rts-footer-area-start fooetr-bg-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="left-footer-wrapper-3 pt--120 pb--80">
                            <h3 className="title" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                                Let's Build Something <br/>
                                Great Together!
                            </h3>
                            <div className="button-group-footer" data-sal="slide-up" data-sal-delay="350" data-sal-duration="800">
                                <a href="#" className="rts-btn btn-primary">Get started</a>
                                <a href="contact.html" className="rts-btn btn-seconday">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="right-footer-wrapper-3 pt--120 pb--80 pl--120 pr--120 pl_md--0 pt_md--30 pl_sm--0 pt_sm--30">
                            <div className="single-information">
                                <h5 className="title" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                                    Address
                                </h5>
                                <a href="#" className="address" data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" style="display: block;">
                                    Kingstone --- <br/>
                                    258 denial street office <br/>
                                    Berlin Germany
                                </a>
                                <div className="rts-social-wrapper-three">
                                    <ul>
                                        <li data-sal="slide-up" data-sal-delay="100" data-sal-duration="800"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li data-sal="slide-up" data-sal-delay="200" data-sal-duration="800"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li data-sal="slide-up" data-sal-delay="300" data-sal-duration="800"><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                        <li data-sal="slide-up" data-sal-delay="400" data-sal-duration="800"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-information">
                                <h5 className="title" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                                    Say Hello
                                </h5>
                                <a href="mailto:name@email.com" className="mail" data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" style="display: block;">
                                    hello@design.com
                                </a>
                                <a href="tel:+18475555555" className="number" data-sal="slide-up" data-sal-delay="550" data-sal-duration="800" style="display: block;">
                                    +258 368 3158
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-area-three">
                            <div className="menu-area-copyright">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="project.html">Project</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="shop.html">Shop</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="condition">
                                <ul>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>






        <div id="anywhere-home" className="">
        </div>


        <div id="elevate-load">
            <div className="loader-wrapper">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>


    </>
  )
}
