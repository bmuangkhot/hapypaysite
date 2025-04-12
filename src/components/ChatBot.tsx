
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal, User, Bot } from "lucide-react";

interface Message {
  content: string;
  isBot: boolean;
}

interface ChatBotProps {
  onClose: () => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hi there! I'm your HappyPay assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages((prev) => [...prev, { content: input, isBot: false }]);
    const userInput = input;
    setInput("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      setMessages((prev) => [...prev, { content: botResponse, isBot: true }]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
      return "Hello! How can I assist you with FinPay today?";
    } else if (input.includes("ewallet") || input.includes("wallet")) {
      return "Our eWallet allows you to store money, make payments, and send money to friends and family. Would you like to learn more about how to set it up?";
    } else if (input.includes("p2p") || input.includes("transfer") || input.includes("send money")) {
      return "Our P2P transfer service allows you to send money to anyone with a FinPay account or even just a phone number. It's instant and free!";
    } else if (input.includes("p2m") || input.includes("merchant") || input.includes("pay store")) {
      return "With P2M payments, you can pay at millions of merchants worldwide. Just scan a QR code or enter the merchant ID to complete your payment.";
    } else if (input.includes("fee") || input.includes("charge") || input.includes("cost")) {
      return "Basic transfers are free! For premium services like international transfers, there's a small fee of 1-2% depending on the destination.";
    } else if (input.includes("sign up") || input.includes("register") || input.includes("create account")) {
      return "You can sign up by clicking the 'Sign Up' button on the top right of our website. The process takes less than 2 minutes!";
    } else if (input.includes("login") || input.includes("sign in")) {
      return "You can log in by clicking the 'Login' button on the top right of our website. If you've forgotten your password, there's also an option to reset it.";
    } else {
      return "I'm not sure I understand. Could you please rephrase your question about our eWallet, P2P transfers, or P2M payment services?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="text-primary h-5 w-5" />
          <h3 className="font-semibold">HappyPay Assistant</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Close
        </Button>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`flex gap-2 max-w-[80%] ${
                  message.isBot
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-primary text-primary-foreground"
                } rounded-lg px-4 py-2`}
              >
                {message.isBot && <Bot className="h-5 w-5 mt-1 flex-shrink-0" />}
                <p className="text-sm">{message.content}</p>
                {!message.isBot && <User className="h-5 w-5 mt-1 flex-shrink-0" />}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me..."
            className="flex-1"
          />
          <Button onClick={handleSend} disabled={!input.trim()}>
            <SendHorizonal className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
        <p className="text-xs text-center mt-2 text-gray-500">
          Our assistant can answer questions about our services
        </p>
      </div>
    </div>
  );
};
