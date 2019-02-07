import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import AutomationBanner from '../components/AutomationBanner'
import HomeThinSection from '../components/HomeThinSection';



const Automation = (props) => (
    <Layout>
        <Helmet
			title="Automation Services - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'Automation services provided by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'Automation services provided by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'Automation Services - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/automation' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Automation Services - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'Automation services provided by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/automation' }
			]}
		>
        </Helmet>
		<AutomationBanner />
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
					<p className="text-center" style={{padding: `2em 0`}}>Utilizing an array of system wide reports allows us to provide on-going recommendations that support innovation, change, through continuity with business strategy that equate to future success.   Up to date applications with scripted device management and monitoring.
With our network monitoring that allows us to see all devices, this allows us to identify any risk and use security alerts that generate automated tickets and start the resolution process to fix the issue.  This is commonly utilized and appreciated by companies that come in to find issues that occurred over the weekend and start their Monday with an I.T crisis on their hands.  We perform 24-hour, 7-day a week monitoring which is one of the key elements that our clients appreciate.
</p>

					<h2>What to expect from our Automation service</h2>
                    <p>
						<ul>
						<li>Patch management</li>
<li>Updated applications across multiple devices</li>
<li>Network monitoring across all devices</li>
<li>Security alerts </li>
<li>Client portal and integrated ticketing system</li>
<li>Complete network visibility to pinpoint areas of action</li>
<li>System-wide network monitoring with intellectual alerting, including auto responses as well as auto resolutions. </li>
<li>Schedule a Scan &amp; Analysis of the network on a regular routine so you can automate updates</li>

						</ul>
					</p>
                </div>
            </section>
        </div>
        <HomeThinSection />

    </Layout>
)

export default Automation