import React from 'react'
import { Link } from 'gatsby'

import automation from '../assets/images/automation.jpg'
import documentation from '../assets/images/documentsearch.png'
import infrastructure from '../assets/images/infrastructure.jpg'
import itconsulting from '../assets/images/itconsulting.png'
import security from '../assets/images/shield2.png'
import support from '../assets/images/electric-bg-big.png'


const NewServicesThirds = (props) => (

	<section id="one" className="tiles">
		<article className="article-33" style={{backgroundImage: `url(${automation})`, backgroundPosition: `right`}}>
			<header className="major">
				<h2>Automation</h2>
				<p>Learn about all of our services &amp; solutions</p>
			</header>
			<Link to="/automation" className="link primary"></Link>
		</article>
		<article className="article-33" style={{backgroundImage: `url(${documentation})`}}>
			<header className="major">
				<h2>Documentation</h2>
				<p>Let our team get you the best hardware available today</p>
			</header>
			<Link to="/documentation" className="link primary"></Link>
		</article>
		<article className="article-33" style={{backgroundImage: `url(${infrastructure})`}}>
			<header className="major">
				<h3>Infrastructure</h3>
				<p>Learn about all the industries we cater to</p>
			</header>
			<Link to="/infrastructure" className="link primary"></Link>
		</article>
		<article className="article-33" style={{backgroundImage: `url(${itconsulting})`, backgroundPosition: `right`}}>
			<header className="major">
				<h3>I.T. Consulting</h3>
				<p>See how Nelson K Enterprise rose to become a leading MSP provider</p>
			</header>
			<Link to="/itconsulting" className="link primary"></Link>
		</article>
		<article className="article-33" style={{backgroundImage: `url(${security})`}}>
			<header className="major">
				<h3>Security</h3>
				<p>Learn about all the industries we cater to</p>
			</header>
			<Link to="/security" className="link primary"></Link>
		</article>
		<article className="article-33" style={{backgroundImage: `url(${support})`, backgroundPosition: `right`}}>
			<header className="major">
				<h3>Support</h3>
				<p>See how Nelson K Enterprise rose to become a leading MSP provider</p>
			</header>
			<Link to="/support" className="link primary"></Link>
		</article>
	</section>
)

export default NewServicesThirds
