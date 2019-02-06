import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HardwareBanner from '../components/HardwareBanner'

import BackupSecurityProducts from '../components/products/BackupSecurityProducts'
import Monitor from '../components/products/Monitor'
import DesktopProduct from '../components/products/DesktopProduct'
import PowerEdge from '../components/products/PowerEdge'


const Hardware = (props) => (
    
    <Layout>
        <Helmet>
            <title>Hardware Solutions - Nelson K Enterprise</title>
            <meta name="description" content="Hardware solutions offered by Nelson K Enterprise" />
        </Helmet>
        
        <HardwareBanner />

        <div id="main" style={{backgroundColor: `#ffffff`}}>
            <section id="" className="products" style={{padding: `0`}}>

            <DesktopProduct />	
            <PowerEdge />
            <Monitor />
            <BackupSecurityProducts />
            </section>

            <section>
            <div className="content">
                <div className="inner">
                    <p></p>
                </div>
            </div>
            </section>

            <section id="home-section" className="flex three-col">
                <div className="inner" style={{ paddingBottom: `0`}}>
                    <header className="">
                        <h3 className="text-black text-center h1">Looking for something else?</h3>
                    </header>
                    <p className="text-black">Our online catalog is just a glimpse of hardware products we work with, so please contact us if you require certain hardware for your infrastructure.</p>
                </div>       
            </section>

        </div>
        

    </Layout>
)

export default Hardware