import { DribbbleFill, InstagramFill, LinkedInV2Fill, MediumFill, TwitterFill } from 'akar-icons';

function Contact() {
	return (
		<div className="overflow-hidden pb-16" id="blog">
			<div className="p-16">
				<h1 className="text-2xl font-bold text-center">Let's Connect</h1>
				<p className="text-center text-sm m-8">
					Feel free to reach out for collaborations or just a friendly hello 😀<br></br>
					<span className="text-primary font-bold cursor-pointer">adhi.kurni@gmail.com</span>
				</p>
				<span className="flex justify-center">
					<InstagramFill className="inline-block text-primary mx-2 cursor-pointer" />
					<MediumFill className="inline-block text-primary mx-2 cursor-pointer" />
					<DribbbleFill className="inline-block text-primary mx-2 cursor-pointer" />
					<LinkedInV2Fill className="inline-block text-primary mx-2 cursor-pointer" />
					<TwitterFill className="inline-block text-primary mx-2 cursor-pointer" />
				</span>
			</div>
		</div>
	);
}

export default Contact;
