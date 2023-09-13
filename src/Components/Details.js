import React from 'react';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';

const Details = () => (
  <div className="flex flex-col mt-5 p-[5%]">
    <section>
      <p className="text-center text-[16px] font-semibold">
        Subscribe to our monthly newsletter to stay connected to our activities,
        get insights and updates on whats happening with everyday food data.
      </p>
      <div className="flex justify-between p-3 border border-orange-400 mt-[5%]">
        <input type="text" placeholder="Email address" />
        <button
          type="button"
          tabIndex="0"
          className="text-sm bg-black border-0 text-white p-3 rounded"
        >
          Subscribe
        </button>
      </div>
    </section>
    <div className="flex md:flex-row flex-col md:gap-3 justify-evenly items-start md:mt- md:mt-14">
      <div className="flex items-start xs:w-full my-5 md:w-1/4 md:mt-0">
        <img src={logo} alt="logo" className=" w-2/5 md:w-1/2 " />
      </div>
      <div>
        <p className="text-xl font-semibold my-4 md:mt-0">Contact</p>
        <p className="text-green-500 text-lg font-medium my-4">
          info@marketdata.com
        </p>
        <p className="text-green-500 text-lg font-medium my-4 mt-0">
          operations@marketdata.ng
        </p>
        <div className="flex gap-4 my-5">
          <img src={insta} alt="insta" className="w-5 h-5" />
          <img src={facebook} alt="facebook" className="w-5 h-5" />
          <img src={twitter} alt="twitter" className="w-5 h-5" />
          <img src={linkedin} alt="linkedin" className="w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-col md:w-1/4">
        <p className="font-semibold text-lg my-6 md:mt-0">Lagos</p>
        <span className="w-3/4">
          21, Oremeji Street, behind toll gate, Victoria Island, Lagos.
        </span>
      </div>
      <div className="flex flex-col gap-3 mt-10 md:mt-0">
        <p className="my-3 font-semibold md:mt-0">Company</p>
        <p>Solutions</p>
        <p>About</p>
        <p>Terms of use</p>
        <p>Privacy Policy</p>
        <p>Dispute resolution</p>
      </div>
    </div>
  </div>
);

export default Details;
