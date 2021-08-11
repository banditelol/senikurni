function Portofolio() {
	return (
		<div className="h-screen overflow-hidden">
			<div className="p-5">
				<h1 className="text-3xl font-bold text-center" id="portofolio">
					Works & Experience
				</h1>
			</div>
			<div className="flex justify-center p-2">
				<span className="cursor-pointer mx-10 text-sm text-white bg-primary py-2 px-4 rounded-full">All Works</span>
				<span className="cursor-pointer mx-10 text-sm text-primary py-2 px-4">UI/UX Design</span>
				<span className="cursor-pointer mx-10 text-sm text-primary py-2 px-4">Illustration</span>
				<span className="cursor-pointer mx-10 text-sm text-primary py-2 px-4">Branding & Logo</span>
				<span className="cursor-pointer mx-10 text-sm text-primary py-2 px-4">Graphic Design</span>
			</div>
			<div className="relative flex justify-center mt-32 h-full bg-secondary bg-clip-border"></div>
		</div>
	);
}

export default Portofolio;
