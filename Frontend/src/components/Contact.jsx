import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false); // Track form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xldllnpj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true); // Show success screen
      } else {
        alert("Something went wrong. Try again later.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  };

  // Success screen
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900 text-center text-black dark:text-white">
        <h2 className="text-2xl font-bold mb-2">Thanks!</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The form was submitted successfully.
        </p>
        <button
          onClick={() => navigate("/")} // Go back to home (or change path)
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="relative bg-gray-100 dark:bg-slate-900 text-black dark:text-white py-12 px-6 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Have any questions or feedback? We’d love to hear from you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 text-left bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg"
        >
          <div>
            <label className="block text-sm mb-1 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-900 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-900 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-900 dark:border-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-gray-700 dark:text-gray-400">
          <p>Email: support@bookstore.com</p>
          <p>Phone: +91 9119614132</p>
          <p>Location: Lucknow, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
