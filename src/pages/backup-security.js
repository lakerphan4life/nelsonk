import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomeThinSection from '../components/HomeThinSection'

// PRODUCTS
import BackupSecurityProducts from '../components/products/BackupSecurityProducts'


import banner from '../assets/images/servers1760x990.png'



const BackupSecurity = (props) => (
    <Layout>
        <Helmet>
            <title>Backup &amp; Security Solutions - Nelson K Enterprise</title>
            <meta name="description" content="Backup &amp; Security Solutions offered by Nelson K Enterprise" />
        </Helmet>


        <div id="main" style={{background: `#ffffff !important`}}>

			<section id="banner" className="style2" style={{backgroundImage: `url(${banner})`}}>
				<div className="inner">
					<header className="major">
						<h1>Backup &amp; Security Solutions</h1>
					</header>
				</div>
			</section>

            <section id="" className="products">
				
                <BackupSecurityProducts />

            </section>

			<HomeThinSection />
        </div>
        

    </Layout>
)

export default BackupSecurity