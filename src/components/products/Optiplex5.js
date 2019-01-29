import React from 'react'

import productimage from '../../assets/images/Optiplex5.png'

import PDF from '../../assets/files/Desktops_OptiPlex_5060_Spec_Sheet.pdf'
import PDF2 from '../../assets/files/Desktops_OptiPlex_Product_Feature_Comparison.pdf'


const Optiplex5 = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Dell OptiPlex 5 Series" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Optiplex 5 Series</h2>
				</header>
				<h3 className="text-black">Compact design. Built for business.</h3>
				<p>
					Full performance business desktops deliver ultimate productivity in innovative, compact designs
				</p>
				<ul className="actions">
					<li><a href={PDF} target="_blank">VIEW SPECIFICATIONS &rarr;</a></li>
				</ul>
				<ul className="actions">
					<li><a href={PDF2} target="_blank">OPTIPLEX COMPARISON GUIDE &rarr;</a></li>
				</ul>
			</div>
		</div>
	</section>

)

export default Optiplex5