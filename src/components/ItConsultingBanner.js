import React from 'react'

import pic1 from '../assets/images/itconsulting.png'


const ItConsultingBanner = (props) => (
    <section id="banner" className="style2" style={{ backgroundImage: `url(${pic1})`, backgroundPosition: `left center`}}>
        <div className="inner">
            <header className="major">
                <h1>I.T. Consulting Services</h1>
            </header>
            <div className="content">
                <p></p>
            </div>
        </div>
    </section>
)

export default ItConsultingBanner
