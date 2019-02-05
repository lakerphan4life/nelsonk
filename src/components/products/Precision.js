import React from 'react'

import productimage from '../../assets/images/Desktops_Dell_Precision_Timeline.png'

const Precision = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Dell Precision Series" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Dell Precision Series</h2>
				</header>
				<h3 className="text-black">Dell Precision Workstations are #1 Worldwide</h3>
				<p>
				High performance, fully customizable, desktop computers - featuring powerful processors and an innovative design
				</p>
				
				<ul className="actions">
					<li><a href='https://cdnnelsonkenterprise.netlify.com/files/Desktops_Dell_Precision_Timeline.pdf' target="_blank">VIEW DETAILS &rarr;</a></li>
				</ul>
			</div>
		</div>
	</section>

)

export default Precision