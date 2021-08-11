import './App.css';
import Home from './views/Home';
import Portofolio from './views/Portofolio';
import MyClient from './views/MyClient';
import Contact from './views/Contact';

function App() {
	return (
		<div className="font-body">
			<Home />
			<Portofolio />
			<MyClient />
			<Contact />
		</div>
	);
}

export default App;
