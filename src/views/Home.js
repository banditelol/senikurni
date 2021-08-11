import React from 'react';
import '../assets/css/home.css';
import Spline from '../components/Spline';

import Navbar from '../components/Navbar';

function Home() {
	return (
		<div className="h-screen">
			<Spline />
			<div className="absolute top-0 p-0 color-black w-full" id="content">
				<Navbar />
				<div className="profile">
					<h2>Hi there &#128512;, I'm</h2>
					<h1>Kurniawan Adhi</h1>
					<p>
						I'm a UI/UX Designer and Illustrator. I'm passionate about improving the lives of others through design.
					</p>
					<p>Currently a freelancer based in Bandung.</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
