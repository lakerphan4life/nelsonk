import React from 'react'

import pic1 from '../assets/images/infrastructure.jpg'


const InfrastructureBanner = (props) => (
    <section id="banner" className="style2" style={{ backgroundImage: `url(${pic1})`}}>
        <div className="inner">
            <header className="major">
                <h1>Infrastructure</h1>
            </header>
            <div className="content">
                <p></p>
            </div>
        </div>
    </section>
)

export default InfrastructureBanner
