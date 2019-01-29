import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
// import HardwareBanner from '../components/HardwareBanner'
import HomeThinSection from '../components/HomeThinSection'

// PRODUCTS
import Optiplex3060 from '../components/products/Optiplex3060'
import Optiplex5 from '../components/products/Optiplex5'
import Optiplex7 from '../components/products/Optiplex7'
import Precision from '../components/products/Precision'
import Xe3 from '../components/products/Xe3'

import banner from '../assets/images/servers1760x990.png'



const Desktops = (props) => (
    <Layout>
        <Helmet>
            <title>Desktops - Nelson K Enterprise</title>
            <meta name="description" content="Desktops offered by Nelson K Enterprise" />
        </Helmet>


        <div id="main" style={{background: `#ffffff !important`}}>

			<section id="banner" className="style2" style={{backgroundImage: `url(${banner})`}}>
				<div className="inner">
					<header className="major">
						<h1>Desktops</h1>
					</header>
				</div>
			</section>

            <section id="" className="products">
				
                <Optiplex3060 />
                <Optiplex5 />
                <Optiplex7 />
                <Precision />
                <Xe3 />

            </section>

			<HomeThinSection />
        </div>
        

    </Layout>
)

export default Desktops