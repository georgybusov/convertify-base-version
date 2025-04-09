
import { Star, CheckCircle, Award } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="py-6 border-y border-gray-200 bg-convertify-gray/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Trusted by Businesses Across Industries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full max-w-3xl">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-2 p-3 bg-yellow-100 rounded-full">
                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-1">4.9/5 Rating</h3>
              <p className="text-gray-600 text-sm">Based on client feedback</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-2 p-3 bg-green-100 rounded-full">
                <CheckCircle className="h-8 w-8 text-convertify-green" />
              </div>
              <h3 className="text-xl font-bold mb-1">ROI Guaranteed</h3>
              <p className="text-gray-600 text-sm">Data-driven results</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-2 p-3 bg-blue-100 rounded-full">
                <Award className="h-8 w-8 text-convertify-blue" />
              </div>
              <h3 className="text-xl font-bold mb-1">14 Years Experience</h3>
              <p className="text-gray-600 text-sm">Industry expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
