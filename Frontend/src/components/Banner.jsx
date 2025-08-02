import React, { useState } from "react";
import banner from "../../public/banner7.png";

function Banner() {
  const [email, setEmail] = useState("");

  const handleGetStarted = () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If valid, send email or show success message
    alert(`Thanks for subscribing! You'll now receive updates and offers in your inbox:  ${email}`);
    setEmail(""); // clear input after submit
  };

  return (
    <div className="pb-10  max-w-screen-2xl bg-gray-800 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      {/* Left Section */}
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-6">
          {/* Tagline */}
          <p className="uppercase text-xs md:text-sm tracking-wide text-pink-400">
            Your reading journey starts here
          </p>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            Discover Your Next <span className="text-pink-500">Great Read</span> Today
          </h1>

          {/* Subheading */}
          <p className="text-sm md:text-xl text-gray-200">
            Explore thousands of books across every genre — from timeless classics to trending bestsellers.  
            Join our community of readers and get exclusive updates, recommendations, and discounts straight to your inbox.
          </p>

          {/* Email Input */}
          <label className="input input-bordered flex items-center gap-2 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* CTA Button */}
          <button
            onClick={handleGetStarted}
            className="relative mt-6 px-6 py-2 font-semibold text-white 
             bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600
             rounded-lg shadow-[0_4px_14px_rgba(236,72,153,0.4)] 
             transition-all duration-300 
             hover:scale-105 hover:shadow-[0_6px_20px_rgba(236,72,153,0.6)]
             active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Join the Book Club</span>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 
                   blur-xl opacity-50 animate-pulse"></span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="order-1 w-full mt-20 md:w-1/2 flex justify-center">
        <img
          src={banner}
          className="md:w-[550px] md:h-[460px] md:ml-12 rounded-lg"
          alt="Banner"
        />
      </div>
    </div>
  );
}

export default Banner;
