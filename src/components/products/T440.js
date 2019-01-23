import React from 'react'
import { Link } from 'gatsby'

import productimage from '../../assets/images/T440.jpeg'

const T440 = (props) => (

	<section>
		<div className="image">
			<img src={productimage} alt="PowerEdge T440 Tower Server" />
		</div>
		<div className="content">
			<div className="inner">
				<header className="title">
					<h2>PowerEdge T440 Tower Server</h2>
				</header>
				<p>
					<ul>
						<li>
						Powerful, expandable and quiet
						</li>

						<li>
						Drive a wide variety of office workloads with flexible performance and capacity in a worry-free infrastructure
						</li>
						
						<li>
						Up to two Intel® Xeon® Scalable processors, up to 14 cores per processor
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

export default T440