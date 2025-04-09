
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, CheckCircle, Star, Award } from "lucide-react";
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
    <section className="relative py-6 md:py-10 overflow-hidden bg-gradient-to-br from-white via-convertify-gray/20 to-convertify-gray/40">
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
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center lg:text-left text-convertify-dark leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transform Your<br />Digital Presence & <span className="text-convertify-blue">Drive Growth</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <CheckCircle className="h-4 w-4 text-convertify-green" />
                <span className="text-sm font-medium">ROI Guaranteed</span>
              </div>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <Award className="h-4 w-4 text-convertify-blue" />
                <span className="text-sm font-medium">14 Years Experience</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 text-center lg:text-left animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Convertify helps businesses increase conversions, drive traffic, and generate more leads with data-driven marketing strategies tailored to your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="p-1 bg-convertify-blue/10 rounded-full">
                  <span className="text-lg">🚀</span>
                </div>
                <span className="text-sm font-medium">More Leads</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="p-1 bg-convertify-blue/10 rounded-full">
                  <span className="text-lg">💬</span>
                </div>
                <span className="text-sm font-medium">Better Engagement</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="p-1 bg-convertify-blue/10 rounded-full">
                  <span className="text-lg">📈</span>
                </div>
                <span className="text-sm font-medium">ROI-Focused</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
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
          
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-convertify-blue to-convertify-lightblue rounded-xl blur-md opacity-50"></div>
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Marketing dashboard analytics" 
                  className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-pulse-blue">
                <div className="bg-convertify-blue text-white rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m22 8-6 4 6 4V8Z"/><rect width="16" height="12" x="2" y="6" rx="2"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
