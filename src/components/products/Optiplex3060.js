import React from 'react'

import productimage from '../../assets/images/Optiplex3.png'




const Optiplex3060 = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Dell OptiPlex 3060 Micro" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>OptiPlex 3 Series</h2>
				</header>
				<h3 className="text-black">Serious productivity. Space-saving design.</h3>
				<p>				Business desktops with essential performance and manageability in space-saving designs. The micro takes up less surface area while still maintaining all the reliability you've come to expect. Full-power features in a space-saving design, more workers choose the OptiPlex micro than ever before. 
					
				</p>
				<ul className="actions">
					<li><a href='https://cdnnelsonkenterprise.netlify.com/files/Desktops_OptiPlex_3060_Spec_Sheet.pdf' target="_blank">VIEW SPECIFICATIONS &rarr;</a></li>
				</ul>
				<ul className="actions">
					<li><a href='https://cdnnelsonkenterprise.netlify.com/files/Desktops_OptiPlex_Product_Feature_Comparison.pdf' target="_blank">OPTIPLEX COMPARISON GUIDE &rarr;</a></li>
				</ul>
			</div>
		</div>
	</section>

)

export default Optiplex3060