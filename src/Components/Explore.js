import React from 'react';
import search from '../assets/search.png';

const Explore = () => (
  <div className="p-[5%] flex flex-col md:flex-row gap-2">
    <section className="flex flex-col md:w-1/2 ">
      <p className="font-medium mb-[3%] w-full text-[40px]">
        Explore the latest live trends on food data
      </p>
      <p className="w-full mt-[10%]  text-justify text-[18px]">
        We constantly track and update in real-time food market data, enabling
        informed decisions
      </p>
    </section>
    <div className="flex border-b items-center md:w-1/2">
      <input
        type="text"
        placeholder="Try 'Yam or 'Lagos' or 'North-east'"
        className=" border-none w-full m-3 flex text-center "
      />
      <img src={search} alt="search" className="w-5 h-5" />
    </div>
  </div>
);

export default Explore;
