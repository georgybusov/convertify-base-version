
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full z-50 bg-white shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src="/lovable-uploads/598ea263-4a27-4d70-96ee-e712e991b848.png"
                alt="Convertify"
              />
            </Link>
          </div>

          {isMobile ? (
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          ) : (
            <div className="flex space-x-6 items-center">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#4A1FB8] px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/schedule"
                className="text-gray-700 hover:text-[#4A1FB8] px-3 py-2 text-sm font-medium"
              >
                Schedule a Call
              </Link>
              <a
                href="#services"
                className="text-gray-700 hover:text-[#4A1FB8] px-3 py-2 text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-[#4A1FB8] px-3 py-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#4A1FB8] px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-white border-t border-gray-200`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#4A1FB8] hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/schedule"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#4A1FB8] hover:bg-gray-50"
            >
              Schedule a Call
            </Link>
            <a
              href="#services"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#4A1FB8] hover:bg-gray-50"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#4A1FB8] hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#4A1FB8] hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
