import { Dashboard, Navbar } from './components';
import './styles/App.css';
const App = () => {
	return (
		<div className='dashboard'>
			<Navbar />
			<Dashboard />
		</div>
	);
};

export default App;
