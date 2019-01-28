import React from 'react'

import banner from '../assets/images/electric-bg-big.png'


const SupportBanner = (props) => (
    <section id="banner" className="style2" style={{backgroundImage: `url(${banner})`}}>
        <div className="inner">
            <header className="major">
                <h1 className="text-white">Support Services</h1>
            </header>
        </div>
    </section>
)

export default SupportBanner
