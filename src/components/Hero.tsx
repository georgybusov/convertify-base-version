
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  useEffect(() => {
    const videoElement = document.getElementById('hero-video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-convertly-dark/20">
        <video 
          id="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
          className={`object-cover w-full h-full opacity-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-20' : ''}`}
          poster="/lovable-uploads/e4152fc0-870f-4f7c-8338-5e2637f79240.png"
        >
          <source src="https://cdn.pixabay.com/vimeo/328340528/computer-24149.mp4?width=1280&hash=f93db8958a992269468f18008ce8fbc2559ad16d" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content overlay */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-heading leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transform Your Digital Presence & Drive Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Convertly helps businesses increase conversions, drive traffic, and generate more leads with data-driven marketing strategies tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button 
                className="bg-convertly-blue hover:bg-convertly-lightblue text-white px-8 py-6 rounded-md text-lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}  
              >
                Get a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                className="border-convertly-blue text-convertly-blue hover:bg-convertly-blue hover:text-white group px-8 py-6 rounded-md text-lg"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="relative">
              <img
                src="/lovable-uploads/e4152fc0-870f-4f7c-8338-5e2637f79240.png"
                alt="Convertly Growth Suite"
                className="w-full max-w-md mx-auto"
              />
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-convertly-blue/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,123.09,111.94,181.83,96.57,206.76,87.11,232.37,78.57,258,72.94c37.67-8.86,76.14-20.67,113.39-16.5Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
