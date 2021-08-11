import '../assets/css/home.css';
import logo from '../assets/img/logo.png';

function Navbar() {
	return (
		<nav className="bg-opacity-100 select-none lg:flex lg:items-stretch w-full">
			<div className="flex flex-no-shrink items-stretch my-4 ml-16">
				<div classname="inline-block">
					<img className="object-contain h-10 px-2" src={logo} alt="Logo" />
				</div>
				<div classname="inline-block">
					<a
						href="#home"
						className="flex-no-grow flex-no-shrink relative leading-normal text-black no-underline flex items-center font-bold uppercase hover:bg-gray-100"
					>
						SeniKurni
					</a>
				</div>
			</div>
			<div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow my-4 mr-12">
				<div className="lg:flex lg:items-stretch lg:justify-end ml-auto ">
					<a
						href="#portofolio"
						className="flex-no-grow flex-no-shrink relative leading-normal text-sm text-black no-underline flex items-center font-bold uppercase hover:bg-gray-100 px-8"
					>
						Portofolio
					</a>
					<a
						href="#blog"
						className="flex-no-grow flex-no-shrink relative leading-normal text-sm text-black no-underline flex items-center font-bold uppercase hover:bg-gray-100 px-8"
					>
						Blog
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
