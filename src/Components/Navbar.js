import React, { useState } from 'react';
import PropTypes from 'prop-types';

import logo from '../assets/logo.png';
import cancel from '../assets/cancel.png';

const Navbar = ({ setRemoveClass, setAddClass }) => {
  const [clicked, setClicked] = useState(false);

  const handleMenu = () => {
    setRemoveClass((prevState) => !prevState);

    setClicked(!clicked);

    setAddClass((prevState) => !prevState);
  };

  return (
    <nav className="flex justify-between md:justify-between lg:justify-between items-center xs:fixed top-0 left-0 px-3 pe-11 pt-3 w-full bg-orange-100">
      <section
        role="button"
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleMenu();
          }
        }}
        tabIndex="0"
        onClick={handleMenu}
        className="flex justify-start"
      >
        {clicked ? (
          <img
            src={cancel}
            alt="cancel"
            className="h-5"
          />
        ) : (
          <div className="flex lg:hidden flex-col gap-1  cursor-pointer">
            <div className="h-1 bg-black w-6" />
            <div className="h-1 bg-black" />
            <div className="h-1 bg-black" />
          </div>
        )}
      </section>
      <img
        src={logo}
        className="h-16"
        alt={logo}
      />
      <span className="flex lg:hidden" />
      <section className="hidden lg:flex gap-3">
        <span>Solutions</span>
        <span>About us</span>
        <span>Contact us</span>
      </section>
      <section className="hidden lg:flex  gap-4 moveToTop ">
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
    </nav>
  );
};

Navbar.propTypes = {
  setRemoveClass: PropTypes.func.isRequired,
  setAddClass: PropTypes.func.isRequired,
};

export default Navbar;
