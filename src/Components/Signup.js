import React from 'react';
import { Link } from 'react-router-dom';
import SignupImg from '../assets/signup_img.svg';
import check from '../assets/check-circle.svg';
import logo from '../assets/logo.png';

const Signup = () => (
  <section className="flex flex-col md:flex-row md:h-screen">
    <div className="flex flex-col justify-center items-center py-[10%] bg-orange-100">
      <section className="flex flex-col w-1/2">
        <img src={SignupImg} alt="sign up" />
        <div className="flex gap-2 mt-2">
          <img src={check} alt="check" />
          <p>Your data is safe with us</p>
        </div>
        <div className="flex gap-2 mt-2">
          <img src={check} alt="check" />
          <p>Get real-time data on the food market</p>
        </div>
      </section>
    </div>
    <div className="flex flex-col justify-center items-center w-full">
      <Link to="/" className="w-1/2 flex fl">
        <img src={logo} alt="logo" className="w-full" />
      </Link>
    </div>
  </section>
);

export default Signup;
