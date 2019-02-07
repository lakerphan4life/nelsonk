import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ContactBanner from '../components/ContactBanner'


const Contact = (props) => (
    <Layout>
        <Helmet
			title="Contact - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'Contact Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'Contact Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'Contact - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/contact' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Contact - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'Contact Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/contact' }
			]}
		>
        </Helmet>

		<div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="">
                        <h1>Contact Us</h1>
                    </header>
				</div>
			</section>
		</div>

    </Layout>
)

export default Contact