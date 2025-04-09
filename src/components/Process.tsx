
import { 
  Search, LineChart, Target, Settings, 
  BarChart2, CheckCircle 
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: "Discovery & Analysis",
      description: "We start by understanding your business goals, target audience, and current marketing performance to identify opportunities for growth."
    },
    {
      icon: <LineChart className="h-10 w-10 text-white" />,
      title: "Strategy Development",
      description: "Based on our analysis, we create a customized marketing strategy aligned with your objectives and designed to maximize ROI."
    },
    {
      icon: <Target className="h-10 w-10 text-white" />,
      title: "Implementation",
      description: "Our team executes the strategy with attention to detail, ensuring all elements work together to drive results."
    },
    {
      icon: <Settings className="h-10 w-10 text-white" />,
      title: "Optimization",
      description: "We continuously monitor performance and make data-driven adjustments to improve results and efficiency."
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-white" />,
      title: "Reporting & Analysis",
      description: "Receive comprehensive reports with clear insights into performance, ROI, and opportunities for further improvement."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Scale & Grow",
      description: "As results come in, we refine and scale successful strategies to continue driving growth and maximizing your marketing investment."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-white to-convertify-gray/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a data-driven methodology to ensure your marketing campaigns deliver consistent results and continuous improvement.
          </p>
          
          <div className="w-20 h-1 bg-convertify-blue mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-convertify-blue to-convertify-lightblue flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <span className="w-8 h-8 rounded-full border-2 border-convertify-blue text-convertify-blue font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              <div className="w-0 group-hover:w-full h-1 bg-convertify-blue mt-4 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
