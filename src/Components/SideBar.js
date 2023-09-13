import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ removeClass }) => (
  <div
    className={
      removeClass
        ? 'text-white h-screen  bg-orange-500 ease-in-out lg:hidden sidebar w-100  duration-700 flex justify-around items-center flex-col gap-4 '
        : 'easeIn'
    }
  >
    <div className="flex flex-col gap-8 items-center text-black justify-center ">
      <span
        role="button"
        tabIndex="0"
        className="hover:text-blue-700 font-bold duration-300 cursor-pointer"
      >
        About
      </span>
      <span
        role="button"
        tabIndex="0"
        className="hover:text-blue-700 font-bold duration-300 cursor-pointer"
      >
        Contact
      </span>
      <span
        role="button"
        tabIndex="0"
        className="hover:text-blue-700 font-bold duration-300 cursor-pointer"
      >
        Sources
      </span>
    </div>
    <section className="flex flex-col gap-4 ">
      <button
        type="button"
        className="px-6 py-2 rounded bg-black text-white "
      >
        Sign-up
      </button>
      <button
        type="button"
        className=" bg-none text-black"
      >
        Login
      </button>
    </section>
  </div>
);
SideBar.propTypes = {
  removeClass: PropTypes.bool.isRequired,
};
export default SideBar;
