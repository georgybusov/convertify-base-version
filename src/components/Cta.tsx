
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="py-20 bg-convertly-blue">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Digital Marketing?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Take the first step toward higher conversions, more traffic, and increased revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-white text-convertly-blue hover:bg-gray-100 px-8 py-6 text-lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Now
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 group px-8 py-6 text-lg"
          >
            Schedule a Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
