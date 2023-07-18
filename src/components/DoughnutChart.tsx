import Card from './Card';
import '../styles/Chart.css';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

type Props = {};

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props: any) => {
	console.log(props?.legend?.position);
	return (
		<Card style={{ width: '16rem' }}>
			<div className='AreaChart--title'>{props.title}</div>
			<div className='DoughnutChart--chart'>
				<Doughnut
					width={'13rem'}
					data={{
						labels: props.labels,
						datasets: [
							{
								data: props.data,
								backgroundColor: props.backgroundColor,
								borderWidth: 0,
							},
						],
					}}
					// @ts-ignore
					plugins={[ChartDataLabels]}
					options={{
						plugins: {
							title: {
								align: 'start',
								position: props?.legend?.position
									? props?.legend?.position
									: 'bottom', //'bottom',
							},
							legend: {
								align: 'start',
								position: props?.legend?.position
									? props?.legend?.position
									: 'bottom',
								labels: {
									padding: 5,
									pointStyle: 'circle',
								},
							},

							datalabels: {
								color: '#ffffff',
								font() {
									return {
										size: 13,
									};
								},
								formatter: (value) => {
									return value + '%';
								},
							},
						},
					}}

					// options={{ plugins: { title: { display: true } } }}
				/>
			</div>
		</Card>
	);
};

export default DoughnutChart;
