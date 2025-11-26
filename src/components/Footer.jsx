import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-violet-950 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* 1. Main Grid (4 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          
          {/* Column 1: Company Info / Logo */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Tech-Shop</h3>
            <p className="text-sm text-gray-200 mb-2">
              Your source for cutting-edge technology and high-performance gear.
            </p>
            
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-gray-200 hover:text-purple-400 transition">About Us</a></li>
              <li><a href="/contact" className="text-sm text-gray-200 hover:text-purple-400 transition">Contact</a></li>
            </ul>
            
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul className="space-y-2">
              <li><a className="text-sm text-gray-200 hover:text-purple-400 transition">Shipping Policy</a></li>
              <li><a className="text-sm text-gray-200 hover:text-purple-400 transition">Returns & Exchange</a></li>
              <li><a className="text-sm text-gray-200 hover:text-purple-400 transition">Warranty</a></li>
              <li><a className="text-sm text-gray-200 hover:text-purple-400 transition">Product Support</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Policies</h3>
            <ul className="space-y-2">
              <li><a className="text-sm text-gray-200 hover:text-purple-400 transition">Privacy Policy</a></li>
              <li><a className="text-sm text-gray-200 hover:text-purple-400 transition">Terms of Service</a></li>
        
            </ul>
            <div className='flex space-x-4 mt-6'>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" 
       className="text-gray-400 hover:text-purple-400 transition" aria-label="Facebook Profile">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.084 3.738 9.314 8.583 9.944v-7.042h-2.54V12h2.54V9.87c0-2.51 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.45h-1.264c-1.246 0-1.646.773-1.646 1.57v1.886h2.77l-.443 2.872h-2.327v7.042C18.262 21.314 22 17.084 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
       className="text-gray-400 hover:text-purple-400 transition" aria-label="Twitter Profile">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.213-6.883L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.717 6.231zm-1.12 17.525-.443-.442-.442-.443L6.8 4.2h2.647l6.632 8.785 5.955 7.89H17.124z"/>
      </svg>
    </a>
   <a href="https://instagram.com/yourtechshop" target="_blank" rel="noopener noreferrer" 
       className="text-gray-400 hover:text-purple-400 transition" aria-label="Instagram Profile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none" // Fill property removed for stroke-based icon
        stroke="currentColor" // Changed to stroke for outline
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-instagram"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>
            </div>
          </div>
          
        </div>
        
        {/* 2. Bottom Bar (Copyright) */}
        <div className="mt-8 text-center md:flex  justify-between ">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} TechShop. All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}