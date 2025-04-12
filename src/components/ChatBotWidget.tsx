
import React from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { ChatBot } from "@/components/ChatBot";

export const ChatBotWidget: React.FC = () => {
  const [chatOpen, setChatOpen] = React.useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Drawer open={chatOpen} onOpenChange={setChatOpen}>
        <DrawerTrigger asChild>
          <Button 
            size="icon" 
            className="h-14 w-14 rounded-full shadow-lg bg-yellow-500 hover:bg-yellow-600"
            onClick={() => {
              if (!chatOpen) {
                toast({
                  title: "Chat Assistant",
                  description: "Ask me anything about our services!",
                });
              }
            }}
          >
            <MessageCircle size={24} className="text-white" />
            <span className="sr-only">Ask me</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[70vh] max-w-md mx-auto rounded-t-xl">
          <ChatBot onClose={() => setChatOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};
