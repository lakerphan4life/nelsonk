import React from 'react'
import { Link } from 'gatsby'

import pic01 from '../assets/images/servers1760x990.png'
import pic02 from '../assets/images/medical-1600x697.png'
import pic03 from '../assets/images/vector.png'
import pic04 from '../assets/images/managed-banner.png'


const ServiceHalves = (props) => (
	<section id="two" className="spotlights">
		
		<section>
			<Link to="#" className="image">
				<img src={pic01} alt="" />
			</Link>
			<div className="content bg-white">
				<div className="inner">
					<header className="major">
						<h3>Looking for hardware solutions?</h3>
					</header>
					<p>We are a specialized distributor of Dell products, with access to a vast network of hardware solutions for businesses of any size</p>
					<ul className="actions">
						<li><Link to="hardware" className="button dark-btn">Hardware Solutions</Link></li>
					</ul>
				</div>
			</div>
		</section>

		<section>
			<Link to="#" className="image">
				<img src={pic01} alt="" />
			</Link>
			<div className="content bg-white">
				<div className="inner">
					<header className="major">
						<h3>Looking for hardware solutions?</h3>
					</header>
					<p>We are a specialized distributor of Dell products, with access to a vast network of hardware solutions for businesses of any size</p>
					<ul className="actions">
						<li><Link to="hardware" className="button dark-btn">Hardware Solutions</Link></li>
					</ul>
				</div>
			</div>
		</section>

		<section>
			<Link to="#" className="image">
				<img src={pic01} alt="" />
			</Link>
			<div className="content bg-white">
				<div className="inner">
					<header className="major">
						<h3>Looking for hardware solutions?</h3>
					</header>
					<p>We are a specialized distributor of Dell products, with access to a vast network of hardware solutions for businesses of any size</p>
					<ul className="actions">
						<li><Link to="hardware" className="button dark-btn">Hardware Solutions</Link></li>
					</ul>
				</div>
			</div>
		</section>
	
	</section>
)

export default ServiceHalves
