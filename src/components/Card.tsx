import React from 'react';
import '../styles/Card.css';
type Props = {
	children: React.ReactNode;
	style?:
		| React.HTMLAttributes<HTMLDivElement>
		| React.CSSProperties
		| undefined;
};
const Card = ({ children, style }: Props) => {
	return (
		<div className='card' style={{ ...style }}>
			{children}
		</div>
	);
};

export default Card;
