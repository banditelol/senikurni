import React from 'react';
import '../assets/css/home.css';

import Card from '../components/Card';
import Porto1 from '../assets/img/porto1.png';
import { DribbbleFill, InstagramFill, LinkedInV2Fill, MediumFill, TwitterFill } from 'akar-icons';

const Home = () => {

	return (
		<div className="mx-8 mt-8" id="home">
			{/* <Navbar /> */}
			<div className="gallery">
				<div id="profile-card">
					<p className="text-xl font-bold">Hi 😃, welcome to </p>
					<p className="text-6xl font-serif">senikurni<span className="text-8xl text-green-500 leading-5">.</span><br/>design</p>
					<p className="pt-6">
					I'm <span className="text-red-700">Kurniawan Adhi</span> , UI/UX Designer and Illustrator.  I'm passionate about improving the lives of others through design.
					</p>
					<span className="flex justify-left mt-6">
						<InstagramFill className="inline-block text-primary mr-6 cursor-pointer" />
						<MediumFill className="inline-block text-primary mr-6 cursor-pointer" />
						<DribbbleFill className="inline-block text-primary mr-6 cursor-pointer" />
						<LinkedInV2Fill className="inline-block text-primary mr-6 cursor-pointer" />
						<TwitterFill className="inline-block text-primary mr-6 cursor-pointer" />
					</span>
				</div>
				<Card image={Porto1} alt="porto1"/>
				<Card image={Porto1} alt="porto1"/>
				<Card image={Porto1} alt="porto1"/>
				<Card image={Porto1} alt="porto1"/>
				<Card image={Porto1} alt="porto1"/>
				<Card image={Porto1} alt="porto1"/>
				<Card image={Porto1} alt="porto1"/>
				<Card image={Porto1} alt="porto1"/>
				
			</div>
		</div>
	);
}

export default Home;
