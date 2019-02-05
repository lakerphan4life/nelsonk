import React from 'react'

import productimage from '../../assets/images/XE3.png'

import PDF from '../../assets/files/Desktops_Dell_Precision_Timeline.pdf'


const Xe3 = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Dell Optiplex XE3 Series" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Optiplex XE3 Series</h2>
				</header>
				<h3 className="text-black">High performance, industrial-grade desktop with long-term stability</h3>
				<p>
				Intel® 8th generation processors allow for the fastest OptiPlex yet. Next gen discrete graphics, robust SSD and hard drive options power productivity.<br></br><br></br>

				Sustainably built with premium materials, it is designed for high heat tolerance up to 45º C ambient. XE3 is Marine certified and stands up to rigoroustesting including MIL-STD 810G.
					
				</p>
				<ul className="actions">
					<li><a href='https://cdnnelsonkenterprise.netlify.com/files/Desktops_OptiPlex_XE3_Spec_Sheet(1).pdf' target="_blank">VIEW SPECIFICATIONS &rarr;</a></li>
				</ul>
			</div>
		</div>
	</section>

)

export default Xe3