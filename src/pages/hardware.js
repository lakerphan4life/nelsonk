import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HardwareBanner from '../components/HardwareBanner'
import HomeThinSection from '../components/HomeThinSection'

// PRODUCTS
import Optiplex3060 from '../components/products/Optiplex3060'
import Optiplex5 from '../components/products/Optiplex5'
import T440 from '../components/products/T440'
import R330 from '../components/products/R330'
import C4140 from '../components/products/C4140'


const Hardware = (props) => (
    <Layout>
        <Helmet>
            <title>Hardware Solutions - Nelson K Enterprise</title>
            <meta name="description" content="Hardware solutions offered by Nelson K Enterprise" />
        </Helmet>

        <HardwareBanner />

        <div id="main" style={{background: `#ffffff !important`}}>
            <section id="" className="products">
				
                <Optiplex3060 />
                <Optiplex5 />
                <T440 />
                <R330 />
                <C4140 />

            </section>

			<HomeThinSection />
        </div>
        

    </Layout>
)

export default Hardware