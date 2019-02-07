import React from 'react'

import pic1 from '../assets/images/shield2.png'


const SecurityBanner = (props) => (
    <section id="banner" className="style2" style={{ backgroundImage: `url(${pic1})`, backgroundPosition: `center`}}>
        <div className="inner">
            <header className="major">
                <h1>Security &amp; Disaster Recovery</h1>
            </header>
        </div>
    </section>
)

export default SecurityBanner