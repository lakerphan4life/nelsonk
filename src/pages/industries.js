import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import IndustriesBanner from '../components/IndustriesBanner'
import HomeThinSection from '../components/HomeThinSection';
import IndustryHalves from '../components/IndustryHalves';



const Industries = (props) => (
    <Layout>
        <Helmet
			title="Industries - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'Industries served by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'Industries served by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'Industries - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/industries' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Industries - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'Industries served by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/industries' }
			]}
		>
        </Helmet>

        <IndustriesBanner />
        <IndustryHalves />

        <HomeThinSection />

    </Layout>
)

export default Industries