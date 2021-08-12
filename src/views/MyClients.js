import Client1 from '../assets/img/client1.png';
import Client2 from '../assets/img/client2.png';
import Client3 from '../assets/img/client3.png';
import Client4 from '../assets/img/client4.png';
import Client5 from '../assets/img/client5.png';
import Client6 from '../assets/img/client6.png';

function MyClients() {
	return (
		<div className=" overflow-hidden border-b mx-32">
			<div className="py-16">
				<h1 className="text-2xl font-bold text-center pb-4" id="portofolio">
					I've worked on projects for
				</h1>
				<div className="flex justify-center py-4">
					<img className="object-contain h-14 px-4" src={Client1} alt="Client1" />
					<img className="object-contain h-14 px-4" src={Client2} alt="Client2" />
					<img className="object-contain h-14 px-4" src={Client3} alt="Client3" />
					<img className="object-contain h-14 px-4" src={Client4} alt="Client4" />
					<img className="object-contain h-14 px-4" src={Client5} alt="Client5" />
					<img className="object-contain h-14 px-4" src={Client6} alt="Client6" />
				</div>
				<p className="text-center text-sm py-8">
					I’ve been designing and building websites for 6 years, <br></br> you can{' '}
					<span className="text-primary cursor-pointer">view more projects here</span>
				</p>
			</div>
		</div>
	);
}

export default MyClients;
