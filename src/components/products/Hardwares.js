import React from 'react'
import { Link } from 'gatsby'

import productimage from '../../assets/images/XE3.png'



const Hardwares = (props) => (

	<section id="" className="products">
		<section>
			<div className="image">
				<img src={productimage} alt="Dell Optiplex XE3 Series" />
			</div>
{/* VIEW DESKTOPS */}
			<div className="content">
				<div className="inner">
					<header className="title">
						<h2>Desktops</h2>
					</header>
					<h3 className="text-black">High performance, industrial-grade desktops</h3>
					<ul className="actions">
						<li><Link to="desktops">VIEW DESKTOPS &rarr;</Link></li>
					</ul>
				</div>
			</div>
		</section>
{/* SERVERS */}
		<section>
			<div className="image">
				<img src={productimage} alt="Dell Optiplex XE3 Series" />
			</div>

			<div className="content">
				<div className="inner">
					<header className="title">
						<h2>Servers</h2>
					</header>
					<h3 className="text-black">High performance, industrial-grade desktops</h3>
					<ul className="actions">
						<li><Link to="servers">VIEW SERVERS &rarr;</Link></li>
					</ul>
				</div>
			</div>
		</section>

		{/* Monitors */}
		<section>
			<div className="image">
				<img src={productimage} alt="Dell Optiplex XE3 Series" />
			</div>

			<div className="content">
				<div className="inner">
					<header className="title">
						<h2>Monitors</h2>
					</header>
					<h3 className="text-black">High performance, industrial-grade desktops</h3>
					<ul className="actions">
						<li><Link to="servers">VIEW MONITORS &rarr;</Link></li>
					</ul>
				</div>
			</div>
		</section>

		{/* Network Switches */}
		<section>
			<div className="image">
				<img src={productimage} alt="Dell Optiplex XE3 Series" />
			</div>

			<div className="content">
				<div className="inner">
					<header className="title">
						<h2>Network Switches</h2>
					</header>
					<h3 className="text-black">High performance, industrial-grade desktops</h3>
					<ul className="actions">
						<li><Link to="servers">VIEW NETWORK SWITCHES &rarr;</Link></li>
					</ul>
				</div>
			</div>
		</section>

		{/* Security */}
		<section>
			<div className="image">
				<img src={productimage} alt="Dell Optiplex XE3 Series" />
			</div>

			<div className="content">
				<div className="inner">
					<header className="title">
						<h2>Firewall &amp; Security</h2>
					</header>
					<h3 className="text-black">High performance, industrial-grade desktops</h3>
					<ul className="actions">
						<li><Link to="servers">VIEW FIREWALL SECURITY &rarr;</Link></li>
					</ul>
				</div>
			</div>
		</section>




	</section>

)

export default Hardwares