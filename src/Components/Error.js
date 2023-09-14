import React from 'react';

const Error = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="bg-orange-500 text-white p-8 rounded-lg shadow-lg animate-fade-in">
      <h1 className="text-3xl font-semibold mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg">
        We apologize for the inconvenience. Please try again later.
      </p>
    </div>
  </div>
);

export default Error;
