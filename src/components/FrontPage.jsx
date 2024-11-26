import React from 'react';

const FrontPage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/a1/86/a0/a186a084952e7177f8a68998c6b61d7c.jpg')`, // Replace with your preferred image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Heading Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 z-10">
        Find your next book to read.
      </h1>

      {/* Optional Button or Other Content */}
      <div className="z-10">
        <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition">
          Explore
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
