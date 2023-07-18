import React from 'react';
import Card from './Card';
import { ArrowUp, Circle } from '../assets';

const Info = (props: any) => {
	return (
		<Card style={{ width: '16rem' }}>
			<div className='AreaChart--title'>
				<span>{props.title}</span>
			</div>
			<div className='info--header'>
				<img src={ArrowUp} alt='' />
				<span className='info--subtitle'>{props.subTitle}</span>
			</div>
			<div style={{ paddingTop: '10px' }}>
				{props.data.map((item: any, index: number) => (
					<div className='info--item-wrapper'>
						<img src={Circle} alt='' width='13px' />

						<div className='info--item' key={item.name + index}>
							<span style={{ fontWeight: 'bold' }}>
								{item.name}
							</span>
							<span className='info--subitem'>
								{item.description}
							</span>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};

export default Info;
