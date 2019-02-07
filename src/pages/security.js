import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SecurityBanner from '../components/SecurityBanner'
import HomeThinSection from '../components/HomeThinSection';



const Security = (props) => (
    <Layout>
        <Helmet
			title="Security and Disaster Relief Services - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'Security and Disaster Relief Services offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'Security and Disaster Relief Services offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'Security and Disaster Relief Services - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/security' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Security and Disaster Relief Services - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'Security and Disaster Relief Services offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/security' }
			]}
		>
        </Helmet>
		<SecurityBanner />
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
					<p className="text-center" style={{padding: `2em 0`}}>
					Considering our client’s industry and tools that will acquire the greatest success, we offer both cloud based and on-premise based systems, taking advantage and utilizing the benefits of both systems and ensuring the greatest potential outcome.  We also provide clients the ability to use portable devices and or remote locations, accessing company documents, client files, patient files, or any other type of protected information, storing it in our enterprise storage sharing solution that is HIPAA and SOC 2 compliant.  This solution not only improves continuity by allowing instant access of files, contracts, patient files, documents and relevant information that is securely ready for those to access information through utilizing 256-bit encryption, 2 factor authentications, granted permissible access levels, with full audit trails to ensure compliance.

</p>

					<h2>What to expect from our Security &amp; Disaster Recovery service</h2>
                    <p>
						<ul>
							<li>On-premise and cloud-based backup protection</li>
							<li>Anti-malware and antivirus services</li>
							<li>Network monitoring across all devices</li>
							<li>HIPAA &amp; SOC 2 compliant file sharing</li>
							<li>Compliant and secure file sharing across multiple devices</li>
							<li>Utilize and protect remote and portable devices utilized</li>


						</ul>
					</p>
                </div>
            </section>
        </div>
        <HomeThinSection />

    </Layout>
)

export default Security