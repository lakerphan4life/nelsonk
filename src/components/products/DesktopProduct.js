import React from 'react'
import { Link } from 'gatsby'

import productimage from '../../assets/images/Optiplex7.png'



const DesktopProduct = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Monitors" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Desktops</h2>
				</header>
				<h3 className="text-black">Business desktops to help you accomplish more</h3>
				<ul className="actions">
						<li><Link to="desktops">VIEW ALL DESKTOPS &rarr;</Link></li>
					</ul>
			</div>
		</div>
	</section>

)

export default DesktopProduct