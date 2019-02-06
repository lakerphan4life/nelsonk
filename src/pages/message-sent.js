import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const MessageSent = (props) => (
    <Layout>
        <Helmet>
            <title>Nelson K Enterprise - Message sent</title>
            <meta name="description" content="Nelson K Enterprise - Message sent" />
        </Helmet>

		<div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="">
                        <h1>Success!<br />Your message was sent!</h1>
                    </header>
					<p>Would you like to schedule a consultation or an on-site visit?</p>
					<a href="https://calendly.com/cnelson-84/15min/" target="_blank" className="text-center button dark-btn">SCHEDULE CONSULTATION</a>
				</div>
			</section>
		</div>

    </Layout>
)

export default MessageSent