import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-100 dark:bg-slate-900 dark:text-white py-12 px-6">
      {/* Back Button Fixed */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-200"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Have any questions or feedback? We’d love to hear from you!
        </p>

        {/* Contact Form */}
        <form className="grid grid-cols-1 gap-4 text-left">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-800 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-800 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-800 dark:border-gray-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 text-gray-600 dark:text-gray-400">
          <p>Email: support@bookstore.com</p>
          <p>Phone: +91 9119614132</p>
          <p>Location: Lucknow, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
