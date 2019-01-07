import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="columns">
                <div className="column has-text-centered">
                    <h1>Literacy Green Bay</h1>
                    <p>
                        424 S. Monroe Avenue<br/>
                        Green Bay, WI 54301<br/>
                        920-435-2474<br/>
                        info@literacygreenbay.org
                    </p>
                </div>
                <div className="column has-text-centered">
                    <h1>Follow us on Social Media!</h1>
                    <div className="social">
                        <a href="https://www.facebook.com/pages/Literacy-Green-Bay/115997212525" target="_blank">
                            <i class="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://twitter.com/literacyGB" target="_blank">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/literacy-green-bay-inc-/" target="_blank">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://www.pinterest.com/literacygb/" target="_blank">
                            <i class="fab fa-pinterest fa-2x"></i>
                        </a>
                        <a href="https://www.instagram.com/explore/tags/literacygreenbay/" target="_blank">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UC_9ncubaoAkNJyUkD5Z7N8g" target="_blank">
                            <i class="fab fa-youtube fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className="column has-text-centered">
                    <h1>Office Hours</h1>
                    <p>
                        Mondays & Tuesdays 8:30AM - 6PM<br/>
                        Wednesdays & Thursdays 8:30AM - 5PM<br/>
                        Fridays 8:30AM - 12PM<br/>
                        Closed Weekends
                    </p>
                </div>
            </div>
        </div>
        
        <div className="content has-text-centered">
            <p>Website developed by <a href="https://ikedoud.com">Isaac 'Ike' Doud</a>.<br/> © {(new Date()).getFullYear()} Literacy Green Bay</p>
        </div>
    </footer>
)

export default Footer;