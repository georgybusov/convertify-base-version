
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  Send,
  Check,
  ArrowLeft
} from "lucide-react";

const Schedule = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "1:00 PM", "2:00 PM", 
    "3:00 PM", "4:00 PM"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (time: string) => {
    setTimeSlot(time);
  };

  const handleNextStep = () => {
    if (step === 1 && !date) {
      toast({
        title: "Please select a date",
        description: "You need to select a date before proceeding.",
        variant: "destructive"
      });
      return;
    }

    if (step === 2 && !timeSlot) {
      toast({
        title: "Please select a time",
        description: "You need to select a time slot before proceeding.",
        variant: "destructive"
      });
      return;
    }

    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission - in a real app, you would send this data to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Appointment scheduled!",
        description: "We'll be in touch with you shortly to confirm your appointment.",
        duration: 5000,
      });
    }, 1500);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Select a Date</h3>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => {
                    // Disable past dates and weekends
                    const now = new Date();
                    now.setHours(0, 0, 0, 0);
                    const day = date.getDay();
                    return date < now || day === 0 || day === 6;
                  }}
                  className="rounded-md border"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleNextStep}
                className="bg-convertify-blue hover:bg-convertify-lightblue"
              >
                Next Step
              </Button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Select a Time</h3>
                {date && (
                  <div className="flex items-center bg-convertify-gray px-3 py-1 rounded-md">
                    <CalendarIcon className="h-4 w-4 mr-2 text-convertify-blue" />
                    <span className="text-sm font-medium">
                      {format(date, "EEEE, MMMM d, yyyy")}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`flex items-center justify-center px-4 py-3 rounded-md border transition-colors ${
                      timeSlot === time 
                        ? "bg-convertify-blue text-white border-convertify-blue" 
                        : "bg-white hover:border-convertify-blue text-gray-700 border-gray-200"
                    }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    {time}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrevStep}
                className="border-convertify-blue text-convertify-blue"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button 
                onClick={handleNextStep}
                className="bg-convertify-blue hover:bg-convertify-lightblue"
              >
                Next Step
              </Button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Your Information</h3>
              
              <div className="bg-convertify-gray/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-convertify-blue" />
                    <span className="text-sm font-medium">
                      {date ? format(date, "EEEE, MMMM d, yyyy") : ""}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-convertify-blue" />
                    <span className="text-sm font-medium">{timeSlot}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">30-minute consultation call with our team</p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-8 bg-white rounded-lg shadow-md">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Appointment Scheduled!</h4>
                  <p className="text-gray-600 mb-6">
                    We've reserved your appointment for:
                    <span className="block font-medium mt-2">
                      {date ? format(date, "EEEE, MMMM d, yyyy") : ""} at {timeSlot}
                    </span>
                  </p>
                  <p className="text-gray-600 mb-4">
                    A confirmation has been sent to your email. We'll be in touch soon to confirm your appointment.
                  </p>
                  <Button 
                    onClick={() => window.location.href = "/"}
                    className="bg-convertify-blue hover:bg-convertify-lightblue text-white"
                  >
                    Return to Home
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <div className="mt-1">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <div className="mt-1">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <div className="mt-1">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your phone number"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <div className="mt-1">
                        <Textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Tell us about what you'd like to discuss"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handlePrevStep}
                      className="border-convertify-blue text-convertify-blue"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-convertify-blue hover:bg-convertify-lightblue"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Scheduling...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Schedule Appointment
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section className="py-12 bg-gradient-to-br from-convertify-blue to-convertify-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Schedule a Call</h1>
              <p className="text-xl opacity-90">
                Book a free 30-minute consultation to discuss how we can help grow your business
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {renderStepContent()}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
