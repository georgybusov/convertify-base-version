
import React, { useState } from 'react';
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !name || !email) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your backend or email service
      // For now, we'll simulate a successful submission
      console.log("Appointment scheduled:", {
        name,
        email,
        phone,
        date: format(date, "MMMM do, yyyy"),
        time
      });
      
      // Email would be sent with this information to georgy@convertify.ca
      
      setTimeout(() => {
        toast({
          title: "Appointment scheduled!",
          description: `Your appointment is set for ${format(date, "MMMM do, yyyy")} at ${time}. We'll be in touch soon!`,
        });
        
        // Reset form
        setDate(undefined);
        setTime(undefined);
        setName("");
        setEmail("");
        setPhone("");
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4A1FB8] mb-4">Schedule a Call</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book a convenient time to discuss how Convertify can help grow your business and boost your conversions.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A1FB8] focus:border-[#4A1FB8]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A1FB8] focus:border-[#4A1FB8]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A1FB8] focus:border-[#4A1FB8]"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Date *</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => 
                          date < new Date(new Date().setHours(0, 0, 0, 0)) // Disable past dates
                        }
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Time *</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !time && "text-muted-foreground"
                        )}
                        disabled={!date}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {time ? time : <span>Pick a time</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto" align="start">
                      <div className="grid grid-cols-2 gap-2 p-2 max-h-[300px] overflow-y-auto">
                        {timeSlots.map((slot) => (
                          <Button
                            key={slot}
                            variant="outline"
                            onClick={() => {
                              setTime(slot);
                            }}
                            className={cn(
                              "justify-start font-normal",
                              time === slot && "bg-[#4A1FB8] text-white hover:bg-[#4A1FB8]/90"
                            )}
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-[#4A1FB8] hover:bg-[#3A169A] text-white font-semibold py-3 px-6 rounded-md transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Scheduling..." : "Schedule Call"}
            </Button>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Schedule;
