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
				<h3 className="text-black">Accelerator-Optimized, High-Density</h3>
				<p>The PowerEdge C4140 is an accelerator-optimized, 1U rack server designed for most demanding workloads. It is ideal for cognitive workloads such as artificial intelligence, machine learning, deep learning and for technical computing in industry verticals such as financial services, life sciences, High Performance Computing (HPC) and oil and gas exploration.<br /><br />
					<ul>

						<li>
						Meet the demands of cognitive computing workloads with a dense, accelerator-optimized 1U server supporting 4 GPUs and superior thermal efficiency
						</li>
						
						<li>
						Form factor 1U rack server
						</li>

					</ul>
				</p>
				<ul className="actions">
					<li><Link to="#" className="button dark-btn">REQUEST INFORMATION</Link></li>
					<li><a target="_blank" href="https://www.dell.com/en-us/work/shop/povw/poweredge-c4140" className="button special">MORE DETAILS</a></li>
				</ul>
			</div>
		</div>
	</section>

)

export default C4140