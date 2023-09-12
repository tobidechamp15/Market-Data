import React from 'react';

const SideBar = ({ removeClass }) => {
	return (
		<div
			className={
				removeClass
					? 'text-white h-screen z-40 bg-orange-500 ease-in-out lg:hidden sidebar w-100  duration-700 flex justify-around items-center flex-col gap-4 '
					: 'easeIn'
			}>
			<div className='flex flex-col gap-8 items-center text-black justify-center '>
				<span className='hover:text-blue-700 font-bold duration-300 cursor-pointer'>
					About
				</span>
				<span className='hover:text-blue-700 font-bold duration-300 cursor-pointer'>
					Contact
				</span>
				<span className='hover:text-blue-700 font-bold duration-300 cursor-pointer'>
					Sources
				</span>
			</div>
			<section className='flex flex-col gap-4 '>
				<button className='px-6 py-2 rounded bg-black text-white '>
					Sign-up
				</button>
				<button className=' bg-none text-black'>Login</button>
			</section>
		</div>
	);
};

export default SideBar;
