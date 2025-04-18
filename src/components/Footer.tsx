import { 
  Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-convertify-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/c18f52c7-8078-499e-ae62-00bc7eede43e.png" 
                alt="Convertify Logo" 
                className="h-12 w-auto bg-white/10 backdrop-blur-sm p-2 rounded-lg"
              />
            </a>
            <p className="text-gray-400 mb-6">
              Helping businesses boost conversions, drive traffic, and generate more leads through data-driven marketing strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Conversion Rate Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Running Ads (PPC/Social)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Search Engine Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Email Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">More Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Google Business Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reputation Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Content Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <a href="mailto:info@convertify.ca" className="text-gray-400 hover:text-white transition-colors">
                  info@convertify.ca
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <a href="tel:+15878170773" className="text-gray-400 hover:text-white transition-colors">
                  +1 (587) 817-0773
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <span className="text-gray-400">
                  Calgary, Alberta
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Convertify. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 justify-center">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
