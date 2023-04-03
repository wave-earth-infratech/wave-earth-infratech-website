import Link from 'next/link'
export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

  return (
    <>

        <div class="rts-footer-area-start fooetr-bg-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="left-footer-wrapper-3 pt--120 pb--80">
                            <h3 class="title" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                                Let's Build Something <br/>
                                Great Together!
                            </h3>
                            <div class="button-group-footer" data-sal="slide-up" data-sal-delay="350" data-sal-duration="800">
                                <a href="#" class="rts-btn btn-primary">Get started</a>
                                <a href="contact.html" class="rts-btn btn-seconday">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="right-footer-wrapper-3 pt--120 pb--80 pl--120 pr--120 pl_md--0 pt_md--30 pl_sm--0 pt_sm--30">
                            <div class="single-information">
                                <h5 class="title" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                                    Address
                                </h5>
                                <a href="#" class="address" data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" style="display: block;">
                                    Kingstone --- <br/>
                                    258 denial street office <br/>
                                    Berlin Germany
                                </a>
                                <div class="rts-social-wrapper-three">
                                    <ul>
                                        <li data-sal="slide-up" data-sal-delay="100" data-sal-duration="800"><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                        <li data-sal="slide-up" data-sal-delay="200" data-sal-duration="800"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                        <li data-sal="slide-up" data-sal-delay="300" data-sal-duration="800"><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                        <li data-sal="slide-up" data-sal-delay="400" data-sal-duration="800"><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="single-information">
                                <h5 class="title" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                                    Say Hello
                                </h5>
                                <a href="mailto:name@email.com" class="mail" data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" style="display: block;">
                                    hello@design.com
                                </a>
                                <a href="tel:+18475555555" class="number" data-sal="slide-up" data-sal-delay="550" data-sal-duration="800" style="display: block;">
                                    +258 368 3158
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-area-three">
                            <div class="menu-area-copyright">
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
                            <div class="condition">
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

        <div class="progress-wrap">
            <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 307.919;"></path>
            </svg>
        </div>


        <div class="cart-bar">
            <div class="cart-header">
                <h3 class="cart-heading">MY CART (3 ITEMS)</h3>
                <div class="close-cart"><i class="fal fa-times"></i></div>
            </div>
            <div class="product-area">
                <div class="product-item">
                    <div class="product-detail">
                        <div class="product-thumb"><img src="assets/images/slider/image1.jpg" alt="product-thumb"/></div>
                        <div class="item-wrapper">
                            <span class="product-name">Construct Map</span>
                            <div class="item-wrapper">
                            <span class="product-variation"><span class="color">Green /</span>
                            <span class="size">XL</span></span>
                            </div>
                            <div class="item-wrapper">
                                <span class="product-qnty">3 ×</span>
                                <span class="product-price">$198.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="cart-edit">
                        <div class="quantity-edit">
                            <button class="button"><i class="fal fa-minus minus"></i></button>
                            <input type="text" class="input" value="3"/>
                                <button class="button plus">+<i class="fal fa-plus plus"></i></button>
                        </div>
                        <div class="item-wrapper d-flex mr--5 align-items-center">
                            <a href="#" class="product-edit"><i class="fal fa-edit"></i></a>
                            <a href="#" class="delete-cart"><i class="fal fa-times"></i></a>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <div class="product-detail">
                        <div class="product-thumb"><img src="assets/images/slider/image2.jpg" alt="product-thumb"/></div>
                        <div class="item-wrapper">
                            <span class="product-name"> Bridge product</span>
                            <div class="item-wrapper">
                            <span class="product-variation"><span class="color">Green /</span>
                            <span class="size">XL</span></span>
                            </div>
                            <div class="item-wrapper">
                                <span class="product-qnty">2 ×</span>
                                <span class="product-price">$88.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="cart-edit">
                        <div class="quantity-edit">
                            <button class="button"><i class="fal fa-minus minus"></i></button>
                            <input type="text" class="input" value="2"/>
                                <button class="button plus">+<i class="fal fa-plus plus"></i></button>
                        </div>
                        <div class="item-wrapper d-flex mr--5 align-items-center">
                            <a href="#" class="product-edit"><i class="fal fa-edit"></i></a>
                            <a href="#" class="delete-cart"><i class="fal fa-times"></i></a>
                        </div>
                    </div>
                </div>
                <div class="product-item last-child">
                    <div class="product-detail">
                        <div class="product-thumb"><img src="assets/images/slider/image5.jpg" alt="product-thumb"/></div>
                        <div class="item-wrapper">
                            <span class="product-name">Labour helmet</span>
                            <div class="item-wrapper">
                            <span class="product-variation"><span class="color">Green /</span>
                            <span class="size">XL</span></span>
                            </div>
                            <div class="item-wrapper">
                                <span class="product-qnty">1 ×</span>
                                <span class="product-price">$289.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="cart-edit">
                        <div class="quantity-edit">
                            <button class="button"><i class="fal fa-minus minus"></i></button>
                            <input type="text" class="input" value="2"/>
                                <button class="button plus">+<i class="fal fa-plus plus"></i></button>
                        </div>
                        <div class="item-wrapper d-flex mr--5 align-items-center">
                            <a href="#" class="product-edit"><i class="fal fa-edit"></i></a>
                            <a href="#" class="delete-cart"><i class="fal fa-times"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-bottom-area">
            <span class="spend-shipping"><i class="fal fa-truck"></i> SPENT <span class="amount">$199.00</span> MORE
            FOR FREE SHIPPING</span>
                <span class="total-price">TOTAL: <span class="price">$556</span></span>
                <a href="checkout.html" class="checkout-btn cart-btn">PROCEED TO CHECKOUT</a>
                <a href="cart.html" class="view-btn cart-btn">VIEW CART</a>
            </div>
        </div>



        <div class="search-input-area">
            <div class="container">
                <div class="search-input-inner">
                    <div class="input-div">
                        <input id="searchInput1" class="search-input" type="text" placeholder="Search by keyword or #"/>
                            <button><i class="far fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div id="close" class="search-close-icon"><i class="far fa-times"></i></div>
        </div>


        <div id="anywhere-home" class="">
        </div>


        <div id="elevate-load">
            <div class="loader-wrapper">
                <div class="lds-ellipsis">
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
