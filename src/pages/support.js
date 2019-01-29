import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SupportBanner from '../components/SupportBanner'
import HomeThinSection from '../components/HomeThinSection';



const Support = (props) => (
    <Layout>
        <Helmet>
            <title>Support &amp; Managed Services - Nelson K Enterprise</title>
            <meta name="description" content="Support &amp; Managed Services by Nelson K Enterprise" />
        </Helmet>
		<SupportBanner />
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
					<p className="text-center" style={{padding: `2em 0 0`}}>
					Customizable reports indicating details of on-going services and actions take.  Utilizing out help desk and 24/7 live monitoring we are proactively identifying issues by preventing business interruptions by quickly resolving them before they have a chance to negatively impact the business. Our services are design to allow businesses to focus on the big picture, business development and strategic planning.  We do this by taking action, preventively issues that need attention, identifying and reporting future concerns and immediate solutions while remediating the issue before the business is disrupted by any type of disturbance.  We do not have a one size fits all model and under stand that every business has different needs. 
					<br />
					<br />
We use are custom based solutions that directly support their business needs and increase performance, decrease overhead and monthly cost, and capture lost revenue with SLA’s, extended warranties, offering hardware that best suites business daily operations.  With the automated tool that allow us to identify and successfully fix any issues before they become disrupting, automated tickets are created and documented that allow us to provide a detailed report of what we have done to maintain optimal health of your network.

					</p>

					<h2>What to expect from our Support &amp; Managed services</h2>
                    <p>
						<ul>
							<li>Provide the highest quality of hardware and Software</li>
							<li>Extended warranty on all Hardware</li>
							<li>Effective solutions &amp; business strategy</li>
							<li>Security alerts</li>
							<li>Expectations and SLAs</li>
							<li>Help Desk 24/7 -365 days per year</li>
							<li>24/7 monitoring and client access utilizing client portals </li>
							<li>Live 24-hour monitoring of all end points</li>
							<li>Preventive remote actions improve business efficiency</li>
							<li>Scalability allowing unlimited growth with additional devices</li>
						</ul>
					</p>
                </div>
            </section>
        </div>
        <HomeThinSection />

    </Layout>
)

export default Support