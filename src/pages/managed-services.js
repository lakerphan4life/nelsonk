import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ManagedServicesBanner from '../components/ManagedServicesBanner'
import ThreeColumn from '../components/ThreeColumn'


import pic01 from '../assets/images/servers1760x990.png'


const ManagedServices = (props) => (
    <Layout>
        <Helmet>
            <title>Managed Services - Nelson K Enterprise</title>
            <meta name="description" content="Managed Services offered by Nelson K Enterprise include I.T. Consulting, Infratructure, Support &amp; Managed Services, Automation Services, and more" />
        </Helmet>

        <ManagedServicesBanner />

        <div id="main">
            {/* <section id="one" style={{ background: `#ffffff`, color: `#000000` , border: `0`}}>
                <div className="inner">
                    <header className="major">
                        <h2 className="text-black">Services that can accomodate all your needs</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section> */}

            <ThreeColumn />


            <section id="two" className="spotlights">
                <section>
                    <Link to="#" className="image">
                        <img src={pic01} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>I.T. Consulting Services</h3>
                            </header>
                            <p>Add description for IT Services here</p>
                            <ul className="actions">
                                <li><Link to="#" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="#" className="image">
                        <img src={pic01} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Infrastructure</h3>
                            </header>
                            <p>Add description for Infrastructure</p>
                            <ul className="actions">
                                <li><Link to="#" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="#" className="image">
                        <img src={pic01} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Support and Managed Services</h3>
                            </header>
                            <p>Support and Managed Services</p>
                            <ul className="actions">
                                <li><Link to="#" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default ManagedServices