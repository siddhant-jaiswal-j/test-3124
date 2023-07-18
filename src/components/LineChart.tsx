import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Card from './Card';
import '../styles/Chart.css';

type Props = {};

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	indexAxis: 'x' as const,
	elements: {
		bar: {
			borderWidth: 1,
		},
	},
	responsive: true,
	maintainAspectRatio: false,

	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
};

const LineChart = (props: any) => {
	return (
		<Card>
			<div className='AreaChart--title LineChart--header'>
				<span>Last 14 days active workers in training</span>
				<span>last 14 days</span>
			</div>
			<div style={{ width: props.isSecondary ? '30rem' : '47rem' }}>
				<Bar
					id='linechart--bar'
					options={{ ...options }}
					data={{
						labels: props.dates,
						datasets: [
							{
								data: props.data,
								borderColor: '#4988fe',
								backgroundColor: props.isSecondary
									? '#0D62FF'
									: '#4988fe',
								borderRadius: 15,
								borderSkipped: props.isSecondary ? true : false,
								barThickness: props.isSecondary ? 10 : 15,
							},
						],
					}}
				/>
			</div>
		</Card>
	);
};

export default LineChart;
