
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  return (
    <div className="text-center py-8">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
      <p className="text-gray-600 mb-4">
        Your message has been sent successfully. We'll get back to you shortly.
      </p>
      <Button 
        onClick={onReset}
        className="bg-convertify-blue hover:bg-convertify-lightblue text-white"
      >
        Send Another Message
      </Button>
    </div>
  );
};

export default SuccessMessage;
