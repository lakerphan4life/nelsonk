import React from 'react'


import banner from '../assets/images/medical-1600x697.png'


const IndustriesBanner = (props) => (
    <section id="banner" className="industry" style={{backgroundImage: `url(${banner})`}}>
        <div className="inner">
            <header className="major">
                <h1 className="text-black">Industries We Serve</h1>
            </header>
            <div className="content text-black">
                <p>Tailored solutions to help your business succeed in your industry</p>
            </div>
        </div>
    </section>
)

export default IndustriesBanner
