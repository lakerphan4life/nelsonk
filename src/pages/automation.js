import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import AutomationBanner from '../components/AutomationBanner'
import HomeThinSection from '../components/HomeThinSection';



const Automation = (props) => (
    <Layout>
        <Helmet>
            <title>Automation Services - Nelson K Enterprise</title>
            <meta name="description" content="Automation Services by Nelson K Enterprise" />
        </Helmet>
		<AutomationBanner />
        <div id="main" className="">
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