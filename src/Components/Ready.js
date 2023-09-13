import React from 'react';
import fruits2 from '../assets/fruits2.png';

const Ready = () => (
  <div className="flex flex-row-reverse bg-orange-100 w-full p-[5%] md:ps-0 md:pt-0 md:pb-0 rounded-bl-[60px] md:rounded-tl-[60px]">
    <section className=" flex flex-col md:justify-center md:items-center md:h-screen">
      <p className="text-[40px] font-[Roboto,sans-serif] font-medium md:w-[70%]">
        Ready to build a smart portfolio for food market data?
      </p>
      <p className='mt-[10%] font-semibold text-[18px] text-justify md:w-[70%] font-["Poppins", sans-serif]'>
        Create your account, subscribe and see how market data helps your
        business performance with informed decision making.
      </p>

      <button
        type="button"
        className="px-5 py-5 md:px-12 md:py-4 flex items-center self-center mt-16 rounded  bg-black w-fit text-base text-white"
      >
        Get started
      </button>
    </section>
    <section className="hidden md:flex justify-center items-center w-2/5 bg-red-500 rounded-tl-[60px]">
      <img src={fruits2} alt="fruits 2" className="ms- ms-[50%]" />
    </section>
  </div>
);

export default Ready;
