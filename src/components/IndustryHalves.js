import React from 'react'
import { Link } from 'gatsby'





const IndustryHalves = (props) => (
    <section id="industry-section" className="">
		<div className="inner">

			<div className="text-black industry-header">
				<header className="text-black">
					<h2 className="text-black text-center h1">Services tailored to your industry needs</h2>
				</header>
				<p className="text-black">Nelson K Enterprise is the premier MSP provider in the Northwest. Over the years, Nelson K Enterprise has become a leader in the IT and MSP community, developing an ironclad process to maximize each client's potential for savings. Our first step is to evaluate your current infrastructure and find areas that will enable us to have the greatest impact on your growth, profitability, and efficacy.</p>
			</div>   

			<div className="grid-wrapper text-black" style={{ gridGap: `2.25em` }}>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Dental</h2>
					<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
					<ul className="actions">
							<li><Link to="dental" className="button dark-btn">Dental Solutions</Link></li>
					</ul>
				</div>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Medical</h2>
					<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
					<ul className="actions">
							<li><Link to="medical" className="button dark-btn">Medical Solutions</Link></li>
					</ul>
				</div>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Telecom</h2>
					<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
					<ul className="actions">
							<li><Link to="telecom" className="button dark-btn">Telecom Solutions</Link></li>
					</ul>
				</div>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Education</h2>
					<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
					<ul className="actions">
							<li><Link to="education" className="button dark-btn">Education Solutions</Link></li>
					</ul>
				</div>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Financial</h2>
					<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
					<ul className="actions">
							<li><Link to="financial" className="button dark-btn">Financial Solutions</Link></li>
					</ul>
				</div>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Small Businesses</h2>
					<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
					<ul className="actions">
							<li><Link to="small-business" className="button dark-btn">Small Business Solutions</Link></li>
					</ul>
				</div>
			</div>

		</div>
    </section>
)

export default IndustryHalves
