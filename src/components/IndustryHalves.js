import React from 'react'

import healthcare from '../assets/files/Industries_Dell_Client_Solutions_for_Healthcare_Brochure.pdf'
import financial from '../assets/files/Industries_Dell_Client_Solutions_for_Financial_Services.pdf'
import government from '../assets/files/Industries_Dell_Client_Solutions_for_State_and_Local_Government_Brochure.pdf'
import retail from '../assets/files/Industries_dell_client_solutions_for_retail_brochure.pdf'
import construction from '../assets/files/Industries_MFG_ENG_Industry_Brochure.pdf'




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
						<li><a href={healthcare} target="_blank">VIEW DETAILS &rarr;</a></li>
					</ul>
				</div>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Healthcare</h2>
					<p>We are a premier MSP for businesses that need to maintain HIPPA compliance. Through innovative technology, Nelson K Enterprise can help healthcare providers dramatically improve their efficiency</p>
					<ul className="actions">
						<li><a href={healthcare} target="_blank">VIEW DETAILS &rarr;</a></li>
					</ul>
				</div>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Construction</h2>
					<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
					<ul className="actions">
						<li><a href="../static/files/Industries_MFG_ENG_Industry_Brochure.pdf" target="_blank">VIEW DETAILS &rarr;</a></li>
					</ul>
				</div>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Government</h2>
					<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
					<ul className="actions">
						<li><a href={government} target="_blank">VIEW DETAILS &rarr;</a></li>
					</ul>
				</div>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Financial</h2>
					<p>Introducing, next-level market intelligence. As your MSP provider, Nelson K Enterprise brings you the best technology to help traders and sales makers excel in their fast-paced fields. Learn more by going to the link below.</p>
					<ul className="actions">
						<li><a href={financial} target="_blank">VIEW DETAILS &rarr;</a></li>
					</ul>
				</div>
				<div className="col-6">
					<h2 className='text-black montserrat-thick'>Retail</h2>
					<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
					<ul className="actions">
						<li><a href={retail} target="_blank">VIEW DETAILS &rarr;</a></li>
					</ul>
				</div>
			</div>

		</div>
    </section>
)

export default IndustryHalves
