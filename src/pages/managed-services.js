import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ManagedServicesBanner from '../components/ManagedServicesBanner'
import NewServicesThirds from '../components/NewServicesThirds'
import ServicesIntro from '../components/ServicesIntro'



const ManagedServices = (props) => (
    <Layout>
        <Helmet
			title="Managed Services - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'Managed Services offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'Managed Services offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'Managed Services - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/managed-services' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Managed Services - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'Managed Services offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/managed-services' }
			]}
		>
        </Helmet>

        <ManagedServicesBanner />

        <div id="main">
            
            <ServicesIntro />
            <NewServicesThirds />


           
        </div>

        

    </Layout>
)

export default ManagedServices