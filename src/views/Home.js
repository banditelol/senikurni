import React from 'react';
import '../assets/css/home.css';
import Spline from '../components/Spline';

import Navbar from '../components/Navbar';

function Home() {
	return (
		<div className="h-screen" id="home">
			<Spline />
			<div className="absolute top-0 p-0 color-black w-full" id="content">
				<Navbar />
				<div className="profile">
					<p className="text-xl font-bold">Hi there &#128512;, I'm</p>
					<p className="text-4xl font-extrabold">Kurniawan Adhi</p>
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
