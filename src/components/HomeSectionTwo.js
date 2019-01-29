import React from 'react'

import security from '../assets/images/cloud-security.svg'
import server from '../assets/images/server.svg'
import automation from '../assets/images/automation.svg'
import documentation from '../assets/images/documentation.svg'
import support from '../assets/images/support.svg'
import it from '../assets/images/itconsult.svg'



const HomeSectionTwo = (props) => (
    <section id="home-section" className="flex three-col">
		<div className='inner'>
                <div className="grid-wrapper">
                        
                        <div className="col-4">
                            <div className="grid-wrapper">
                                <div className="col-12">
                                    <header className="">
                                        <h2 className="text-black h3">Industry-specific I.T. Solutions</h2>
                                    </header>
                                </div>
                                <div className="col-12">
                                    <p className="text-black">As the premier MSP provider in the Northwest, Nelson K Enterprise caters to a wide range of industries. Our I.T. consulting packages and hardware solutions are tailored to meet specific indsutry needs.</p>
                                </div>
                            </div>
                        </div>   

                        <div className="col-4">
                            <div className="grid-wrapper">
                                <div className="col-12">
                                    <header className="">
                                        <h2 className="text-black h3">Tailored Services &amp; Solutions</h2>
                                    </header>
                                </div>
                                <div className="col-12">
                                    <p className="text-black">As the premier MSP provider in the Northwest, Nelson K Enterprise caters to a wide range of industries. Our I.T. consulting packages and hardware solutions are tailored to meet specific indsutry needs.</p>
                                </div>
                            </div>
                        </div>    
						<div className="col-4">
                            <div className="grid-wrapper">
                                <div className="col-12">
                                    <header className="">
                                        <h2 className="text-black h3">Top-to-Bottom Hardware Solutions</h2>
                                    </header>
                                </div>
                                <div className="col-12">
                                    <p className="text-black">As the premier MSP provider in the Northwest, Nelson K Enterprise caters to a wide range of industries. Our I.T. consulting packages and hardware solutions are tailored to meet specific indsutry needs.</p>
                                </div>
                            </div>
                        </div>      

                    </div>  
			</div>
        {/* <div className="inner grid thirds">
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
        </div> */}
    </section>
)

export default HomeSectionTwo
