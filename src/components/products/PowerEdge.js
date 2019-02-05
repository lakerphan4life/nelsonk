import React from 'react'

import productimage from '../../assets/images/PoweredgeServers.png'



const PowerEdge = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="PowerEdge Series Servers" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Servers</h2>
				</header>
				<h3 className="text-black">Designed to help you accomplish more.</h3>
				<ul className="actions">
					<li><a href='https://cdnnelsonkenterprise.netlify.com/files/PoweredgeServers.pdf' target="_blank">POWEREDGE SERVERS &rarr;</a></li>
				</ul>
			</div>
		</div>
	</section>

)

export default PowerEdge