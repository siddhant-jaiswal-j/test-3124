import ChartHelper from './ChartHelper';
import { HeaderBg } from '../assets';
import { AREA_DATA } from '../constants';
import '../styles/Dashboard.css';

const Header = () => (
	<div className='background'>
		<img src={HeaderBg} alt='' />
		<div className='wrapper--title'>
			<span className='header--title'>hello, siddhant jaiswal</span>
			<span className='header--subtitle'>
				following is your organization's performance summary
			</span>
		</div>
	</div>
);

const Dashboard = () => {
	return (
		<main className='wrapper'>
			<Header />
			<div className='wrapper--body'>
				{AREA_DATA.map((item, index) => {
					return <ChartHelper key={index} {...item} />;
				})}
			</div>
		</main>
	);
};

export default Dashboard;
