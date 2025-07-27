import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-slate-900 dark:text-white py-16 px-6 relative"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-200"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">
  About Our Bookstore
</h2>

        {/* Intro */}
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
          Our bookstore is more than just a place to buy books — it’s a
          community built for readers. We believe in the power of stories to
          inspire, educate, and bring people together. Whether you’re searching
          for best-selling novels, academic guides, or timeless classics, we aim
          to create a space where every reader feels at home.
        </p>

        {/* Our Story with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
          {/* Text */}
          <div className="text-left p-6 border rounded-xl shadow-md bg-white dark:bg-slate-800">
            <h3 className="text-2xl font-semibold text-amber-500 mb-4">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Founded in 2024 by a group of passionate book enthusiasts, our
              bookstore started as a small community project to bring readers
              together. What began as a collection of shared favorites soon grew
              into a full-fledged platform for discovering inspiring reads,
              timeless classics, and hidden gems from around the world. Today,
              we continue to honor that same vision — making reading accessible,
              affordable, and enjoyable for everyone, everywhere.
            </p>
          </div>

          {/* External Image */}
          <div className="flex justify-center">
            <img
  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  alt="Bookstore interior"
  className="rounded-xl shadow-md md:w-[500px] md:h-[320px] object-cover"
/>

          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          <div className="p-6 border rounded-xl shadow-md bg-white dark:bg-slate-800">
            <h3 className="text-xl font-semibold text-amber-500 mb-3">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To connect readers with books that enrich their lives and broaden
              their horizons. We strive to make reading accessible to everyone
              by offering curated selections, affordable prices, and personalized
              recommendations.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-md bg-white dark:bg-slate-800">
           <h3 className="text-xl font-semibold text-amber-500 mb-3">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To become the go-to destination for book lovers worldwide —
              fostering a vibrant community that shares knowledge, ideas, and a
              passion for lifelong learning.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-amber-500 mb-6">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl shadow-md bg-white dark:bg-slate-800">
              <h4 className="text-lg font-semibold mb-2">Wide Collection</h4>
              <p className="text-gray-600 dark:text-gray-400">
                From modern bestsellers to classic literature — discover books
                for every age and interest.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-md bg-white dark:bg-slate-800">
              <h4 className="text-lg font-semibold mb-2">Affordable Pricing</h4>
              <p className="text-gray-600 dark:text-gray-400">
                We ensure competitive pricing with regular deals so everyone can
                enjoy reading without limits.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-md bg-white dark:bg-slate-800">
              <h4 className="text-lg font-semibold mb-2">Community Support</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Join a community of readers who share reviews, book clubs, and
                personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
