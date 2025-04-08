
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
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to ensure your marketing campaigns deliver consistent results and continuous improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-4 w-16 h-16 rounded-full bg-convertly-blue flex items-center justify-center">
                {step.icon}
              </div>
              <div className="flex items-start mb-2">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-convertly-blue text-white flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="ml-3 text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
