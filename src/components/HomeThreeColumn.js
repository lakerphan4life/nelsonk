import React from 'react'

import goals from '../assets/images/goals.png'
import savings from '../assets/images/savings.png'
import security from '../assets/images/cloud-security.png'



const HomeThreeColumn = (props) => (
    <section id="home-section" className="flex three-col">
                <div className="inner">
                    <header className="">
                        <h2 className="text-black text-center h1 raleway-thin">Growth, profitability, and increased efficacy</h2>
                    </header>
                    <p className="text-black">Nelson K Enterprise is the premier MSP provider in the Northwest. Over the years, Nelson K Enterprise has become a leader in the IT and MSP community, developing an ironclad process to maximize each client's potential for savings. Our first step is to evaluate your current infrastructure and find areas that will enable us to have the greatest impact on your growth, profitability, and efficacy.</p>
                </div>
        <div className="inner grid thirds">
            <div className="grid-item">
                <img src={security} style={{maxWidth: `85px`, margin: `auto`}} />
                <h2 className='uppercase raleway-thick'>Security</h2>
				<p>Tailored solutions to help your business succeed</p>
            </div>
			<div className="grid-item">
                <img src={goals} style={{maxWidth: `85px`, margin: `auto`}} />
                <h2 className='uppercase raleway-thick'>Targetu</h2>
				<p>Tailored solutions to help your business succeed</p>
            </div>
			<div className="grid-item">
                <img src={savings} style={{maxWidth: `85px`, margin: `auto`}} />
                <h2 className='uppercase raleway-thick'>Savings</h2>
				<p>Tailored solutions to help your business succeed</p>
            </div>
			<div className="grid-item">
                <h2 className='uppercase raleway-thick'>I.T. Consulting</h2>
				<p>Tailored solutions to help your business succeed</p>
            </div>
			<div className="grid-item">
                <h2 className='uppercase raleway-thick'>Managed Services</h2>
				<p>Tailored solutions to help your business succeed</p>
            </div>
			<div className="grid-item">
                <h2 className='uppercase raleway-thick'>Infrastructure</h2>
				<p>Tailored solutions to help your business succeed</p>
            </div>
        </div>
    </section>
)

export default HomeThreeColumn
