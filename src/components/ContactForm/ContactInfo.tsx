
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
      <p className="text-gray-700 mb-8">
        Contact us today for a free consultation. Our team will analyze your current digital marketing strategy and identify opportunities for growth at competitive rates with quick turnaround times.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-convertify-blue mr-4 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600">+1 (587) 817-0773</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-convertify-blue mr-4 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600">info@convertify.ca</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-convertify-blue mr-4 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Calgary, Alberta</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
