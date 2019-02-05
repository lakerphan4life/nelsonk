import React from 'react'


import banner from '../assets/images/hardwarebanner-2.png'


const HardwareBanner = (props) => (
    <section id="banner" className="style2" style={{backgroundImage: `url(${banner})`}}>
        <div className="inner">
            <header className="major">
                <h1>Hardware Solutions</h1>
            </header>
            <div className="content">
                <p>Future proof hardware solutions for any business, big or small</p>
            </div>
        </div>
    </section>
)

export default HardwareBanner
