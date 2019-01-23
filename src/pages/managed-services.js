import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ManagedServicesBanner from '../components/ManagedServicesBanner'
import ServicesThirds from '../components/ServicesThirds'


import pic01 from '../assets/images/servers1760x990.png'


const ManagedServices = (props) => (
    <Layout>
        <Helmet>
            <title>Managed Services - Nelson K Enterprise</title>
            <meta name="description" content="Managed Services offered by Nelson K Enterprise include I.T. Consulting, Infratructure, Support &amp; Managed Services, Automation Services, and more" />
        </Helmet>

        <ManagedServicesBanner />

        <div id="main">

            <ServicesThirds />


            <section id="two" className="spotlights">
                <section>
                    <Link to="#" className="image">
                        <img src={pic01} alt="" />
                    </Link>
                    <div className="content bg-white">
                        <div className="inner">
                            <header className="major">
                                <h3>I.T. Consulting Services</h3>
                            </header>
                            <p>Add description for IT Services here</p>
                            <ul className="actions">
                                <li><Link to="#" className="button dark-btn">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                
            </section>
        </div>

    </Layout>
)

export default ManagedServices