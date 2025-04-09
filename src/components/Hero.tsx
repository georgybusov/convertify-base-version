
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, CheckCircle, Star } from "lucide-react";
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
    <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-white via-convertify-gray/20 to-convertify-gray/40">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video 
          id="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
          className={`object-cover w-full h-full opacity-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-10' : ''}`}
          poster="/lovable-uploads/598ea263-4a27-4d70-96ee-e712e991b848.png"
        >
          <source src="https://cdn.pixabay.com/vimeo/328340528/computer-24149.mp4?width=1280&hash=f93db8958a992269468f18008ce8fbc2559ad16d" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-6 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-convertify-dark leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transform Your<br />Digital Presence & <span className="text-convertify-blue">Drive Growth</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <CheckCircle className="h-4 w-4 text-convertify-green" />
                <span className="text-sm font-medium">ROI Guaranteed</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Convertify helps businesses increase conversions, drive traffic, and generate more leads with data-driven marketing strategies tailored to your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <div className="p-1 bg-convertify-blue/10 rounded-full">
                  <span className="text-lg">🚀</span>
                </div>
                <span className="text-sm font-medium">More Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 bg-convertify-blue/10 rounded-full">
                  <span className="text-lg">💬</span>
                </div>
                <span className="text-sm font-medium">Better Engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 bg-convertify-blue/10 rounded-full">
                  <span className="text-lg">📈</span>
                </div>
                <span className="text-sm font-medium">ROI-Focused</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button 
                className="bg-convertify-blue hover:bg-convertify-lightblue text-white px-8 py-6 rounded-md text-lg shadow-md"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}  
              >
                <Calendar className="mr-2 h-5 w-5" />
                Get a Free Consultation
                <span className="ml-2 text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">Limited April Slots</span>
              </Button>
              <Button 
                variant="outline" 
                className="border-convertify-blue text-convertify-blue hover:bg-convertify-blue hover:text-white group px-8 py-6 rounded-md text-lg"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="relative">
              <div className="flex flex-col items-center">
                <img
                  src="/lovable-uploads/c18f52c7-8078-499e-ae62-00bc7eede43e.png"
                  alt="Convertify Logo"
                  className="w-full max-w-sm mx-auto mb-6"
                />
                <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                      <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                      <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">dashboard.convertify.ca</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 bg-convertify-blue/10 rounded-md w-3/4"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-convertify-blue/20 rounded-md flex items-center justify-center">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <div className="h-8 w-8 border-t-4 border-r-4 border-convertify-blue rounded-tr-lg transform rotate-45"></div>
                        </div>
                      </div>
                      <div className="h-20 bg-convertify-blue/10 rounded-md flex items-center justify-center">
                        <div className="h-10 w-3/4 bg-convertify-blue/30 rounded-md"></div>
                      </div>
                    </div>
                    <div className="h-32 bg-gray-100 rounded-md p-3">
                      <div className="h-4 w-3/4 bg-convertify-blue/20 rounded mb-2"></div>
                      <div className="h-3 w-full bg-gray-200 rounded mb-1"></div>
                      <div className="h-3 w-5/6 bg-gray-200 rounded mb-1"></div>
                      <div className="h-3 w-4/6 bg-gray-200 rounded mb-3"></div>
                      <div className="h-6 w-1/3 bg-convertify-blue/40 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-convertify-blue/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-8 md:h-12"
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
