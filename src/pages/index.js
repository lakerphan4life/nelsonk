import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomeBanner from '../components/HomeBanner'
import HomeIntro from '../components/HomeIntro'
import HomeThinSection from '../components/HomeThinSection'

import pic01 from '../assets/images/hardwarebanner-2.png'
import pic02 from '../assets/images/medical-1600x697.png'
import pic03 from '../assets/images/electric-bg-big.png'
import pic04 from '../assets/images/managed-banner.png'




class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Nelson K Enterprise | The premier MSP and IT Management company in the Pacific Northwest"
                    meta={[
                        { name: 'description', content: 'Nelson K Enterprise is the premier MSP and IT Management firm in the Pacific Northwest' },
                        { name: 'robots', content: 'all' },
                        { name: 'og:site_name', content: 'Nelson K Enterprise' },
                        { name: 'og:description', content: 'Nelson K Enterprise is the premier MSP and IT Management firm in the Pacific Northwest' },
                        { name: 'og:title', content: 'Nelson K Enterprise | The premier MSP and IT Management company in the Pacific Northwest' },
                        { name: 'og:url', content: 'https://www.nelsonkenterprise.com/' },
                        { name: 'og:type', content: 'website' },
                        { name: 'twitter:card', content: 'summary' },
                        { name: 'twitter:title', content: 'Nelson K Enterprise | The premier MSP and IT Management company in the Pacific Northwest' },
                        { name: 'twitter:description', content: 'Nelson K Enterprise is the premier MSP and IT Management firm in the Pacific Northwest' }
                    ]}
                    link= {[
                        {rel: 'canonical', href:'https://www.nelsonkenterprise.com/' }
                    ]}
                >
                </Helmet>

                <HomeBanner />

                <div id="main">
                    <HomeIntro />

                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Industries We Serve</h3>
                                <p>Learn about all the industries we cater to</p>
                            </header>
                            <Link to="/industries" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`, backgroundPosition: `right`}}>
                            <header className="major">
                                <h2>Managed Services</h2>
                                <p>Learn about all of our services &amp; solutions</p>
                            </header>
                            <Link to="/managed-services" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h2>Hardware Solutions</h2>
                                <p>Let our team get you the best hardware available today</p>
                            </header>
                            <Link to="/hardware" className="link primary"></Link>
                        </article>
                        
                        <article style={{backgroundImage: `url(${pic03})`, backgroundPosition: `right`}}>
                            <header className="major">
                                <h3>About Us</h3>
                                <p>See how Nelson K Enterprise rose to become a leading MSP provider</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                    </section>

                </div>
                <HomeThinSection />

            </Layout>
            
        )
    }
}

export default HomeIndex