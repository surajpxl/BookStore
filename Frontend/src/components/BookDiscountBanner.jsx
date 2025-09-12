import React from "react";
// import bannerImg from "../assets/banner_"; // Path to your uploaded banner image

const BookDiscountBanner = () => {
  return (
    <div
      className="max-w-screen-xl container mx-auto md:px-20 px-4 pb-5  mb-10 md:h-[300px]  bg-center flex items-center justify-center rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      style={{
        backgroundImage: `url(${"https://i.pinimg.com/1200x/50/d8/6a/50d86a1153b0bb54156ccb62d8f6ff71.jpg"})`,
      }}
    >
      {/* Overlay content */}
      <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center  ">
        <p className="text-sm uppercase tracking-wide text-gray-200">
          More bang for your book
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
          20% Off Select Books
        </h2>
        <button
          onClick={() => alert("Sale is not started yet!")}
          className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BookDiscountBanner;
