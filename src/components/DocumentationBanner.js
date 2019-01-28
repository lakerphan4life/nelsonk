import React from 'react'

import pic1 from '../assets/images/documentsearch.png'


const DocumentationBanner = (props) => (
    <section id="banner" className="style2" style={{ backgroundImage: `url(${pic1})`}}>
        <div className="inner">
            <header className="major">
                <h1>Documentation &amp; Business Processes</h1>
            </header>
        </div>
    </section>
)

export default DocumentationBanner
