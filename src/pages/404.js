import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>Sorry, this page doesn't exist.</h1>
                <a href='/'>Back to homepage &rarr;</a>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
