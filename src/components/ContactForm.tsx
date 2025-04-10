
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your backend or email service
      // For now, we'll simulate a successful submission
      console.log("Contact form submitted:", {
        name,
        email,
        message,
        recipientEmail: "georgy@convertify.ca"
      });
      
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        
        // Reset form
        setName("");
        setEmail("");
        setMessage("");
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
    <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
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
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4A1FB8] focus:border-[#4A1FB8]"
            required
          ></textarea>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-[#4A1FB8] hover:bg-[#3A169A] text-white font-semibold py-3 px-6 rounded-md transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
