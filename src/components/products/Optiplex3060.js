import React from 'react'
import { Link } from 'gatsby'

import productimage from '../../assets/images/desktop-optiplex-3060.jpeg'

const Optiplex3060 = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Dell OptiPlex 3060 Micro" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Dell OptiPlex 3060 Micro</h2>
				</header>
				<h3 className="text-black">Serious productivity. Space-saving design.</h3>
				<p>The micro takes up less surface area while still maintaining all the reliability you've come to expect. Full-power features in a space-saving design, more workers choose the OptiPlex micro than ever before.<br /><br />
					<ul>
						
						<li>
						Intel Core™ i5-8500T (6 Cores/9MB/6T/up to 3.5GHz/35W); supports Windows 10/Linux						
						</li>

					</ul>
					
					
				</p>
				<ul className="actions">
					<li><Link to="#" className="button dark-btn">REQUEST INFORMATION</Link></li>
				</ul>
			</div>
		</div>
	</section>

)

export default Optiplex3060