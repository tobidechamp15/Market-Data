import React, { useState } from 'react';
import logo from '../assets/logo.png';
import cancel from '../assets/cancel.png';

const Navbar = ({ setRemoveClass }) => {
	const [clicked, setClicked] = useState(false);

	const handleMenu = () => {
		console.log('object');
		setRemoveClass((prevState) => !prevState);
		setClicked(!clicked);
	};

	return (
		<nav className='flex justify-between md:justify-between lg:justify-between items-center xs:fixed top-0 left-0 px-3 pe-11 pt-3 w-full nav-bar'>
			<section onClick={handleMenu} className='flex justify-start'>
				{clicked ? (
					<img
						src={cancel}
						alt='cancel'
						className='h-5'
					/>
				) : (
					<div className='flex lg:hidden flex-col gap-1  cursor-pointer'>
						<div className='h-1 bg-black w-6'></div>
						<div className='h-1 bg-black'></div>
						<div className='h-1 bg-black'></div>
					</div>
				)}
			</section>
			<img
				src={logo}
				className='h-16'
				alt={logo}
			/>
			<span className='flex lg:hidden'></span>
			<section className='hidden lg:flex gap-3'>
				<span>Solutions</span>
				<span>About us</span>
				<span>Contact us</span>
			</section>
			<section className='hidden lg:flex  gap-4 '>
				<button className='px-6 py-2 rounded bg-black text-white '>
					Sign-up
				</button>
				<button className=' bg-none text-black'>Login</button>
			</section>
		</nav>
	);
};

export default Navbar;
