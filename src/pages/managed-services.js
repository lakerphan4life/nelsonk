import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ManagedServicesBanner from '../components/ManagedServicesBanner'
import NewServicesThirds from '../components/NewServicesThirds'
import ServicesIntro from '../components/ServicesIntro'



const ManagedServices = (props) => (
    <Layout>
        <Helmet>
            <title>Managed Services - Nelson K Enterprise</title>
            <meta name="description" content="Managed Services offered by Nelson K Enterprise include I.T. Consulting, Infratructure, Support &amp; Managed Services, Automation Services, and more" />
        </Helmet>

        <ManagedServicesBanner />

        <div id="main">
            
            <ServicesIntro />
            <NewServicesThirds />


           
        </div>

        

    </Layout>
)

export default ManagedServices