import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import InfrastructureBanner from '../components/InfrastructureBanner'
import HomeThinSection from '../components/HomeThinSection'


const Infrastructure = (props) => (
    <Layout>
        <Helmet
			title="Infrastructure Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'Infrastructure Solutions offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'Infrastructure Solutions offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'Infrastructure Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/infrastructure' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Infrastructure Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'Infrastructure Solutions offered by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/infrastructure' }
			]}
		>
        </Helmet>

        <InfrastructureBanner />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
					<p className="text-center" style={{padding: `2em 0`}}>
                    We work together with our team, clients, and partners to establish the most effective way to improve the current network and improve the functionality and performance with their current infrastructure.  Our partners and vendors provide us with updated technology and available hardware and software to ensure that we can offer our clients with an infrastructure that is designed around their business needs. We also compare the cost when investing into new hardware and revamp their entire infrastructure and compare it to any potential risk involved by continuing to use their current network.  We additionally forecast potential repair cost, forecast what that looks like over the course of a three-year period, without forgetting the cost of labor for ourselves or other companies to come out and fix an issue or repairs that are needed with urgency when waiting for business interruptions occur before addressing preventable issues.
                    </p>

					<h2>What to expect from our Infrastructure service</h2>
                    <p>
						<ul>
							<li>Provide the highest quality of hardware and software</li>
							<li>Improve network performance</li>
							<li>Improve application performance</li>
							<li>Develop additional innovative network solutions</li>
							<li>Extended warranty on all Hardware</li>
							<li>Effective solutions &amp; business strategy</li>
							<li>Protection and security across all end-points</li>
							<li>Dental image solutions </li>

						</ul>
					</p>

					<p className="text-center" style={{padding: `2em 0`}}>
                    Ideally setting up our clients with new hardware, software, and even restructuring their facility with the most updated equipment, installed correctly, is where we have seen the most success with clients that have never needed us to come out to fix an issue on-site or disrupt their business sometimes over an entire 5-year period.  We not only serve hardware and software need but also look at documentation, policies, and how processes are managed, files are stored.  We offer an extended three-year warranty on all hardware that is purchased through us when using our services with free on-site service to maintain optimal infrastructure solutions, generated results, and are easily managed with a simplified, documented process.  As a full solution provider, we either provide the answers to service all your needs, or we have the resources to ensure that partner companies we have relationships with that are expects in their industry.  Additional experience in the dental industry and innovation, technology advancement in imaging over the years, we offer dental products that are unique to imaging with universal software that overcomes compatibility obstacles.

                    </p>


                </div>
            </section>
        </div>
        <HomeThinSection />

    </Layout>
)

export default Infrastructure