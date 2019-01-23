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
				<p>Intel Core™ i3-8100 (4 Cores/6MB/4T/3.6GHz/65W); supports Windows 10/Linux</p>
				<ul className="actions">
					<li><Link to="#" className="button dark-btn">REQUEST INFORMATION</Link></li>
				</ul>
			</div>
		</div>
	</section>

)

export default Optiplex3060Small