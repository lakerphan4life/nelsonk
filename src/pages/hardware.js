import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HardwareBanner from '../components/HardwareBanner'
import HomeThinSection from '../components/HomeThinSection'

import HardwareThirds from '../components/HardwareThirds'



const Hardware = (props) => (
    <Layout>
        <Helmet>
            <title>Hardware Solutions - Nelson K Enterprise</title>
            <meta name="description" content="Hardware solutions offered by Nelson K Enterprise" />
        </Helmet>

        <HardwareBanner />

        <div id="main" style={{background: `#ffffff !important`}}>
            <section id="" className="products" style={{padding: `0`}}>
				
                <HardwareThirds />

            </section>

        </div>
        

    </Layout>
)

export default Hardware