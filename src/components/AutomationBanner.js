import React from 'react'

import banner from '../assets/images/automation.jpg'


const AutomationBanner = (props) => (
    <section id="banner" className="industry" style={{backgroundImage: `url(${banner})`}}>
        <div className="inner">
            <header className="major">
                <h1 className="text-black">Automation</h1>
            </header>
        </div>
    </section>
)

export default AutomationBanner
