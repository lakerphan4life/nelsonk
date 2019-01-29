import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomeBanner from '../components/HomeBanner'
import HomeIntro from '../components/HomeIntro'
import HomeThinSection from '../components/HomeThinSection'

import pic01 from '../assets/images/servers1760x990.png'
import pic02 from '../assets/images/medical-1600x697.png'
import pic03 from '../assets/images/electric-bg-big.png'
import pic04 from '../assets/images/managed-banner.png'




class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Nelson K Enterprise | The premier IT Management firm in the Northwest"
                    meta={[
                        { name: 'description', content: 'Nelson K Enterprise is the premier IT Management firm in the Northwest' },
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
                            <Link to="/managed-services" className="link primary"></Link>
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
                            <Link to="/managed-services" className="link primary"></Link>
                        </article>
                        
                        <article style={{backgroundImage: `url(${pic03})`, backgroundPosition: `right`}}>
                            <header className="major">
                                <h3>About Us</h3>
                                <p>See how Nelson K Enterprise rose to become a leading MSP provider</p>
                            </header>
                            <Link to="/managed-services" className="link primary"></Link>
                        </article>
                    </section>

                </div>
                <HomeThinSection />

            </Layout>
            
        )
    }
}

export default HomeIndex