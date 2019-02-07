import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import aboutimg from '../assets/images/aboutimg.jpg'

const About = (props) => (
    <Layout>
        <Helmet
			title="About Us - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'Learn about Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'Learn about Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'About Us - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/about' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'About Us - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'Learn about Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/about' }
			]}
		>
		</Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Us</h1>
                    </header>
                    <span className="image main"><img src={aboutimg} alt="" /></span>
                    <p>
						The owner of Nelson K Enterprise LLC worked for 9 years in the telecom industry working directly with clients such as AT&T, T-Mobile, Verizon, Dish, DirecTV, Toyota, Honda, and many others.  Managing an I.T team, 4 operation managers, a legal department, and three dialer managers.  He successfully managed performance at a call center that employed over 150 outbound reps at his local office, with 150 reps located in Honduras and the Philippines.<br /><br />
						<ul>
							<li>He developed a large degree of knowledge when it comes to setting up, operating cost, and KPI’s relevant to increasing performance.</li>
							<li>He has managed different call groups within the utilizing segmentation strategies to accomplish client initiatives.</li>
							<li>Held the responsibilities of writing policies required by specific fortune 100 clients as contract conditions, related directly to remediation of documentation and process. </li>
							<li>Adapting to change, becoming one of the greatest assets, using innovative strategies that created industry leading tends in compliance and client satisfaction.  This included protecting their data and their consumers.  This minimized liabilities and increased opportunity utilizing effective documentation processes. </li>
							<li>Calvin created what became evident that ongoing strategies and changes were constantly implemented to accommodate legal requirements pertaining to the following regulations:<br /><br />
								<ul>
									<li>HIPPA compliance</li>
									<li>ISO requirements</li>
									<li>PCI requirements</li>
									<li>CFPB rulings</li>
									<li>TCPA requirements</li>
								</ul>
							</li>
							<li>This type of management has directly transferred over to his current business and is described in the culture of Nelson K Enterprise LLC, managing multiple corporations.</li>
							<li>Managed Dental clients that directly related to additional relevance with on-going training and testing as a unique standard to that specific group along with client policies that are based off HIPAA compliance and documentation, to provide evidence of application that discoveries and employee violations were rectified and followed up on utilizing our remediation process, which was proven successful.</li>
							<li>ISO certifications, including agent and manager training on the importance of documentation with ISO and how to implement remediation pertaining to non-conformities.</li>
							<li>A thorough understanding of PCI compliance and policies included to what it takes to pass audits from given fortune 500 and fortune 100 clients.</li>
							<li>How to successfully pass security standards tested by corporate contracted hackers, determining where there is a deficiency in security measures. </li>
							<li>Calvin accomplished over dozens of awards from the company and additionally directly from his clients.  He has adapted his knowledge as an asset that directly applies to Nelson K Enterprise, learning the consequences of downtime, the cost associated and the importance of thorough and organized documentation and policies that are crucial to compliance as well as.</li>
							<li>Calvin has the knowledge it takes to know when and what types of new policies need to be written and implemented but also that address specific compliance issues. </li>
						</ul>
						Additionally, with background in the dental industry, working in the field previously for other MSP providers, it was obvious opportunity to serve as an MSP provider in the greater northwest adapting all the previous experience into an organization that strives to generate success and is excited to continue expanding and will continue to improve as a leader in the industry.
					</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default About