import AreaChart from './AreaChart';
import DoughnutChart from './DoughnutChart';
import Info from './Info';
import LineChart from './LineChart';

type Props = {
	type: string;
	item: any;
};

const ChartHelper = (props: Props) => {
	switch (props.type) {
		case 'AreaChart':
			const item = props.item;
			return <AreaChart {...item} />;
		case 'DoughnutChart':
			return <DoughnutChart {...props.item} />;
		case 'LineChart':
			return <LineChart {...props.item} />;
		case 'info':
			return <Info {...props.item} />;
		default:
			return null;
	}
};

export default ChartHelper;
