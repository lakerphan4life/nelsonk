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
                        <h1>Success! Your message was sent. We will be in touch</h1>
                    </header>
				</div>
			</section>
		</div>

    </Layout>
)

export default MessageSent