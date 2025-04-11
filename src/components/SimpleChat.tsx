
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, X, MessageSquare } from "lucide-react";
import { toast } from "sonner";

// Simple predefined answers for common questions
const FAQ_ANSWERS: Record<string, string> = {
  "what services do you offer": "We offer a range of digital marketing services including CRO (Conversion Rate Optimization), SEO, PPC, email marketing, social media management, and content marketing.",
  "how much do your services cost": "Our services are priced based on your specific needs and goals. We offer customized packages starting from $1,500/month. Contact us for a free consultation to get a detailed quote.",
  "what is your turnaround time": "We pride ourselves on having the quickest turnaround time in the industry. Most projects begin implementation within 48 hours of approval.",
  "do you offer free consultations": "Yes! We offer free 30-minute consultations to discuss your needs and how we can help your business grow.",
  "what industries do you work with": "We work with businesses across various industries including e-commerce, SaaS, healthcare, finance, education, and more.",
  "how do you measure results": "We use data-driven analytics to track KPIs relevant to your business goals, including conversion rates, traffic growth, engagement metrics, and ROI.",
  "what is cro": "CRO (Conversion Rate Optimization) is the systematic process of increasing the percentage of website visitors who take desired actions on your site, such as making a purchase or filling out a contact form.",
};

const SimpleChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi there! How can I help you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { text: inputValue, isUser: true };
    setMessages([...messages, userMessage]);
    
    // Find answer or use default response
    setTimeout(() => {
      const userQuestion = inputValue.toLowerCase();
      let botResponse = "I don't have the answer to that specific question. Please contact us directly for more information!";
      
      // Check if the question contains any of our FAQ keywords
      for (const [keyword, answer] of Object.entries(FAQ_ANSWERS)) {
        if (userQuestion.includes(keyword) || keyword.includes(userQuestion)) {
          botResponse = answer;
          break;
        }
      }
      
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
    }, 500);
    
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat toggle button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)} 
          className="rounded-full h-14 w-14 bg-convertify-blue hover:bg-convertify-lightblue shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 sm:w-96 h-96 border border-gray-200">
          {/* Chat header */}
          <div className="bg-convertify-blue text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Convertify Chat</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-white hover:bg-convertify-lightblue">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser 
                      ? "bg-convertify-blue text-white rounded-tr-none" 
                      : "bg-gray-100 text-gray-800 rounded-tl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Input area */}
          <div className="border-t p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-convertify-blue"
              />
              <Button 
                onClick={handleSend} 
                className="bg-convertify-blue hover:bg-convertify-lightblue"
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-xs text-gray-500 mt-1">Ask about our services, pricing, or process</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleChat;
