"use client";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Page = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col justify-center items-center bg-blue-200 p-6">
      {/* ✅ Toast Notification */}
      <Toaster position="top-center" />

      {/* ✅ Form Container */}
      <div className="p-6 max-w-md w-full bg-white border border-gray-300 rounded-lg shadow-md">
        {/* ✅ Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>

        {/* ✅ Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 p-2 rounded-md outline-none focus:border-blue-400"
            required
          />
          {/* Email Input */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-gray-300 p-2 rounded-md outline-none focus:border-blue-400"
            required
          />
          {/* Message Input */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full border border-gray-300 p-2 rounded-md h-32 outline-none focus:border-blue-400"
            required
          ></textarea>

          {/* ✅ Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* ✅ Footer */}
      <footer className="mt-6 text-center text-gray-500 text-sm">
        &copy; 2024 Flight Booking System. All rights reserved.
      </footer>
    </div>
  );
};

export default Page;
