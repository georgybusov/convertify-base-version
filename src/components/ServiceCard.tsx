
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="mb-4 text-convertly-blue">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-convertly-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
