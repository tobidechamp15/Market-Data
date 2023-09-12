import React from 'react';
import fruits from '../assets/fruits.png'

const Home = () => {
	return (
		<div className='flex md:h-screen'>
			<section className='home-container flex flex-col  w-full p-[5%] justify-end md:h-screen md:justify-center  bg-orange-100 rounded-bl-[60px]'>
				<p className='text-[40px] font-[Roboto,sans-serif] font-medium w-[70%]'>
					Food intelligence for all, market data at your fingertips.
				</p>
				<p className=' mt-[10%] font-semibold text-[18px] text-justify w-[70%] font-["Poppins", sans-serif] '>
					Make smart decisions with our food data. Tap into our real-time,
					daily, and historical food market data pipeline.
				</p>
				<button className='px-5 py-5 lg:px-12 lg:py-4  mt-16 rounded  bg-black w-fit text-base text-white'>
					Get Started
				</button>
			</section>
			<section className='hidden md:flex  w-2/6 bg-green-600 rounded-tl-[60px] -mt-[76px] justify-center items-center'>
				<img
					src={fruits}
					alt='fruits'
					className=' w-4/5 -ms-[50%]'
				/>
			</section>
		</div>
	);
};

export default Home;
