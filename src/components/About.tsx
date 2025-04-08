
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, Users, Target, BadgeCheck, 
  Zap, LineChart, ChartBar, BarChart 
} from "lucide-react";

const About = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-5 w-5 text-convertly-blue" />,
      text: "Increase conversion rates"
    },
    {
      icon: <Users className="h-5 w-5 text-convertly-blue" />,
      text: "Drive qualified traffic"
    },
    {
      icon: <Target className="h-5 w-5 text-convertly-blue" />,
      text: "Generate more leads"
    },
    {
      icon: <BadgeCheck className="h-5 w-5 text-convertly-blue" />,
      text: "Build brand credibility"
    },
    {
      icon: <Zap className="h-5 w-5 text-convertly-blue" />,
      text: "Improve engagement"
    },
    {
      icon: <LineChart className="h-5 w-5 text-convertly-blue" />,
      text: "Grow revenue"
    },
    {
      icon: <ChartBar className="h-5 w-5 text-convertly-blue" />,
      text: "Measurable results"
    },
    {
      icon: <BarChart className="h-5 w-5 text-convertly-blue" />,
      text: "Data-driven strategies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-convertly-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Convertly?</h2>
            <p className="text-gray-700 mb-6">
              At Convertly, we focus on delivering measurable results through data-driven marketing strategies. We don't just drive traffic – we convert visitors into customers and customers into advocates.
            </p>
            <p className="text-gray-700 mb-6">
              Our approach combines deep industry expertise, ongoing optimization, and transparent reporting to ensure your marketing investment delivers maximum returns.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  {benefit.icon}
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-convertly-blue hover:bg-convertly-lightblue text-white">
              Learn More About Our Approach
            </Button>
          </div>
          
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Results Speak for Themselves</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-convertly-blue pl-4 py-2">
                <p className="italic text-gray-600 mb-2">
                  "Convertly transformed our online presence. Our conversion rates increased by 45% and we've seen a significant boost in qualified leads."
                </p>
                <p className="font-semibold">— Marketing Director, E-commerce Company</p>
              </div>
              
              <div className="border-l-4 border-convertly-blue pl-4 py-2">
                <p className="italic text-gray-600 mb-2">
                  "The SEO and content strategy Convertly implemented helped us rank for competitive keywords and increased our organic traffic by 78% in just 6 months."
                </p>
                <p className="font-semibold">— CEO, SaaS Startup</p>
              </div>
              
              <div className="border-l-4 border-convertly-blue pl-4 py-2">
                <p className="italic text-gray-600 mb-2">
                  "Their expertise in PPC and social media advertising has delivered an impressive 3.2x ROAS. The strategic approach and continuous optimization make all the difference."
                </p>
                <p className="font-semibold">— Owner, Retail Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
