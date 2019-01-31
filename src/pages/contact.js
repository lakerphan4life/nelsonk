import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ContactBanner from '../components/ContactBanner'


const Contact = (props) => (
    <Layout>
        <Helmet>
            <title>Contact - Nelson K Enterprise</title>
            <meta name="description" content="Contact Nelson K Enterprise" />
        </Helmet>

		<div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="">
                        <h1>Contact Us</h1>
                    </header>
				</div>
			</section>
		</div>

    </Layout>
)

export default Contact