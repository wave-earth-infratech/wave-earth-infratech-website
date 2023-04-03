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
