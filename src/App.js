import './App.css';
import Home from './views/Home';
import MyClients from './views/MyClients';
import Contact from './views/Contact';

function App() {
	return (
		<div className="font-body">
			<Home />
			<MyClients />
			<Contact />
		</div>
	);
}

export default App;
