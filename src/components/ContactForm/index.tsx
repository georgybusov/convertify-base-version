
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import ContactInfo from "./ContactInfo";
import SuccessMessage from "./SuccessMessage";
import ContactFormFields from "./ContactFormFields";
import type { FormData } from "./ContactFormFields";

// Replace these with your actual Email.js credentials
const EMAILJS_SERVICE_ID = "service_id"; // You'll need to replace this with your actual service ID
const EMAILJS_TEMPLATE_ID = "template_id"; // You'll need to replace this with your actual template ID
const EMAILJS_USER_ID = "user_id"; // You'll need to replace this with your actual user ID

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        service: formData.service || "Not selected",
        message: formData.message,
        to_email: "info@convertify.ca"
      };
      
      // Send email using Email.js
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll be in touch with you shortly.",
        duration: 5000,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setIsSubmitting(false);
      
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-convertify-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              {isSubmitted ? (
                <SuccessMessage onReset={resetForm} />
              ) : (
                <ContactFormFields 
                  formData={formData}
                  isSubmitting={isSubmitting}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
