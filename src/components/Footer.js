import React from 'react'
import { Link } from 'gatsby'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
            <li><span style={{ letterSpacing: `2px` }}>NELSON K ENTERPRISE</span></li>
            <br ></br>
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/industries">Industries</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/managed-services">Services</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/hardware">Hardware</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Contact Us</Link></li>
            </ul>
            <ul className="copyright">
                <li>&copy; <span style={{ letterSpacing: `2px`, fontSize: `0.8em` }}>NELSON K ENTERPRISE LLC, 2019</span></li>
                <li><span style={{ letterSpacing: `2px`, fontSize: `0.8em` }}><a href="https://imanhamidi.com?utm_source=client&utm_medium=nelsonk">DESIGNED BY IMAN</a></span></li>
            </ul>


        </div>
    </footer>
)

export default Footer
