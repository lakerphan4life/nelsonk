import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomeThinSection from '../components/HomeThinSection'

// PRODUCTS
import BackupSecurityProducts from '../components/products/BackupSecurityProducts'


import banner from '../assets/images/servers1760x990.png'



const BackupSecurity = (props) => (
    <Layout>
        <Helmet
			title="Backup and Security Hardware Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest"
			meta={[
				{ name: 'description', content: 'Backup and Security Hardware Solutions provided by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'robots', content: 'all' },
				{ name: 'og:site_name', content: 'Nelson K Enterprise' },
				{ name: 'og:description', content: 'Backup and Security Hardware Solutions provided by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' },
				{ name: 'og:title', content: 'Backup and Security Hardware Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'og:url', content: 'https://www.nelsonkenterprise.com/backup-security' },
				{ name: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Backup and Security Hardware Solutions - Nelson K Enterprise | MSP and IT Management company in the Pacific Northwest' },
				{ name: 'twitter:description', content: 'Backup and Security Hardware Solutions provided by Nelson K Enterprise, the premier MSP and IT Management firm in the Pacific Northwest' }
			]}
			link= {[
				{ rel: 'canonical', href:'https://www.nelsonkenterprise.com/backup-security' }
			]}
		>
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