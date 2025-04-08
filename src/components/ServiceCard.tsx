
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card group bg-white hover:bg-gradient-to-br hover:from-white hover:to-convertly-gray/30">
      <div className="mb-4 p-3 bg-convertly-gray/40 rounded-full inline-block text-convertly-blue group-hover:bg-convertly-blue/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-convertly-blue transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
      <div className="mt-4 w-8 h-1 bg-convertly-blue/30 group-hover:w-16 transition-all duration-300"></div>
    </div>
  );
};

export default ServiceCard;
