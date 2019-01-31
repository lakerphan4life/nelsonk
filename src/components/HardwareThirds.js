import React from 'react'
import { Link } from 'gatsby'

import automation from '../assets/images/automation.jpg'
import documentation from '../assets/images/documentsearch.png'
import infrastructure from '../assets/images/infrastructure.jpg'
import itconsulting from '../assets/images/itconsulting.png'
import security from '../assets/images/shield2.png'
import support from '../assets/images/electric-bg-big.png'


const HardwareThirds = (props) => (

	<section id="one" className="tiles" style={{padding: `0`}}>
		<article className="article-33" style={{backgroundImage: `url(${automation})`, backgroundPosition: `right`}}>
			<header className="major">
				<h2>Desktops</h2>
				
			</header>
			<Link to="/desktops" className="link primary"></Link>
		</article>
		<article className="article-33" style={{backgroundImage: `url(${documentation})`}}>
			<header className="major">
				<h2>Servers</h2>
				
			</header>
			<Link to="/servers" className="link primary"></Link>
		</article>
		<article className="article-33" style={{backgroundImage: `url(${infrastructure})`}}>
			<header className="major">
				<h3>Firewall &amp; Security</h3>
				
			</header>
			<Link to="/firewall-security" className="link primary"></Link>
		</article>
		<article className="article-33" style={{backgroundImage: `url(${itconsulting})`, backgroundPosition: `right`}}>
			<header className="major">
				<h3>Monitors</h3>
				
			</header>
			<Link to="/monitors" className="link primary"></Link>
		</article>
		<article className="article-33" style={{backgroundImage: `url(${security})`}}>
			<header className="major">
				<h3>Network Switches</h3>
				
			</header>
			<Link to="/switches" className="link primary"></Link>
		</article>
		<article className="article-33" style={{backgroundImage: `url(${security})`}}>
			<header className="major">
				<h3>Accessories</h3>
			</header>
			<Link to="/switches" className="link primary"></Link>
		</article>
		
	</section>
)

export default HardwareThirds
