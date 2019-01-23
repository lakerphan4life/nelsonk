import React from 'react'

// import goals from '../assets/images/goals.png'
import security from '../assets/images/cloud-security.svg'
import server from '../assets/images/server.svg'
import automation from '../assets/images/automation.svg'
import documentation from '../assets/images/documentation.svg'
import support from '../assets/images/support.svg'
import it from '../assets/images/itconsult.svg'



const ServicesThirds = (props) => (
    <section id="home-section" className="flex three-col">
                <div className="inner" style={{ paddingBottom: `0`}}>
                    <header className="">
                        <h2 className="text-black text-center h1">MSP Services tailored for your business</h2>
                    </header>
                    <p className="text-black">Nelson K Enterprise is the premier MSP provider in the Northwest. Over the years, Nelson K Enterprise has become a leader in the IT and MSP community, developing an ironclad process to maximize each client's potential for savings. Our first step is to evaluate your current infrastructure and find areas that will enable us to have the greatest impact on your growth, profitability, and efficacy.</p>
                </div>             
        <div className="inner grid thirds">
            <div className="grid-item">
                <img src={automation} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise automation' />
                <h2 className='montserrat-thick'>Automation</h2>
				<p>Automation solutions to streamline your business</p>
            </div>
            <div className="grid-item">
            <img src={documentation} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise documentation' />
                <h2 className='montserrat-thick'>Documentation</h2>
				<p>Tailored solutions to help your business succeed</p>
            </div>
			<div className="grid-item">
                <img src={server} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise infrastructure' />
                <h2 className='montserrat-thick'>Infrastructure</h2>
				<p>I.T. Infrastructure, designed with the future in mind</p>
            </div>
            <div className="grid-item">
                <img src={it} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise it consulting' />
                <h2 className='montserrat-thick'>I.T. Consulting</h2>
				<p>I.T. solutions customized for your business</p>
            </div>
			<div className="grid-item">
                <img src={security} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise it managed services' />
                <h2 className='montserrat-thick'>Security</h2>
				<p>Security protocols that deliver peace of mind</p>
            </div>
			<div className="grid-item">
                <img src={support} style={{maxHeight: `85px`, margin: `auto`}} alt='nelson k enterprise it security' />
                <h2 className='montserrat-thick'>Support</h2>
				<p>Support and managed services for your I.T. department</p>
            </div>
        </div>
    </section>
)

export default ServicesThirds
