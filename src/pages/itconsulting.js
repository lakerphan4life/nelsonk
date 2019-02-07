import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ItConsultingBanner from '../components/ItConsultingBanner'
import HomeThinSection from '../components/HomeThinSection';



const ItConsulting = (props) => (
    <Layout>
        <Helmet
			title="I.T. Consulting Service - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'I.T. Consulting Service offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'I.T. Consulting Service offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'I.T. Consulting Service - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/itconsulting' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'I.T. Consulting Service - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'I.T. Consulting Service offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/itconsulting' }
			]}
		>
        </Helmet>
		<ItConsultingBanner />
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
					<p className="text-center" style={{padding: `2em 0`}}>
                    Our goal is not just to work with every company but to work with companies who’s vision and future line up with the services we offer to ensuring that we will work together in continuity, achieving the same primary goal, which is how our success results in our clients success and satisfaction.  Are initial walk through allows us to determine where the shortfalls are and evaluate the greatest areas of opportunity and how and where we will have the greatest impact on growth, profitability, and increase efficacy.  Are deployment plan is structured to work with our clients to ensure deployment is successful without any disruption to daily operation.  

                    </p>

					<h2>What to expect from our I.T. Consulting service</h2>
                    <p>
						<ul>
                            <li>Free on-site consultation</li>
                            <li>Identify Infrastructure and service needs</li>
                            <li>Deployment Plan</li>
                            <li>ROI analysis</li>
                            <li>Security risk assessment</li>
                            <li>Effective solutions &amp; business strategies</li>
                            <li>Expectations and SLAs</li>
                            <li>Full service customized recommendations </li>

						</ul>
					</p>

                    <p className="text-center" style={{padding: `2em 0`}}>
                    Our first primary goal is to determine the amount of savings and ROI, clarify any question pertaining to what we expect from all of the clients we work with, and together, as a team, we will achieve the maximum number of benefits and drive the greatest increase of performance. Clients have the option of using their own portal that we have the encourage them to be set up and trained to use.  This is a simplified process when it comes to submitting special request and or report service issues. We utilize an automated business process that monitors each end point, with alerts caused by system issues automated to generate a ticket, document the issue, capture the health of the before the action was taken and after to determine if the correct action was taken to solve the issue.  This is documented in addition to number of tickets generated, repeating issues, and provide a clear picture and plan with necessary changes that need to be made to build a strong and continuous healthy network.  Our vision of success is by solving problems that arise without our clients having to inform us that there is any type of issue.  However, we provide a monthly report to allow clients to see the amount of time and cost our services save them on a monthly basis, most importantly allowing companies to operate without downtime, which is why we provide the option of free on-site visits with confidence that our model reduces and or eliminates the need for on-site visits or unexpected repairs. 

                    </p>
                </div>
            </section>
        </div>
        <HomeThinSection />

    </Layout>
)

export default ItConsulting