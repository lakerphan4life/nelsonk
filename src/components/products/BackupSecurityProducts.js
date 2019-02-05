import React from 'react'

import productimage from '../../assets/images/BackupSecurity.png'



const BackupSecurityProducts = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="Monitors" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>Backup &amp; Security</h2>
				</header>
				<h3 className="text-black">The best data protection and reliable storage options.</h3>
				<ul className="actions">
					<li><a href='#' target="_blank">BACKUP &amp; SECURITY SOLUTIONS &rarr;</a></li>
				</ul>
			</div>
		</div>
	</section>

)

export default BackupSecurityProducts