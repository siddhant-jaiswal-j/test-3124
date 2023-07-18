import { TrendDown, TrendUp } from '../assets';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
	ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../styles/Chart.css';
import Card from './Card';

type Props = {
	name: string;
	header: string | number;
	pl: number;
	isNegative?: boolean;
	subText: string | number;
};

// background-color: #e6f4ed;

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
		},

		y: {
			grid: {
				display: false,
			},
			display: false,
		},
	},
	maintainAspectRatio: false,
	elements: {
		point: {
			radius: 0,
		},
	},
};

const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const DATA = [0, 8, 5, 5, 9, 6, 0];

const AreaChart = (props: Props) => {
	const data = {
		labels,
		datasets: [
			{
				fill: true,
				label: 'Dataset 2',
				data: DATA, //labels.map(() => Math.random() * 100),
				// borderColor: 'rgb(53, 162, 235)',
				backgroundColor: (context: ScriptableContext<'line'>) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 0, 0, 200);
					gradient.addColorStop(
						0,
						!props.isNegative ? 'rgba(0,174,50,1)' : '#ED1C24'
					);
					gradient.addColorStop(
						0.3,
						!props.isNegative
							? 'rgba(250,174,50,0)'
							: 'rgba(237, 28, 36,0)'
					);
					gradient.addColorStop(1, 'rgba(255,255,255,0)');

					return gradient;
				},
				borderColor: 'rgba(75,192,192,1)',
				showLine: false,
			},
		],
	};

	return (
		<Card>
			<div className='AreaChart--title'>{props.name}</div>
			<div className='AreaChart--body'>
				<div className='AreaChart--main'>
					<div className='AreaChart--main-header'>{props.header}</div>
					<div className='AreaChart--main-body'>
						<div
							className='AreaChart--main-trend'
							style={{
								backgroundColor: !props.isNegative
									? '#e6f4ed'
									: '#ED1C241A',
							}}>
							<img
								src={!props.isNegative ? TrendUp : TrendDown}
								alt=''
							/>
							<span> {props.pl}</span>
						</div>
						<span>{props.subText}</span>
					</div>
				</div>
				<div
					className=''
					style={{ maxHeight: '5rem', width: '8.5rem' }}>
					<Line options={options} data={data} />
				</div>
			</div>
		</Card>
	);
};

export default AreaChart;
