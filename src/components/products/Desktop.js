import React from 'react'
import { Link } from 'gatsby'

import productimage from '../../assets/images/XE3.png'



const Desktop = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Dell Optiplex XE3 Series" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Desktops</h2>
				</header>
				<h3 className="text-black">High performance, industrial-grade desktops</h3>
				<ul className="actions">
                	<li><Link to="desktops">VIEW ALL DESKTOPS &rarr;</Link></li>
            	</ul>
			</div>
		</div>
	</section>

)

export default Desktop