
import { Star, Award, Shield, Check } from "lucide-react";

const TrustSection = () => {
  const clients = [
    "/lovable-uploads/e4152fc0-870f-4f7c-8338-5e2637f79240.png", // Using logo as placeholder, ideally replace with client logos
  ];

  return (
    <section className="py-12 bg-convertly-gray/50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-8 text-center text-convertly-dark">Trusted by Businesses Across Industries</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center text-convertly-blue mb-1">
                <Star className="h-5 w-5 fill-convertly-blue text-convertly-blue" />
                <Star className="h-5 w-5 fill-convertly-blue text-convertly-blue" />
                <Star className="h-5 w-5 fill-convertly-blue text-convertly-blue" />
                <Star className="h-5 w-5 fill-convertly-blue text-convertly-blue" />
                <Star className="h-5 w-5 fill-convertly-blue text-convertly-blue" />
              </div>
              <p className="font-semibold text-lg">4.9/5</p>
              <p className="text-sm text-gray-600">Client Rating</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <Award className="h-8 w-8 text-convertly-blue mb-1" />
              <p className="font-semibold text-lg">200+</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-convertly-blue mb-1" />
              <p className="font-semibold text-lg">100%</p>
              <p className="text-sm text-gray-600">Satisfaction Guarantee</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <Check className="h-8 w-8 text-convertly-blue mb-1" />
              <p className="font-semibold text-lg">10+ Years</p>
              <p className="text-sm text-gray-600">Industry Experience</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            {clients.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt="Client Logo" 
                className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
