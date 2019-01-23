import React from 'react'
import { Link } from 'gatsby'


import security from '../assets/images/cloud-security.svg'
import server from '../assets/images/server.svg'
import automation from '../assets/images/automation.svg'
import documentation from '../assets/images/documentation.svg'
import support from '../assets/images/support.svg'
import it from '../assets/images/itconsult.svg'



const IndustriesThirds = (props) => (
    <section id="industry-section" className="flex three-col">
                <div className="inner" style={{ paddingBottom: `0`}}>
                    <header className="">
                        <h2 className="text-black text-center h1">Services tailored to your industry needs</h2>
                    </header>
                    <p className="text-black">Nelson K Enterprise is the premier MSP provider in the Northwest. Over the years, Nelson K Enterprise has become a leader in the IT and MSP community, developing an ironclad process to maximize each client's potential for savings. Our first step is to evaluate your current infrastructure and find areas that will enable us to have the greatest impact on your growth, profitability, and efficacy.</p>
                </div>             
        <div className="inner grid thirds">
        <Link to="hardware"><div className="grid-item">
                {/* <img src={automation} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise automation' /> */}
                <h2 className='montserrat-thick'>Dental</h2>
				<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
            </div></Link>
            <Link to="hardware"><div className="grid-item">
            {/* <img src={documentation} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise documentation' /> */}
                <h2 className='montserrat-thick'>Medical</h2>
				<p>We are a premier MSP for businesses that need to maintain HIPPA compliance</p>
            </div></Link>
			<Link to="hardware"><div className="grid-item">
                {/* <img src={server} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise infrastructure' /> */}
                <h2 className='montserrat-thick'>Telecom</h2>
				<p>I.T. Infrastructure, designed with the future in mind</p>
            </div></Link>
            <Link to="hardware"><div className="grid-item">
                {/* <img src={it} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise it consulting' /> */}
                <h2 className='montserrat-thick'>Education</h2>
				<p>I.T. solutions customized for your business</p>
            </div></Link>
			<Link to="hardware"><div className="grid-item">
                {/* <img src={security} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise it managed services' /> */}
                <h2 className='montserrat-thick'>Financial</h2>
				<p>Security protocols that deliver peace of mind</p>
            </div></Link>
			<Link to="hardware"><div className="grid-item">
                {/* <img src={support} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise it security' /> */}
                <h2 className='montserrat-thick'>Small-Medium Businesses</h2>
				<p>Support and managed services for small to medium businesses in any industry</p>
            </div></Link>
        </div>
    </section>
)

export default IndustriesThirds
