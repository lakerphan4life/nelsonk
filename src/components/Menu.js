import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/industries">Industries</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/managed-services">Services</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/hardware">Hardware</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About Us</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><Link onClick={props.onToggleMenu} className="button special fit" to="/contact">Contact Us</Link></li>
                <li><a onClick={props.onToggleMenu} href="#" className="button fit">Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
