import Link from 'next/link'
import Image from 'next/image'


const ThemeChange = (e) =>  {
    //console.log('Free pizza!');
    //console.log(e);
    if (e.target.checked) {
        document.querySelector("body").setAttribute("data-background", 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.querySelector("body").setAttribute("data-background", 'light');
        localStorage.setItem('theme', 'light');
    }
}
export default function Header() {
    return (
      <>

          <div id="spinner-area" className="hide d-none">
              <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                  <div className="spinner-txt">RuralServer...</div>
              </div>
          </div>

          <div className="body-borders" data-border="20">
              <div className="top-border bg-white"></div>
              <div className="right-border bg-white"></div>
              <div className="bottom-border bg-white"></div>
              <div className="left-border bg-white"></div>
          </div>
          <div className="sec-bg3 p-2 pe-3 infonews">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 news">
                          <div className="m-0 h6">
                              <div className="badge bg-purple me-2">news</div>
                              <small className="text-light">Gaming Servers Page Already Available. <a
                                  className="c-yellow" href="/">See Live Demo <i
                                  className="fas fa-arrow-circle-right"></i></a></small>
                          </div>
                      </div>
                      <div className="col-md-6 link">
                          <div className="infonews-nav float-end">
                              <a href="https://client.ruralserver.com/knowledgebase.php">Knowledge Base</a>
                              <a href="https://client.ruralserver.com/contact.php">Support</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="menu-wrap">
              <div className="nav-menu">
                  <div className="container">
                      <div className="row">
                          <div className="col-2 col-md-2">
                              <Link href="/">
                                  <Image width="140px" height="47px" className="logo-menu" src="/img/logos/logo-dark.svg" alt="logo Ruralserver" />
                              </Link>
                          </div>
                          <nav id="menu" className="col-10 col-md-10">
                              <div className="navigation float-end">
                                  <button className="menu-toggle">
                                      <span className="icon"></span>
                                      <span className="icon"></span>
                                      <span className="icon"></span>
                                  </button>
                                  <ul className="main-menu nav navbar-nav navbar-right">
                                      <li className="menu-item me-2">
                                          <Link className="m-0 pe-1 v-stroke" href="/" data-i18n="[html]header.home">Home</Link>
                                          </li>
                                      <li className="menu-item menu-item-has-children">
                                          <a className="m-0 pe-1 v-stroke" href="#"
                                             data-i18n="[html]header.hosting">Hosting</a>
                                          <div className="badge bg-pink me-4">PRO</div>
                                          <div className="sub-menu menu-large bg-colorstyle">
                                              <div className="service-list">
                                                  <div className="service">
                                                      <img className="svg" src="/fonts/svg/cloudfiber.svg"
                                                           alt="Shared Hosting" />
                                                          <div className="media-body">
                                                              <Link className="menu-item mergecolor" href="/web-hosting/shared-linux-hosting"
                                                                 data-i18n="[html]submenu.sharedhosting">Linux Shared Hosting </Link>
                                                              <p className="seccolor">Directadmin fast shared hosting</p>
                                                          </div>
                                                  </div>

                                                  <div className="service">
                                                      <img className="svg" src="/fonts/svg/dedicated.svg"
                                                           alt="Dedicated Server" />
                                                          <div className="media-body">
                                                              <Link className="menu-item mergecolor" href="/server/dedicated-servers"
                                                                 data-i18n="[html]submenu.dedicated">Dedicated Servers</Link>
                                                              <div className="menu badge feat bg-pink">FILTER</div>
                                                              <p className="seccolor">Fast and cheap plan for self/managed server</p>
                                                          </div>
                                                  </div>
                                                  <div className="service">
                                                      <img className="svg" src="/fonts/svg/vps.svg" alt="Cloud VPS" />
                                                          <div className="media-body">
                                                              <Link className="menu-item mergecolor" href="/server/cloud-vps"
                                                                 data-i18n="[html]submenu.vps">VPS</Link>
                                                              <div className="menu badge feat bg-grey">SSD</div>
                                                              <p className="seccolor">Fast OpenVZ/KVM multi location's server</p>
                                                          </div>
                                                  </div>

                                                  <div className="service">
                                                      <img className="svg" src="/fonts/svg/domains.svg" alt="Domains" />
                                                          <div className="media-body">
                                                              <Link className="menu-item mergecolor" href="/domains"
                                                                 data-i18n="[html]submenu.domains">Domains</Link>
                                                              <p className="seccolor">Get name for your business</p>
                                                          </div>
                                                  </div>

                                              </div>
                                          </div>
                                      </li>
                                      <li className="menu-item menu-item-has-children">
                                          <a className="m-0 pe-1 v-stroke" href="#" data-i18n="[html]header.other">Other</a>
                                          <div className="badge bg-pink me-4 wow animated shake delay-1s visible">NEW</div>
                                          <div className="sub-menu megamenu-list">
                                              <div className="container">
                                                  <div className="row">
                                                      <div className="service-list col-md-9 bg-colorstyle">
                                                          <div className="row">
                                                              <div className="col-4 service">
                                                                  <div className="media-body">
                                                                      <div className="top-head">
                                                                          <img className="svg"
                                                                               src="/fonts/svg/favorite.svg"
                                                                               alt="Services" />
                                                                              <div
                                                                                  className="menu-item c-grey mergecolor"
                                                                                  data-i18n="[html]submenu.services">Services</div>
                                                                      </div>
                                                                      <hr/>
                                                                          <ul>
                                                                              <li className="menu-item"><Link
                                                                                  className="mergecolor"
                                                                                  href="/reseller/linux-reseller-hosting"
                                                                                  data-i18n="[html]submenu.linuxreseller"> Linux Reseller Hosting</Link>
                                                                              </li>
                                                                              <li className="menu-item"><Link
                                                                                  className="mergecolor" href="/reseller/windows-reseller-hosting"
                                                                                  data-i18n="[html]submenu.windowsreseller">Windows Reseller Hosting</Link>
                                                                              </li>


                                                                              <li className="menu-item"><Link
                                                                                  className="mergecolor"
                                                                                  href="/websecurity"
                                                                                  data-i18n="[html]submenu.websecurity">Web Security </Link>
                                                                                  <div
                                                                                      className="badge inside bg-pink">NEW
                                                                                  </div>
                                                                              </li>
                                                                          </ul>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-body">
                                                                      <div className="top-head">
                                                                          <img className="svg"
                                                                               src="/fonts/svg/infrastructure.svg"
                                                                               alt="Infrastructure" />
                                                                              <div
                                                                                  className="menu-item c-grey mergecolor"
                                                                                  data-i18n="[html]submenu.infrastructure">Infrastructure</div>
                                                                      </div>
                                                                      <hr/>
                                                                          <ul>
                                                                              <li className="menu-item"><Link
                                                                                  className="mergecolor" href="/ddos"
                                                                                  data-i18n="[html]submenu.ddosprotections"> DDoS Protections</Link>
                                                                              </li>
                                                                              <li className="menu-item"><Link
                                                                                  className="mergecolor"
                                                                                  href="/datacenter"
                                                                                  data-i18n="[html]submenu.datacenters">Datacenter </Link>
                                                                                  <div
                                                                                      className="badge inside bg-grey">TOP
                                                                                  </div>
                                                                              </li>
                                                                              <li className="menu-item"><Link
                                                                                  className="mergecolor" href="/about-ruralserver"
                                                                                  data-i18n="[html]submenu.aboutruralserver">About Ruralserver</Link>
                                                                              </li>

                                                                          </ul>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-body">
                                                                      <div className="top-head">
                                                                          <img className="svg"
                                                                               src="/fonts/svg/global.svg" alt="Global"/>
                                                                              <div
                                                                                  className="menu-item c-grey mergecolor"
                                                                                  data-i18n="[html]submenu.others">Others</div>
                                                                      </div>
                                                                      <hr/>
                                                                          <ul>
                                                                              <li className="menu-item"><Link
                                                                                  className="mergecolor" href="/payment-methods"
                                                                                  data-i18n="[html]submenu.paymentsmethod">Payment Methods </Link>
                                                                                  <div
                                                                                      className="badge inside bg-pink">NEW
                                                                                  </div>
                                                                              </li>
                                                                              <li className="menu-item"><Link
                                                                                  className="mergecolor"
                                                                                  href="/tos"
                                                                                  data-i18n="[html]submenu.tos">TOS </Link>
                                                                                  <div
                                                                                      className="badge inside bg-grey">NEW
                                                                                  </div>
                                                                              </li>
                                                                          </ul>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="start-offer col-md-3">
                                                          <div className="inner">
                                                              <h4 className="title my-3">Cloud VPS SSD <br/>Get 50%
                                                                  Discount</h4>
                                                              <div className="inner-content mb-4">Enjoy increased
                                                                  flexibility and get the performance you need with SSD
                                                                  Storage.
                                                              </div>
                                                              <span className="m-0">Before <del className="c-pink">$20.00 /mo</del></span><br/>
                                                              <h4 className="m-0"><b>Now</b> <b className="c-pink">$9.99
                                                                  /mo</b></h4>
                                                              <a href="vps" className="btn btn-default-pink-fill mt-4">See
                                                                  Plans</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                     <li className="menu-item menu-item-has-children menu-last">
                                          <a className="v-stroke" href="#" data-i18n="[html]header.support">Support</a>
                                          <div className="sub-menu megamenu">
                                              <div className="container">
                                                  <div className="row">
                                                      <div className="service-list col-md-9 bg-colorstyle">
                                                          <div className="row">
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="/fonts/svg/bookmark.svg"
                                                                           alt="Knowledgebase" />
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <a className="menu-item mergecolor"
                                                                         href="https://client.ruralserver.com/knowledgebase.php" target="_blank"
                                                                         data-i18n="[html]submenu.knowledgebase">Knowledge Base</a>
                                                                      <p className="seccolor">Knowledge Base and FAQ</p>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="/fonts/svg/whatsapp.svg"
                                                                           alt="Knowledgebase" />
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <a className="menu-item mergecolor"
                                                                         href="https://api.whatsapp.com/send?phone=917982377273&text=Hello"
                                                                         data-i18n="[html]submenu.whatsapsupport">Whatsapp Support</a>
                                                                      <p className="seccolor">Whatsapp: +91-7982377273</p>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="/fonts/svg/emailopen.svg"
                                                                           alt="Knowledgebase" />
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <a className="menu-item mergecolor" href="https://client.ruralserver.com/submitticket.php"
                                                                         data-i18n="[html]submenu.ticketandmailsupport">Ticket and mail support</a>
                                                                      <p className="seccolor">Open ticket for sale and support department</p>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="/fonts/svg/compare.svg"
                                                                           alt="Knowledgebase" />
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <Link className="menu-item mergecolor" href="/tos"
                                                                         data-i18n="[html]submenu.termsofservice">Terms of Service</Link>
                                                                      <div className="badge inside bg-grey ms-1">NEW
                                                                      </div>
                                                                      <p className="seccolor">Know here your basic and easy terms and condition </p>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="/fonts/svg/blog.svg"
                                                                           alt="Knowledgebase"/>
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <div>
                                                                          <Link className="menu-item mergecolor"
                                                                             href="/tos/acceptable-use-policy"
                                                                             data-i18n="[html]submenu.usespolicy">Uses Policy</Link>
                                                                          <div
                                                                              className="badge inside bg-pink ms-1">Updated
                                                                          </div>
                                                                      </div>
                                                                      <p className="seccolor">Check uses the policy</p>
                                                                  </div>
                                                              </div>
                                                              <div className="col-4 service">
                                                                  <div className="media-left">
                                                                      <img className="svg" src="/fonts/svg/question.svg"
                                                                           alt="Knowledgebase" />
                                                                  </div>
                                                                  <div className="media-body">
                                                                      <Link className="menu-item mergecolor" href="/tos/privacy-policy"
                                                                         data-i18n="[html]submenu.privacypolicy">Privacy Policy</Link>
                                                                      <p className="seccolor">We care about your privacy</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="start-offer col-md-3">
                                                          <div className="inner">
                                                              <h4 className="title my-3">Live Chat</h4>
                                                              <div className="inner-content"><span>Live chat support <br/>9:30 AM - 6:30 PM IST</span>
                                                              </div>
                                                              <a href="contact"
                                                                 className="btn btn-default-yellow-fill mt-4" onclick="OverlayChatWidgetV2.Show();">Chat now</a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                      <div className="tech-box">
                                          <div className="theme-switch-wrapper">
                                              <label className="theme-switch">
                                                  <input type="checkbox" className="theme-switcher" onClick={ThemeChange}/>
                                                      <div className="mode-container">
                                                          <i className="gg-sun"></i>
                                                          <i className="gg-moon"></i>
                                                      </div>
                                              </label>
                                          </div>
                                      </div>
                                      <li className="menu-item">
                                          <a className="pe-0 me-0" href="https://client.ruralserver.com/" target="_blank">
                                              <div className="btn btn-default-yellow-fill question"><span
                                                  data-i18n="[html]header.login">Client Area</span> <i
                                                  className="fas fa-lock ps-1"></i></div>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
          <div className="menu-wrap mobile">
              <div className="container">
                  <div className="row">
                      <div className="col-6">
                          <a href="/"><img className="svg logo-menu d-block" src="/img/logos/logo.svg"
                                               alt="ruralserver"/></a>
                          <a href="/"><img className="svg logo-menu d-none" src="/img/logos/logo-dark.svg"
                                               alt="ruralserver"/></a>
                      </div>
                      <div className="col-6">
                          <nav className="nav-menu float-end d-flex">
                              <div className="tech-box">
                                  <div className="theme-switch-wrapper">
                                      <label className="theme-switch">
                                          <input type="checkbox" className="theme-switcher"/>
                                          <div className="mode-container">
                                              <i className="gg-sun"></i>
                                              <i className="gg-moon"></i>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                              <button id="nav-toggle" className="menu-toggle">
                                  <span className="icon"></span>
                                  <span className="icon"></span>
                                  <span className="icon"></span>
                              </button>
                              <div className="main-menu bg-seccolorstyle">
                                  <div className="menu-item">
                                      <a className="mergecolor" href="/" data-bs-toggle="dropdown">Home <div
                                          className="badge bg-purple">NEW</div></a>
                                      <div className="dropdown-menu">
                                          <a className="dropdown-item menu-item" href="index">Home Default</a>
                                          <a className="dropdown-item menu-item" href="homevideo">Home Video</a>
                                          <a className="dropdown-item menu-item" href="homeimage">Home Image</a>
                                          <a className="dropdown-item menu-item" href="homegaming">Home Gaming <div
                                              className="badge inside bg-purple ms-2">NEW</div></a>
                                          <a className="dropdown-item menu-item" href="home3d">Home 3D <div
                                              className="badge inside bg-purple ms-2">NEW</div></a>
                                          <a className="dropdown-item menu-item"
                                             href="#"
                                             target="_blank">WHMCS (RTL)
                                              <div className="badge inside bg-pink ms-2">HOT</div></a>
                                      </div>
                                  </div>
                                  <div className="menu-item">
                                      <a className="mergecolor" href="#" data-bs-toggle="dropdown">Hosting <div
                                          className="badge bg-purple">PRO</div></a>
                                      <div className="dropdown-menu">
                                          <a className="dropdown-item menu-item" href="hosting">Shared Hosting</a>
                                          <a className="dropdown-item menu-item" href="dedicated">Dedicated Server</a>
                                          <a className="dropdown-item menu-item" href="vps">Cloud VPS</a>

                                      </div>
                                  </div>
                                  <div className="menu-item">
                                      <a className="mergecolor" href="#" data-bs-toggle="dropdown">Others</a>
                                      <div className="dropdown-menu">
                                          <a className="dropdown-item menu-item" href="emailsecurity">Email Security</a>
                                          <a className="dropdown-item menu-item" href="ssl">SSL Certificates</a>
                                          <a className="dropdown-item menu-item" href="email">Enterprise Email</a>
                                          <a className="dropdown-item menu-item" href="magento">Magento Pro</a>
                                          <a className="dropdown-item menu-item" href="gsuite"> Suite - Google</a>
                                          <a className="dropdown-item menu-item" href="iptv">IPTV System</a>
                                          <a className="dropdown-item menu-item" href="gaming">Gaming Server</a>
                                          <a className="dropdown-item menu-item" href="radiostream">Radio Stream <div
                                              className="badge inside bg-pink ms-2">NEW</div></a>
                                          <a className="dropdown-item menu-item" href="ddos">DDoS Protection</a>
                                          <a className="dropdown-item menu-item" href="datacenter">Datacenter <div
                                              className="badge inside bg-grey ms-2">TOP</div></a>
                                          <a className="dropdown-item menu-item" href="about">About Us</a>
                                          <a className="dropdown-item menu-item"
                                             href="database">Database-as-a-Service</a>
                                          <a className="dropdown-item menu-item" href="elements">Elements</a>
                                          <a className="dropdown-item menu-item" href="voip">Virtual Numbers</a>
                                          <a className="dropdown-item menu-item" href="voice">Voice Server <div
                                              className="badge inside bg-pink ms-2">NEW</div></a>
                                          <a className="dropdown-item menu-item" href="payments">Payment Methods <div
                                              className="badge inside bg-pink ms-2">NEW</div></a>
                                          <a className="dropdown-item menu-item" href="configurator">Configurator <div
                                              className="badge inside bg-grey ms-2">HOT</div></a>
                                          <a className="dropdown-item menu-item" href="cart">Cart</a>
                                          <a className="dropdown-item menu-item" href="checkout">Checkout</a>
                                          <a className="dropdown-item menu-item" href="soon">Coming Soon</a>
                                          <a className="dropdown-item menu-item" href="promos">Promotions</a>
                                          <a className="dropdown-item menu-item" href="blackfriday">Blackfriday <div
                                              className="badge inside bg-pink ms-2">HOT</div></a>
                                      </div>
                                  </div>
                                  <div className="menu-item menu-last">
                                      <a className="mergecolor" href="#" data-bs-toggle="dropdown">Support</a>
                                      <div className="dropdown-menu">
                                          <a className="dropdown-item menu-item" href="knowledgebase-list">Knowlege
                                              List</a>
                                          <a className="dropdown-item menu-item" href="knowledgebase-article">Knowlege
                                              Article</a>
                                          <a className="dropdown-item menu-item" href="contact">Contact Us</a>
                                          <a className="dropdown-item menu-item" href="legal">Legal</a>
                                          <a className="dropdown-item menu-item" href="blog-details">Blog</a>
                                          <a className="dropdown-item menu-item" href="faq">Faq</a>
                                      </div>
                                  </div>
                                  <div className="float-start w-100 mt-3">
                                      <p className="c-grey-light seccolor"><small> Phone: + (123) 1300-656-1046</small>
                                      </p>
                                      <p className="c-grey-light seccolor"><small>Email: antler@mail.com</small></p>
                                  </div>
                                  <div>
                                      <a href="login" href="https://client.ruralserver.com/" target="_blank">
                                          <div className="btn btn-default-yellow-fill mt-3">CLIENT AREA</div>
                                      </a>
                                  </div>
                              </div>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>

      </>
  )
}
