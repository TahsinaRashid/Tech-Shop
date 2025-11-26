"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields!");
      return;
    }

    toast.success("Message or feedback sent successfully! 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>

      {/* CONTACT INFO + FORM SECTION */}
      <section className="py-16 bg-purple-100 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT — CONTACT INFORMATION */}
          <div className="bg-white p-8 shadow-xl rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-purple-700">
              Contact Information
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Have a question about a product, shipping or anything else?  
              Reach out to us and our support team will get back to you shortly.
            </p>

            <div className="mt-6 space-y-4">
              <p className="text-lg">
                📞 <span className="font-semibold">Phone:</span> +880 1234 567 890
              </p>
              <p className="text-lg">
                📧 <span className="font-semibold">Email:</span> support@techshop.com
              </p>
              <p className="text-lg">
                📍 <span className="font-semibold">Address:</span> Dhaka, Bangladesh
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Business Hours
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>Sun - Thus: 9:00 AM – 8:00 PM</li>
                <li>Saturday: 10:00 AM – 6:00 PM</li>
                <li>Friday: Closed</li>
              </ul>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 shadow-xl rounded-xl space-y-5"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Send Us a Message or Feedback
            </h2>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message or Feedback"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 duration-200 font-medium"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <ToastContainer position="top-center" />
    </>
  );
}
