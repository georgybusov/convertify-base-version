
import { 
  BarChart3, Search, Mail, MonitorSmartphone, 
  MapPin, Star, PenTool, Youtube, Users 
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 size={32} />,
      title: "Conversion Rate Optimization",
      description: "Optimize your website to convert more visitors into customers with data-driven design and UX improvements."
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "Running Ads",
      description: "Strategic PPC, social media, and local ad campaigns that drive qualified traffic and maximize your ROAS."
    },
    {
      icon: <Search size={32} />,
      title: "Search Engine Optimization",
      description: "Improve your organic visibility and rankings with technical SEO, content optimization, and link building."
    },
    {
      icon: <Mail size={32} />,
      title: "Email Marketing",
      description: "Develop engaging email campaigns that nurture leads, drive conversions, and build customer loyalty."
    },
    {
      icon: <Users size={32} />,
      title: "Social Media Management",
      description: "Build your brand presence and engage your audience with strategic social media content and community management."
    },
    {
      icon: <MapPin size={32} />,
      title: "Google Business Profile",
      description: "Optimize your local presence to attract nearby customers and improve visibility in Google Maps and local search."
    },
    {
      icon: <Star size={32} />,
      title: "Reputation Management",
      description: "Monitor, manage, and improve your online reviews and ratings to build trust with potential customers."
    },
    {
      icon: <PenTool size={32} />,
      title: "Content Marketing",
      description: "Create high-quality blogs, articles, and guides that establish authority and drive organic traffic."
    },
    {
      icon: <Youtube size={32} />,
      title: "Video Marketing & YouTube SEO",
      description: "Develop engaging video content optimized for search to expand your reach and engagement."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business grow online and convert more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
