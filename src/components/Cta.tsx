
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Calendar } from "lucide-react";

const Cta = () => {
  const benefits = [
    "No long-term contracts required",
    "Transparent reporting & measurement",
    "Data-driven strategies that convert",
    "Affordable pricing with fast turnaround"
  ];

  // Google calendar scheduling link for georgy@convertify.ca
  const scheduleUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1PUwf_jLKvFLBaX5t1B-mxsO7YzsdDWXW-Tmex-l-X9dRNH96ysZgWNLbW6SBa4pBnABs1XRl0";

  return (
    <section className="py-20 bg-gradient-to-br from-convertify-blue to-convertify-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
            Ready to Transform Your Digital Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-8 text-center">
            Take the first step toward higher conversions, more traffic, and increased revenue.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-10 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <Check className="h-5 w-5 text-white bg-convertify-lightblue rounded-full p-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-convertify-blue hover:bg-gray-100 px-8 py-6 text-lg font-bold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white font-bold bg-transparent hover:bg-white/10 group px-8 py-6 text-lg"
              onClick={() => window.location.href = "/schedule"}
            >
              <span className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
