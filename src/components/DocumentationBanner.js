import React from 'react'

import pic1 from '../assets/images/managed-banner.png'


const DocumentationBanner = (props) => (
    <section id="banner" className="style2" style={{ backgroundImage: `url(${pic1})`}}>
        <div className="inner">
            <header className="major">
                <h1>Documentation Services</h1>
            </header>
            <div className="content">
                <p></p>
            </div>
        </div>
    </section>
)

export default DocumentationBanner
