import { dashboard, location, logo, trainings, users } from '../assets';

export const NAV_DATA = [
	{
		name: 'Dashboard',
		icon: dashboard,
	},
	{
		name: 'Trainings',
		icon: trainings,
	},
	{
		name: 'Users',
		icon: users,
	},
	{
		name: 'Analytics',
		icon: location,
	},
	{
		name: 'My Account',
		icon: location,
	},
	{
		name: 'Support',
		icon: location,
	},
];

export const AREA_DATA = [
	{
		type: 'AreaChart',
		item: {
			name: 'in training workers',
			header: '3,354',
			pl: 20,
			isNegative: false,
			subText: 234,
		},
	},
	{
		type: 'AreaChart',
		item: {
			name: 'video watch-time (hrs)',
			header: '2,433',
			pl: 20,
			isNegative: true,
			subText: 435,
		},
	},
	{
		type: 'AreaChart',
		item: {
			name: '% workers passing quiz',
			header: '95%',
			pl: 20,
			isNegative: false,
			subText: '24%',
		},
	},
	{
		type: 'AreaChart',
		item: {
			name: 'avg. days taken',
			header: 6,
			pl: 20,
			isNegative: false,
			subText: 3,
		},
	},
	{
		type: 'DoughnutChart',
		item: {
			title: 'chapter wise status',
			labels: [
				'finished training',
				'chapter a',
				'chapter b',
				'chapter c',
				'haven’t started yet',
			],
			data: [22, 20, 7, 22, 34],
			backgroundColor: [
				'#0d62ff',
				'#3333334D',
				'#8400D5',
				'#425F57',
				'#ED1C24',
			],
		},
	},
	{
		type: 'LineChart',
		item: {
			data: [100, 130, 120, 230, 280, 200, 230, 100, 280, 320, 360, 400],
			dates: [
				'3 Jun',
				'4 Jun',
				'5 Jun',
				'6 Jun',
				'7 Jun',
				'8 Jun',
				'9 Jun',
				'10 Jun',
				'11 Jun',
				'12 Jun',
				'13 Jun',
				'14 Jun',
			],
		},
	},
	{
		type: 'info',
		item: {
			title: 'monthly training activity',
			subTitle: '16% more enrollees this month',
			data: [
				{
					name: 'course a',
					description: '23 workers took this course this week',
				},
				{
					name: 'course b',
					description: '23 workers took this course this week',
				},
				{
					name: 'course c',
					description: '23 workers took this course this week',
				},
				{
					name: 'course d',
					description: '23 workers took this course this week',
				},
			],
		},
	},
	{
		type: 'DoughnutChart',
		item: {
			title: 'quiz passing %',
			labels: ['passed', 'failed'],
			data: [91.39, 8.61],
			backgroundColor: ['#018e42', '#ed1c24'],
			legend: {
				position: 'right',
			},
		},
	},
	{
		type: 'LineChart',
		item: {
			data: [30, 60, 50, 60, 45, 75, 45, 30, 45, 40],
			dates: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
			isSecondary: true,
		},
	},
];
