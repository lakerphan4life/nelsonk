import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import DocumentationBanner from '../components/DocumentationBanner'
import HomeThinSection from '../components/HomeThinSection'


import optiplex from '../assets/images/desktop-optiplex-3060.jpeg'


const Documentation = (props) => (
    <Layout>
        <Helmet>
            <title>Documentation Services - Nelson K Enterprise</title>
            <meta name="description" content="Documentation Services offered by Nelson K Enterprise" />
        </Helmet>

        <DocumentationBanner />

        <div id="main">
            <section id="two" className="spotlights">
				<section>
                    <Link to="#" className="image">
                        <img src={optiplex} alt="" />
                    </Link>
                    <div className="content bg-white">
                        <div className="inner">
                            <header className="major">
                                <h2>Dell OptiPlex 3060 Micro</h2>
                            </header>
                            <p>The micro takes up less surface area while still maintaining all the reliability you've come to expect. Full-power features in a space-saving design, more workers choose the OptiPlex micro than ever before.</p>
                            <ul className="actions">
                                <li><Link to="#" className="button dark-btn">REQUEST INFORMATION</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                
            </section>

			<HomeThinSection />
        </div>

    </Layout>
)

export default Documentation