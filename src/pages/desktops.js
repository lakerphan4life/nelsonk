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

import banner from '../assets/images/Optiplex5.png'



const Desktops = (props) => (
    <Layout>
        <Helmet
			title="Desktop Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'Desktops from Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'Desktops from Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'Desktop Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/desktops' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Desktop Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'Desktops from Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/desktops' }
			]}
		>
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