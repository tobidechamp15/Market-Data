import React from 'react';

const Footer = () => (
  <div className="flex justify-center items-center flex-col mb-5">
    <hr className="m-[5%] mb-0 w-1/2 bg-red-700  border border-red-400" />
    <div className="text-center text-sm  flex flex-wrap items-center justify-center md:w-full leading-7">
      Copyright © 2021 Market Data Limited - RC234523.
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-heart-fill my-0 mx-[0.5%] xs:flex"
        fill=" #FF5446"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
      in Lagos.
    </div>
  </div>
);

export default Footer;
