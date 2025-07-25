import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email.trim()) {
      console.log('Newsletter subscription:', email);
      // Add your newsletter subscription logic here
      setEmail('');
    }
  };

  return (
    <footer className="py-8 px-16 bg-white text-white font-sans relative z-10">
      <div className="max-w-full mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          
          {/* Company Section */}
          <div className="space-y-4 col-span-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-red-500">Rayesh</span>
            </div>
            <p className="text-gray-800 text-sm leading-relaxed">
              I’m Rayesh Nand Sharma, a filmmaker and cinematographer based in Cambodia. I specialize in telling visual stories that are real, emotional, and impactful. My work focuses on culture, identity, and music. I aim to create powerful visuals that connect with people and leave a lasting impression.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="https://t.me/Rad10060" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" target= "_blank" >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.964 15.569l-.396 5.591c.568 0 .814-.243 1.114-.536l2.664-2.556 5.52 4.026c1.012.558 1.728.265 1.978-.936L24 4.523c.314-1.44-.526-2.008-1.502-1.661L1.62 9.16C.224 9.707.233 10.48 1.382 10.84l5.84 1.823 13.565-8.554c.638-.405 1.218-.183.74.22L9.964 15.569z"/>
                </svg>

              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" target= "_blank">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/rayesh.nand.sharma.2025" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" target= "_blank">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.326v21.348C0 23.404.596 24 1.326 24h11.497v-9.294H9.692v-3.622h3.131V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.404 24 22.674V1.326C24 .596 23.404 0 22.675 0z"/>
                </svg>

              </a>
              
              <a href="https://www.youtube.com/@thidarayesh" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" target= "_blank" >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="grid justify-center">
            <h3 className="text-lg font-semibold text-gray-500">Useful Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">About Me</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Others</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-500">Contact</h3>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">
                Toul Kork, Phnom Penh, Cambodia
              </p>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-gray-600 text-sm">Sharamrajush3@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-gray-600 text-sm">+7 (903) 134-55-26</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-500">Contact Me</h3>
            <p className="text-gray-600 text-sm">
              Contact Me For A Interesting Media Project
            </p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full px-4 py-2 border text-gray-600 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors text-sm font-medium cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 pt-8">
          <div className="flex justify-center">
            
            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              Copyright Rayesh | Developed by Kumari Laxmi Sharma
            </p>

            {/* Bottom Social Icons */}
            
          
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;