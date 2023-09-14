import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import fruits from '../assets/fruits.png';
import Ready from './Ready';
import Explore from './Explore';
import Advertisement from './Advertisement';
import Details from './Details';
import Footer from './Footer';
// import Signup from './Signup';

const Home = ({ addClass }) => (
  <div className={`${addClass ? 'hidden' : 'flex flex-col'} `}>
    <div className="flex md:h-screen      ">
      <section className="home-container flex flex-col  w-full p-[5%] justify-end md:h-screen md:justify-center  bg-orange-100 rounded-bl-[60px] ">
        <p className="text-[40px] font-[Roboto,sans-serif] font-medium md:w-[70%]">
          Food intelligence for all, market data at your fingertips.
        </p>
        <p className=' mt-[10%] font-semibold text-[18px] text-justify md:w-[70%] font-["Poppins", sans-serif] '>
          Make smart decisions with our food data. Tap into our real-time,
          daily, and historical food market data pipeline.
        </p>
        <button
          type="button"
          className="px-5 py-5 lg:px-12 lg:py-4  mt-16 rounded  bg-black w-fit text-base text-white"
        >
          <Link to="/sign-up/personal">Get Started</Link>
        </button>
      </section>
      <section className="hidden md:flex  w-2/5 bg-green-600 rounded-tl-[60px] -mt-[76px] justify-center items-center">
        <img src={fruits} alt="fruits" className=" w-4/5 -ms-[50%]" />
      </section>
    </div>
    <Explore />
    <Advertisement />
    <Ready />
    <Details />
    <Footer />
  </div>
);

Home.propTypes = {
  addClass: PropTypes.bool.isRequired,
};

export default Home;
