import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import IndustriesBanner from '../components/IndustriesBanner'
import HomeThinSection from '../components/HomeThinSection';
import IndustryHalves from '../components/IndustryHalves';



const Industries = (props) => (
    <Layout>
        <Helmet>
            <title>Industries We Serve - Nelson K Enterprise</title>
            <meta name="description" content="Industries served by Nelson K Enterprise" />
        </Helmet>

        <IndustriesBanner />
        <IndustryHalves />

        <HomeThinSection />

    </Layout>
)

export default Industries