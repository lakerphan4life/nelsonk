import React from 'react'
import { Link } from 'gatsby'

import productimage from '../../assets/images/optiplex-3060-small-form.png'

const Optiplex3060Small = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Dell OptiPlex 3060 Small Form Factor" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Dell OptiPlex 3060 Small Form Factor</h2>
				</header>
				<h3 className="text-black">Critical to your success</h3>
				<p>
				Essential business desktops with best-in-class versatility, security and manageability in a space-saving design. With 8th gen Intel® Processors.<br /><br />
					<ul>
						
						<li>
						Intel Core™ i3-8100 (4 Cores/6MB/4T/3.6GHz/65W); supports Windows 10/Linux
						</li>

					</ul>
				</p>
				<ul className="actions">
					<li><Link to="#" className="button dark-btn">REQUEST INFORMATION</Link></li>
					<li><a target="_blank" href="https://www.dell.com/en-us/work/shop/cty/pdp/spd/optiplex-3060-desktop" className="button special">MORE DETAILS</a></li>
				</ul>
			</div>
		</div>
	</section>

)

export default Optiplex3060Small