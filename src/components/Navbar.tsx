
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/e4152fc0-870f-4f7c-8338-5e2637f79240.png" 
              alt="Convertly Logo" 
              className="h-10 w-auto"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium text-gray-700 hover:text-convertly-blue transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-convertly-blue transition-colors">
            About
          </a>
          <a href="#process" className="text-sm font-medium text-gray-700 hover:text-convertly-blue transition-colors">
            Our Process
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-convertly-blue transition-colors">
            Contact
          </a>
          <Button className="bg-convertly-blue hover:bg-convertly-lightblue text-white rounded-md">
            Get Started
          </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <a 
              href="#services" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-convertly-blue"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-convertly-blue"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#process" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-convertly-blue"
              onClick={() => setIsOpen(false)}
            >
              Our Process
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-convertly-blue"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full bg-convertly-blue hover:bg-convertly-lightblue text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
