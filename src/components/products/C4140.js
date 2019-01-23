import React from 'react'
import { Link } from 'gatsby'

import productimage from '../../assets/images/C4140.jpeg'

const C4140 = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="PowerEdge C4140 Server" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>PowerEdge C4140 Server</h2>
				</header>
				<p>
					<ul>
						<li>
						Powerful, versatile, and expandable
						</li>

						<li>
						Powerful and versatile 1-socket rack server for small and medium businesses (SMB) and remote office/branch office (ROBO)
						</li>
						
						<li>
						Form factor 1U rack server
						</li>

					</ul>
				</p>
				<ul className="actions">
					<li><Link to="#" className="button dark-btn">REQUEST INFORMATION</Link></li>
					<li><a target="_blank" href="https://www.dell.com/en-us/work/shop/povw/poweredge-t440" className="button special">MORE DETAILS</a></li>
				</ul>
			</div>
		</div>
	</section>

)

export default C4140