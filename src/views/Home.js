import React from 'react';
import '../assets/css/home.css';
import Spline from '../components/Spline';

import Navbar from '../components/Navbar';
import { DribbbleFill, InstagramFill, LinkedInV2Fill, MediumFill, TwitterFill } from 'akar-icons';

function Home() {
	return (
		<div className="h-screen" id="home">
			<Spline />
			<div className="absolute top-0 p-0 color-black w-full" id="content">
				<Navbar />
				<div className="profile">
					<p className="text-xl font-bold">Hi there &#128512;, I'm</p>
					<p className="text-4xl font-extrabold">Kurniawan Adhi</p>
					<p className="pt-6">
						I'm a UI/UX Designer and Illustrator. I'm passionate about improving the lives of others through design.
					</p>
					<p className="pt-3">Currently a freelancer based in Bandung, Indonesia.</p>
					<span className="flex justify-left mt-6">
						<InstagramFill className="inline-block text-primary mr-6 cursor-pointer" />
						<MediumFill className="inline-block text-primary mr-6 cursor-pointer" />
						<DribbbleFill className="inline-block text-primary mr-6 cursor-pointer" />
						<LinkedInV2Fill className="inline-block text-primary mr-6 cursor-pointer" />
						<TwitterFill className="inline-block text-primary mr-6 cursor-pointer" />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Home;
