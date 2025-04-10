
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img
              src="/lovable-uploads/598ea263-4a27-4d70-96ee-e712e991b848.png"
              alt="Convertify"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-4">
              Boosting conversions and driving growth for businesses across industries.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-400 hover:text-white transition-colors">
                  Schedule a Call
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Conversion Rate Optimization</li>
              <li className="text-gray-400">Search Engine Optimization</li>
              <li className="text-gray-400">Pay-Per-Click Advertising</li>
              <li className="text-gray-400">Social Media Marketing</li>
              <li className="text-gray-400">Email Marketing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-[#4A1FB8]" />
                <span className="text-gray-400">Toronto, ON, Canada</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#4A1FB8]" />
                <a href="mailto:georgy@convertify.ca" className="text-gray-400 hover:text-white transition-colors">
                  georgy@convertify.ca
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#4A1FB8]" />
                <a href="tel:+14165551234" className="text-gray-400 hover:text-white transition-colors">
                  +1 (416) 555-1234
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 mt-8 mb-6" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Convertify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
