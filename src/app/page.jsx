'use client'
import { useState } from "react";
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// === 2. FEATURED CATEGORIES SECTION ===
function FeaturedCategories() {
  const categories = [
    { name: "Gaming Gear", icon: "🎮" },
    { name: "Smart Home", icon: "💡" },
    { name: "Laptops & PCs", icon: "💻" },
  ];

  return (
    <section className="py-16 md:py-24 bg-purple-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title & Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Shop by Passion: Find Your Next Upgrade
        </h2>
        <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
          Explore the technology that defines the future of work, entertainment and home living.
        </p>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              // Card Styling (Uniform with hover/focus)
              className="group block p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-50 hover:bg-purple-50 transform hover:-translate-y-1 focus:ring-4 focus:ring-purple-300"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                 Wide range of products built for performance.
              </p>
              
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// === 3. TOP DEALS & BESTSELLERS SECTION ===
function TopDeals() {
  const deals = [
    { name: "RTX 4070 Graphics Card", price: 84.5, oldPrice: 90, img: "/download (9).jpeg" },
    { name: "Wireless Gaming Mouse", price: 1.5, oldPrice: 1.9, img: "/mouse.jpg" },
    { name: "Smart Home Hub 2.0", price: 4.5, oldPrice: 4.7, img: "/download (10).jpeg" },
    { name: "Mechanical Keyboard", price: 6.5, oldPrice: 10, img: "/download (11).jpeg" },
  ];

  return (
    <section className="py-16 md:py-24 bg-purple-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title & Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Current Best Deals
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Limited stock. Grab these top-rated items before they're gone!
          </p>
        </div>

        {/* Product Grid (4-column desktop, 2-column mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {deals.map((product) => (
            <div
              key={product.name}
              // Card Styling (Uniform with hover/focus)
              className="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Placeholder (replace with actual <Image> component in Next.js) */}
              <div className="h-32 w-full  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                 <img src={product.img} alt={product.name} className="object-cover group-hover:scale-105 transition-transform" />
                 {/* <span className="text-xs text-gray-500">[Product Image Placeholder]</span> */}
              </div>
              
              <h3 className="text-base font-semibold text-gray-900 truncate">{product.name}</h3>
              
              <div className="flex items-center mt-1">
                <span className="text-yellow-400 text-sm">★★★★★</span>
              </div>

              <div className="mt-3">
                <span className="text-sm line-through text-red-500 mr-2">
                  ${product.oldPrice}
                </span>
                <span className="text-xl font-bold text-purple-600">
                  ${product.price}
                </span>
              </div>

              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// === 4. CUSTOMER TESTIMONIALS SECTION ===
function CustomerTestimonials() {
  const reviews = [
    { quote: "The fastest shipping I've ever seen. The GPU works perfectly and performs exactly as advertised!", name: "Amit K.", title: "Gaming Enthusiast" },
    { quote: "Seamless shopping experience and excellent customer service. This is my new go-to store for tech upgrades.", name: "S. Haque", title: "Web Developer" },
    { quote: "Got the best price on my new laptop here. Highly recommend for the quality and reliable service.", name: "Rina P.", title: "Remote Professional" },
  ];

  return (
    <section className="py-16 md:py-24 bg-purple-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title & Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Trusted by 1000+ Happy Customers
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            See what our community is saying about the quality of our products and service.
          </p>
        </div>

        {/* Testimonial Grid (Uniform Card Design) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              // Card Styling
              className="p-8 rounded-xl shadow-lg border-t-4 border-purple-600 bg-gray-50"
            >
              <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
              <blockquote className="italic text-gray-700">
                "{review.quote}"
              </blockquote>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-purple-600">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter an email!");
      return;
    }

    toast.success("Mission Successful! 🎉");

    setEmail("");
  };

  return (
    <section className="w-full bg-purple-100 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Be part of our journey</h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates, offers and news directly to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-1 px-4 py-3 border border-gray-500 rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Toastify Container */}
      <ToastContainer position="top-center" />
    </section>
  );
}



// === PRIMARY HOME COMPONENT ===
export default function Home() {
  return (
    // <main> ট্যাগ একাধিক সেকশনকে একসাথে রিটার্ন করার জন্য ব্যবহৃত হয়
    <main>
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative py-20 md:py-32 bg-cover bg-center" 
        style={{
          // নিশ্চিত করুন যে 'hero.jpeg' ফাইলটি আপনার 'public' ফোল্ডারে আছে
          backgroundImage: "url('/hero.jpeg')"
        }}
      >
          {/* ওভারলে (Background Overlay) */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          {/* কন্টেন্ট (Content) */}
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Tech Upgrades That Won't Break the Bank.
              </h1>
              <p className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto">
                  Get cutting-edge performance at the guaranteed best prices. Explore our exclusive deals and limited-time offers today.
              </p>
              <a
                  href="/products"
                  className="inline-block mt-8 px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg transform hover:scale-105"
              >
                  Explore Deals
              </a>
          </div>
      </section>

      {/* 2. FEATURED CATEGORIES */}
      <FeaturedCategories /> 
      
      {/* 3. TOP DEALS & BESTSELLERS */}
      <TopDeals />
      
      {/* 4. CUSTOMER TESTIMONIALS */}
      <CustomerTestimonials />
      <Newsletter/>
      
    </main>
  );
}