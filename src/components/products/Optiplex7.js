import React from 'react'

import productimage from '../../assets/images/Optiplex7.png'

import PDF from '../../assets/files/Desktops_OptiPlex_7060_Spec_Sheet(1).pdf'

import PDF2 from '../../assets/files/Desktops_OptiPlex_Product_Feature_Comparison.pdf'


const Optiplex7 = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Dell OptiPlex 7 Series" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Optiplex 7 Series</h2>
				</header>
				<h3 className="text-black">Powerful technology. Maximum performance.</h3>
				<p>
					Powerful, innovative form factors fully adapt and expand to your business needs
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

export default Optiplex7