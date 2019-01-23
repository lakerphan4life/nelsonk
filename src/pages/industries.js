import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import IndustriesBanner from '../components/IndustriesBanner'
import HomeThinSection from '../components/HomeThinSection';

// import pic08 from '../assets/images/pic08.jpg'
// import pic09 from '../assets/images/pic09.jpg'
// import pic10 from '../assets/images/pic10.jpg'

const Industries = (props) => (
    <Layout>
        <Helmet>
            <title>Industries We Serve - Nelson K Enterprise</title>
            <meta name="description" content="Industries served by Nelson K Enterprise" />
        </Helmet>

        <IndustriesBanner />
        <HomeThinSection />

    </Layout>
)

export default Industries