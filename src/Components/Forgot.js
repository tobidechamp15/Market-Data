import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Forgot = () => (
  <section className="flex flex-col w-full justify-center items-center p-[5%] py-0">
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center h-screen">
      <section className="flex w-1/2">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </section>
      <form action="#">
        <p>
          Kindly provide your registered email address or phone number for
          password reset
        </p>
        <input
          type="text"
          placeholder="Email Address or Phone number"
          name="email"
          className=" placeholder:text-black text-lg p-2"
        />
        <button
          type="submit"
          className="bg-black rounded text-white w-full p-4"
        >
          Send request
        </button>
        <div className="flex justify-center items-center gap-6 mt-4">
          <Link to="/login" className="text-xs text-red-400">Sign in</Link>
          <Link to="/sign-up/personal" className="text-xs text-green-400">Not registered?</Link>
        </div>
      </form>
    </div>
  </section>
);

export default Forgot;
