import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import SignupImg from '../assets/signup_img.svg';
import check from '../assets/check-circle.svg';
import logo from '../assets/logo.png';

const Signup = () => (
  <section className="flex flex-col md:flex-row md:h-screen md:w-full">
    <div className="flex flex-col justify-center items-center py-[10%] bg-orange-100 md:w-1/2">
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
    <div className="flex flex-col justify-center items-center w-full md:w-1/2">
      <Link to="/" className="w-1/2 flex fl">
        <img src={logo} alt="logo" className="w-full" />
      </Link>

      <nav className="w- w-3/4">
        <ul className="flex justify-around w-full">
          <li className="w-1/2 text-center flex item-center justify-center">
            <NavLink
              to="/sign-up/personal"
              className={({ isActive }) => (isActive ? 'navLink' : 'navLink')}
              end
            >
              Personal
            </NavLink>
          </li>
          <li className="w-1/2  text-center flex item-center justify-center">
            <NavLink to="/sign-up/company" className="navLink">
              Company
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  </section>
);

export default Signup;
