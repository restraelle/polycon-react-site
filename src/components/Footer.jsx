import React from "react";
import {Link} from "react-router-dom";
import GreenIcon from '../static/img/logo.png';
import ImageFooterLogo from '../static/img/footer-logo.png';

export default class Footer extends React.Component {
    render() {
        return (
            <div class="footer section">
                <div class="content">
                    <div class="desktop-fifth mobile-whole left footer__section-1">
                        <img src={ImageFooterLogo} style={{"max-width": "80px", paddingBottom: "5px"}} alt=""/>
                        <p class="no-margin">4700 Research Way</p>
                        <p>Lakeland, FL 33805</p>
                        {/* <p class="no-margin"><b>Phone</b></p>
                        <p class="no-margin">USA: 123.123.1234</p>
                        <p>MEX: 321.321.3210</p> */}
                        <p class="no-margin footer-links--email">administration@flpolycon.org</p>
                    </div>
                    <div class="desktop-fifth mobile-whole left footer__section-2">
                        <h5>Site Map</h5>
                        <ul class="footer-links" style={{"list-style": "none", "margin": "0", "text-decoration": "none"}}>

                            <li><Link to="/">Home</Link></li>
                            {/* <li><Link to="/tickets">Tickets</Link></li>
                            <li><Link to="/applications">Applications</Link></li>
                            <li><Link to="/information">Information</Link></li> */}
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div class="desktop-fifth mobile-whole left footer__section-3">
                        <p></p>
                    </div>
                    <div class="desktop-fifth mobile-whole left footer__section-4">
                        {/* <h5>FQ Global</h5>
                        <ul class="footer-links" style={{"list-style": "none", "margin": "0", "text-decoration": "none"}}>
                            <li><a href="">FQ USA</a></li>
                            <li><a href="">FQ Europe</a></li>
                            <li><a href="">FQ Canada</a></li>
                            <li><a href="">FQ Central America</a></li>
                            <li><a href="">FQ Asia</a></li>
                        </ul> */}
                        <p></p>
                    </div>
                    <div class="desktop-fifth mobile-whole left footer__section-5">
                        <div class="social-links social-links--footer">
                            <a href="https://www.facebook.com/flpolycon/" target="_blank" rel="noreferrer noopener"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/FLPolyCon" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/FLpolycon/" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram"></i></a>                    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}