import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
      <>
          <header className="header-three header--sticky">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="header-three-wrapper">
                              <div className="logo-area">
                                  <a href="index.html" className="thumbnail">
                                      <img src="/images/logo/02.png" alt="logo-area"/>
                                  </a>
                                  <a href="index.html" className="thumbnail-2">
                                      <img src="/images/logo/01.png" alt="logo-area"/>
                                  </a>
                              </div>

                              <div className="main-nav-desk nav-area">
                                  <nav>
                                      <ul>
                                          <li className="has-droupdown">
                                              <a className="nav-link" href="#">Home</a>
                                              <ul className="submenu menu-home">
                                                  <li>
                                                      <a href="index.html">
                                                          <img src="/images/preview/01.jpg" alt="preview"/>
                                                              <span>Main Construction</span>
                                                      </a>
                                                      <ul className="page">
                                                          <li className="multipage"><a className="rts-btn btn-primary"
                                                                                       href="index.html">Multipage</a>
                                                          </li>
                                                          <li className="onepage"><a className="rts-btn btn-primary"
                                                                                     href="onepage-one.html">Onepage</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li>
                                                      <a href="index-two.html">
                                                          <img src="/images/preview/02.jpg" alt="preview"/>
                                                              <span>Construction Home</span>
                                                      </a>
                                                      <ul className="page">
                                                          <li className="multipage"><a className="rts-btn btn-primary"
                                                                                       href="index-two.html">Multipage</a>
                                                          </li>
                                                          <li className="onepage"><a className="rts-btn btn-primary"
                                                                                     href="onepage-two.html">Onepage</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li>
                                                      <a href="index-three.html">
                                                          <img src="/images/preview/03.jpg" alt="preview"/>
                                                              <span>Renovation Home</span>
                                                      </a>
                                                      <ul className="page">
                                                          <li className="multipage"><a className="rts-btn btn-primary"
                                                                                       href="index-three.html">Multipage</a>
                                                          </li>
                                                          <li className="onepage"><a className="rts-btn btn-primary"
                                                                                     href="onepage-three.html">Onepage</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li>
                                                      <a href="index-four.html">
                                                          <img src="/images/preview/04.jpg" alt="preview"/>
                                                              <span>Factory Home</span>
                                                      </a>
                                                      <ul className="page">
                                                          <li className="multipage"><a className="rts-btn btn-primary"
                                                                                       href="index-four.html">Multipage</a>
                                                          </li>
                                                          <li className="onepage"><a className="rts-btn btn-primary"
                                                                                     href="onepage-four.html">Onepage</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li>
                                                      <a href="index-five.html">
                                                          <img src="/images/preview/05.jpg" alt="preview"/>
                                                              <span>Building Home</span>
                                                      </a>
                                                      <ul className="page">
                                                          <li className="multipage"><a className="rts-btn btn-primary"
                                                                                       href="index-five.html">Multipage</a>
                                                          </li>
                                                          <li className="onepage"><a className="rts-btn btn-primary"
                                                                                     href="onepage-five.html">Onepage</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li>
                                                      <a href="index-six.html">
                                                          <img src="/images/preview/06.jpg" alt="preview"/>
                                                              <span>Architecture Home</span>
                                                      </a>
                                                      <ul className="page">
                                                          <li className="multipage"><a className="rts-btn btn-primary"
                                                                                       href="index-six.html">Multipage</a>
                                                          </li>
                                                          <li className="onepage"><a className="rts-btn btn-primary"
                                                                                     href="onepage-six.html">Onepage</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li>
                                                      <a href="index-six.html">
                                                          <img src="/images/preview/08.jpg" alt="preview"/>
                                                              <span>Handyman Home</span>
                                                      </a>
                                                      <ul className="page">
                                                          <li className="multipage"><a className="rts-btn btn-primary"
                                                                                       href="index-eight.html">Multipage</a>
                                                          </li>
                                                          <li className="onepage"><a className="rts-btn btn-primary"
                                                                                     href="onepage-eight.html">Onepage</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li>
                                                      <a href="index-seven.html">
                                                          <img src="/images/preview/07.jpg" alt="preview"/>
                                                              <span>Engineering Home</span>
                                                      </a>
                                                      <ul className="page">
                                                          <li className="multipage"><a className="rts-btn btn-primary"
                                                                                       href="index-seven.html">Multipage</a>
                                                          </li>
                                                          <li className="onepage"><a className="rts-btn btn-primary"
                                                                                     href="onepage-seven.html">Onepage</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li>
                                                      <a href="index-nine.html">
                                                          <img src="/images/preview/09.jpg" alt="preview"/>
                                                              <span>Home Industrial</span>
                                                      </a>
                                                      <ul className="page">
                                                          <li className="multipage"><a className="rts-btn btn-primary"
                                                                                       href="index-nine.html">Multipage</a>
                                                          </li>
                                                          <li className="onepage"><a className="rts-btn btn-primary"
                                                                                     href="onepage-nine.html">Onepage</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                                  <li className="last">
                                                      <a href="index-nine.html">
                                                          <img src="/images/preview/09.jpg" alt="preview"/>
                                                              <span>Home Solar Energy</span>
                                                      </a>
                                                      <ul className="page">
                                                          <li className="multipage"><a className="rts-btn btn-primary"
                                                                                       href="index-nine.html">Multipage</a>
                                                          </li>
                                                          <li className="onepage"><a className="rts-btn btn-primary"
                                                                                     href="onepage-nine.html">Onepage</a>
                                                          </li>
                                                      </ul>
                                                  </li>
                                              </ul>
                                          </li>
                                          <li className="has-droupdown pages">
                                              <a className="nav-link" href="#">Pages</a>
                                              <ul className="submenu inner-page">
                                                  <li className="sub-dropdown">
                                                      <a href="#" className="sub-menu-link">Who We Are</a>
                                                      <ul className="submenu third-lvl base">
                                                          <li><a className="mobile-menu-link"
                                                                 href="about.html">About</a></li>
                                                          <li><a className="mobile-menu-link"
                                                                 href="vision.html">Vision</a></li>
                                                          <li><a className="mobile-menu-link"
                                                                 href="careers.html">Careers</a></li>
                                                          <li><a className="mobile-menu-link"
                                                                 href="safety.html">Safety</a></li>
                                                          <li><a className="mobile-menu-link"
                                                                 href="sustainability.html">Sustainability</a></li>
                                                      </ul>
                                                  </li>
                                                  <li><a href="company-story.html">Our History</a></li>
                                                  <li><a href="team.html">Team</a></li>
                                                  <li><a href="team-details.html">Team Details</a></li>
                                                  <li><a href="appoinment.html">Appoinment</a></li>
                                                  <li className="sub-dropdown">
                                                      <a href="#" className="sub-menu-link">Shop</a>
                                                      <ul className="submenu third-lvl base">
                                                          <li><a className="mobile-menu-link" href="shop.html">Shop</a>
                                                          </li>
                                                          <li><a className="mobile-menu-link"
                                                                 href="single-product.html">Single Product</a></li>
                                                          <li><a className="mobile-menu-link" href="cart.html">Cart</a>
                                                          </li>
                                                          <li><a className="mobile-menu-link"
                                                                 href="checkout.html">Checkout</a></li>
                                                          <li><a className="mobile-menu-link"
                                                                 href="account.html">Account</a></li>
                                                      </ul>
                                                  </li>
                                                  <li className="sub-dropdown">
                                                      <a href="#" className="sub-menu-link">Contact</a>
                                                      <ul className="submenu third-lvl base">
                                                          <li><a className="mobile-menu-link" href="contact.html">Contact
                                                              One</a></li>
                                                          <li><a className="mobile-menu-link" href="contact-2.html">Contact
                                                              Two</a></li>
                                                      </ul>
                                                  </li>
                                                  <li><a href="404.html">Error 404</a></li>
                                              </ul>
                                          </li>
                                          <li className="has-droupdown pages">
                                              <a className="nav-link" href="#">Service</a>
                                              <ul className="submenu inner-page">
                                                  <li><a href="service.html">Service Style 1</a></li>
                                                  <li><a href="service-2.html">Service Style 2</a></li>
                                                  <li><a href="service-3.html">Service Style 3</a></li>
                                                  <li><a href="service-details.html">Service Details</a></li>
                                              </ul>
                                          </li>
                                          <li className="has-droupdown pages">
                                              <a className="nav-link" href="#">Portfolio</a>
                                              <ul className="submenu inner-page">
                                                  <li><a href="project.html">Project</a></li>
                                                  <li><a href="project-details.html">Project Details</a></li>
                                              </ul>
                                          </li>
                                          <li className="has-droupdown pages">
                                              <a className="nav-link" href="#">Blog</a>
                                              <ul className="submenu inner-page">
                                                  <li><a href="blog-list.html">Blog List</a></li>
                                                  <li><a href="blog-grid.html">Blog Grid</a></li>
                                                  <li><a href="blog-details.html">Blog Details</a></li>
                                              </ul>
                                          </li>
                                          <li className="menu-item">
                                              <a className="nav-item" href="contact.html">Contact</a>
                                          </li>
                                      </ul>
                                  </nav>
                              </div>
                              <div className="rts-button-area">
                                  <a href="contact.html" className="rts-btn btn-seconday">Send Message</a>
                                  <div className="menu-area" id="menu-btn">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"
                                           fill="none">
                                          <rect width="18" height="2" fill="#0C0A0A"/>
                                          <rect y="7" width="18" height="2" fill="#0C0A0A"/>
                                          <rect y="14" width="18" height="2" fill="#0C0A0A"/>
                                      </svg>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>


      </>
  )
}
