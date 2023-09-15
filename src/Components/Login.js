import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Login = () => (
  <section className="flex flex-col items-center justify-center h-screen">
    <div className="w-full md:w-2/5 flex flex-col justify-center">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <form action="#" className="flex flex-col p-[5%] py-20 border ">
        <input type="email" placeholder="Email address /Phone no." required />
        <input type="password" placeholder="Password" required />
        <button
          type="submit"
          className="bg-black w-full rounded text-white py-4"
        >
          Sign in
        </button>
        <div className="flex justify-center gap-4 items-center px-3 mt-2">
          <Link to="/forgot-password" className="text-xs text-red-400">
            Forgot password
          </Link>
          <Link to="/sign-up/personal" className="text-xs text-green-400">Not registered?</Link>
        </div>
      </form>
    </div>
  </section>
);

export default Login;
