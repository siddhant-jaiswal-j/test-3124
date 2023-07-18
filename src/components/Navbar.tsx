// import { useState } from 'react';
import { default as YourSvg } from '../assets/logo.svg';
import { NAV_DATA } from '../constants';
import '../styles/NavbarStyle.css';
// import { Cross, MenuIcon } from '../assets';

const Desktop = () => (
	<aside className='navbar'>
		<figure>
			<img src={YourSvg} alt='' height={'40px'} width={'204px'} />
		</figure>
		<hr />
		<main className='nav-item-container'>
			{NAV_DATA.map((item, index) => {
				return (
					<div
						key={index}
						className={` nav-item--box
								${index == 0 ? 'active' : ''}
						`}>
						<section className={`nav-item`}>
							<img src={item.icon} alt='' />
							<a href='/'>{item.name}</a>
						</section>
					</div>
				);
			})}
		</main>
	</aside>
);

// const Mobile = () => {
// 	const [isVisible, setVisible] = useState(true);
// 	return (
// 		<div className='nav--wrapper'>
// 			<aside
// 				className={`navbar--mobile ${
// 					isVisible ? 'slide-in' : 'slide-out'
// 				}`}>
// 				<figure className='navbar--header-mobile'>
// 					<img src={YourSvg} alt='' />
// 					<img
// 						src={Cross}
// 						alt='close-icon'
// 						height={'30px'}
// 						onClick={() => setVisible(false)}
// 					/>
// 				</figure>
// 				<hr />
// 				<main className='nav-item-container'>
// 					{NAV_DATA.map((item, index) => {
// 						return (
// 							<div
// 								key={index}
// 								className={` nav-item--box
// 								${index == 0 ? 'active' : ''}
// 						`}>
// 								<section className={`nav-item`}>
// 									<img src={item.icon} alt='' />
// 									<a href='/'>{item.name}</a>
// 								</section>
// 							</div>
// 						);
// 					})}
// 				</main>
// 			</aside>
// 			<div className='navbar--hamburger' onClick={() => setVisible(true)}>
// 				<img src={MenuIcon} alt='' />
// 			</div>
// 		</div>
// 	);
// };

// const Navbar = () => {
// 	return <>{window.innerWidth >= 768 ? <Desktop /> : <Mobile />}</>;
// };

// export default Navbar;

const Navbar = () => {
	return <Desktop />;
};

export default Navbar;
