import React from 'react'

import productimage from '../../assets/images/monitors.png'



const Monitor = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Monitors" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Monitors</h2>
				</header>
				<h3 className="text-black">Business monitors from the world's #1 brand</h3>
				<ul className="actions">
					<li><a href='#' target="_blank">DELL BUSINESS MONITORS &rarr;</a></li>
				</ul>
				<ul className="actions">
					<li><a href='#' target="_blank">SAMSUNG SMART SIGNAGE &rarr;</a></li>
				</ul>
			</div>
		</div>
	</section>

)

export default Monitor