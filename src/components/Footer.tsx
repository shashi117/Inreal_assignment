import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">FAR LEARNING</div>
            {/* Rainbow left */}
            <div className="hidden md:block ml-4">
              <svg width="50" height="30" viewBox="0 0 50 30">
                <path d="M0,30 C10,10 40,10 50,30" fill="none" stroke="#FF0000" strokeWidth="4" />
                <path d="M5,30 C15,15 35,15 45,30" fill="none" stroke="#FF9900" strokeWidth="4" />
                <path d="M10,30 C20,20 30,20 40,30" fill="none" stroke="#FFFF00" strokeWidth="4" />
                <path d="M15,30 C20,25 30,25 35,30" fill="none" stroke="#00FF00" strokeWidth="4" />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-center md:text-right">
            <a href="#" className="text-gray-600 hover:text-pink-600 transition">About Us</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition">Contact Us</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition">Privacy Policy</a>
          </div>
          
          {/* Rainbow right */}
          <div className="hidden md:block">
            <svg width="50" height="30" viewBox="0 0 50 30">
              <path d="M0,30 C10,10 40,10 50,30" fill="none" stroke="#FF0000" strokeWidth="4" />
              <path d="M5,30 C15,15 35,15 45,30" fill="none" stroke="#FF9900" strokeWidth="4" />
              <path d="M10,30 C20,20 30,20 40,30" fill="none" stroke="#FFFF00" strokeWidth="4" />
              <path d="M15,30 C20,25 30,25 35,30" fill="none" stroke="#00FF00" strokeWidth="4" />
            </svg>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FAR Learning. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;