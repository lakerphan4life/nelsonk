import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SecurityBanner from '../components/SecurityBanner'
import HomeThinSection from '../components/HomeThinSection';



const Security = (props) => (
    <Layout>
        <Helmet>
            <title>Security &amp; Disaster Recovery - Nelson K Enterprise</title>
            <meta name="description" content="Security &amp; Disaster Recovery Services by Nelson K Enterprise" />
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