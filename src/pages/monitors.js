import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomeThinSection from '../components/HomeThinSection'

// PRODUCTS
import Monitor from '../components/products/Monitor'


import banner from '../assets/images/servers1760x990.png'



const Monitors = (props) => (
    <Layout>
        <Helmet>
            <title>Monitors - Nelson K Enterprise</title>
            <meta name="description" content="Backup &amp; Monitors offered by Nelson K Enterprise" />
        </Helmet>


        <div id="main" style={{background: `#ffffff !important`}}>

			<section id="banner" className="style2" style={{backgroundImage: `url(${banner})`}}>
				<div className="inner">
					<header className="major">
						<h1>Monitors</h1>
					</header>
				</div>
			</section>

            <section id="" className="products">
				
                <Monitor />

            </section>

			<HomeThinSection />
        </div>
        

    </Layout>
)

export default Monitors