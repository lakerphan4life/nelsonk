import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
// import HardwareBanner from '../components/HardwareBanner'
import HomeThinSection from '../components/HomeThinSection'

// PRODUCTS
import PowerEdge from '../components/products/PowerEdge'


import banner from '../assets/images/servers1760x990.png'



const Servers = (props) => (
    <Layout>
        <Helmet>
            <title>Servers - Nelson K Enterprise</title>
            <meta name="description" content="Servers offered by Nelson K Enterprise" />
        </Helmet>


        <div id="main" style={{background: `#ffffff !important`}}>

			<section id="banner" className="style2" style={{backgroundImage: `url(${banner})`}}>
				<div className="inner">
					<header className="major">
						<h1>Servers</h1>
					</header>
				</div>
			</section>

            <section id="" className="products">
				
                <PowerEdge />

            </section>

			<HomeThinSection />
        </div>
        

    </Layout>
)

export default Servers