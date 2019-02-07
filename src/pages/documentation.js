import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import DocumentationBanner from '../components/DocumentationBanner'
import HomeThinSection from '../components/HomeThinSection'



const Documentation = (props) => (
    <Layout>
        <Helmet
			title="Documentation and Business Process Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'Documentation and Business Process Solutions from Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'Documentation and Business Process Solutions from Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'Documentation and Business Process Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/documentation' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Documentation and Business Process Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'Documentation and Business Process Solutions from Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/documentation' }
			]}
		>
        </Helmet>

        <DocumentationBanner />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
					<p className="text-center" style={{padding: `2em 0`}}>
                    Increase time within your management team and availability though structured documentation across company roles and responsibilities.  Use restricted organization to allow others to implement some of the most important responsibilities and task that some of the highest paid employees always end up doing.  Bridging the gaps of continuity within an organization, we ensure to utilize a system that stores detailed workflows, policies, and processes to overcome lack of communication between teams and organizations.  This has a substantial impact on the relationships our client has with their clients, with is a critical path to accelerating growth.  Overall this provides the ability to keep key assets and processes in a single location.  Strict guidelines laid permit access to those who can edit, or view-only the documents, documenting everything worth doing.  This method has proven to eliminate the average of 20% of time that is wasted using a standard system that most companies currently use. 

                    </p>

					<h2>What to expect from our Documentation &amp; Business Process service</h2>
                    <p>
						<ul>

                            <li>Documentation and logged events with resolutions</li>
                            <li>Improve and reconstruct company documentation of policies and processes. </li>
                            <li>Client portal and integrated ticketing system</li>
                            <li>Complete network visibility to pinpoint areas of action</li>
                            <li>System-wide network monitoring with intellectual alerting, including auto responses as well as auto resolutions. </li>
                            <li>Policy Profiles – Simplify updates using standardized, scalable profiles to approve, deny, or provide machine associations</li>


						</ul>
					</p>
                </div>
            </section>
        </div>
        <HomeThinSection />

    </Layout>
)

export default Documentation