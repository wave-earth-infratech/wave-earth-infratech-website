import Link from 'next/link'
export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

  return (
    <>
        <footer className="footer">
            <img className="logo-bg logo-footer" src="/img/logos/symbol.png" alt="Ruralserver Mono" />
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="heading">Hosting</div>
                                <ul className="footer-menu">
                                    <li className="menu-item"><Link href="/web-hosting/shared-linux-hosting">Shared Hosting</Link></li>
                                    <li className="menu-item"><Link href="/server/dedicated-servers">Dedicated Server</Link></li>
                                    <li className="menu-item"><Link href="/server/cloud-vps">Cloud Virtual (VPS)</Link></li>
                                    <li className="menu-item"><Link href="/domains">Domain Names</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="heading">Support</div>
                                <ul className="footer-menu">
                                    <li className="menu-item"><a href="https://client.ruralserver.com/" target="_blank">Client Area</a></li>
                                    <li className="menu-item"><a href="https://client.ruralserver.com/knowledgebase.php" target="_blank">Knowledge Base</a></li>
                                    <li className="menu-item"><a href="https://client.ruralserver.com/contact.php" target="_blank">Contact Us</a></li>
                                    <li className="menu-item"><a href="https://client.ruralserver.com/announcements.php" target="_blank">Announcements</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="heading">Company</div>
                                <ul className="footer-menu">
                                    <li className="menu-item"><Link href="/about-ruralserver"> About RuralServer</Link></li>
                                    <li className="menu-item"><Link href="/payment-methods"> Payment Methods</Link></li>
                                    <li className="menu-item"><Link href="/tos/terms-of-service"> Terms of Service</Link></li>
                                    <li className="menu-item"><Link href="/tos/acceptable-use-policy">Acceptable Use Policy</Link></li>
                                    <li className="menu-item"><Link href="/tos/privacy-policy">Privacy Policy</Link></li>
                                    <li className="menu-item"><Link href="/tos/dmca-abuse-report">DMCA/Abuse Report</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <a><img className="svg logo-footer d-block" src="/img/logos/logo.svg" alt="RuralServer" /></a>
                                <a><img className="svg logo-footer d-none" src="/img/logos/logo-dark.svg" alt="RuralServer" /></a>
                                <div className="copyrigh">©2013 - {getCurrentYear()} RuralServer - All rights reserved</div>
                                <div className="soc-icons">
                                    <a href="https://www.facebook.com/ruralserver/" target="_blank"><i className="fab fa-facebook-f withborder noshadow"></i></a>
                                    <a href="https://www.youtube.com/@Ruralserverhosting" target="_blank"><i className="fab fa-youtube withborder noshadow"></i></a>
                                    <a href="https://twitter.com/ruralserver" target="_blank"><i className="fab fa-twitter withborder noshadow"></i></a>
                                    <a href="https://www.linkedin.com/company/5120417/admin/" target="_blank"><i className="fab fa-linkedin withborder noshadow"></i></a>
                                </div>
                                <a className="deploys-status" href="https://app.netlify.com/sites/ruralserver/deploys" target="_blank"><img src="#" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-35">
                    <div className="container pt-35">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="footer-menu">
                                    <li className="menu-item by">Hybrid Design With <span className="c-pink">♥</span> by <a href="https://www.srapsware.com/" target="_blank">Srapsware</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="payment-list">
                                    <li><p>Payments We Accept</p></li>
                                    <li><i className="fab fa-cc-paypal"></i></li>
                                    <li><i className="fab fa-cc-visa"></i></li>
                                    <li><i className="fab fa-cc-mastercard"></i></li>
                                    <li><i className="fab fa-cc-apple-pay"></i></li>
                                    <li><i className="fab fa-cc-discover"></i></li>
                                    <li><i className="fab fa-cc-amazon-pay"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>

    </>
  )
}
