
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="bg-[#4A1FB8] py-16 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Boost Your Conversions?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Get in touch with our team today to discuss how we can help you improve
          your conversion rates and grow your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/schedule">
            <Button
              className="w-full sm:w-auto px-8 py-6 text-lg bg-white text-[#4A1FB8] hover:bg-gray-100"
            >
              Schedule a Call
            </Button>
          </Link>
          <a href="mailto:georgy@convertify.ca">
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg text-white border-white hover:bg-white/10"
            >
              Email Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
