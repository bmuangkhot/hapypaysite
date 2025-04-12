
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MessageCircle, Wallet, UsersIcon, CreditCard, ArrowRightLeft, ArrowRight } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { FeatureSection } from "@/components/FeatureSection";
import { ChatBot } from "@/components/ChatBot";
import { Footer } from "@/components/Footer";
import { AuthDialog } from "@/components/AuthDialog";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  
  // Features data for our reusable component
  const features = [
    {
      title: "Digital Wallet",
      description: "Store, send, and receive money with just a few taps. Our eWallet is secure and convenient for all your financial needs.",
      icon: <Wallet className="h-12 w-12 text-white" />,
      color: "bg-red-600 dark:bg-red-700",
    },
    {
      title: "P2P Transfer",
      description: "Send money to anyone, anywhere, instantly. No fees, no waiting, just simple person-to-person transfers.",
      icon: <UsersIcon className="h-12 w-12 text-white" />,
      color: "bg-blue-600 dark:bg-blue-700",
    },
    {
      title: "P2M Payments",
      description: "Pay merchants directly from your phone. Fast, secure, and accepted at millions of locations worldwide.",
      icon: <CreditCard className="h-12 w-12 text-white" />,
      color: "bg-yellow-500 dark:bg-yellow-600",
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-100 via-amber-200 to-amber-100 dark:from-gray-900 dark:via-amber-900/30 dark:to-gray-800">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Banking Made <span className="text-red-600 dark:text-red-500">Simple</span> for Everyone
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
                Send money, make payments, and manage your finances with our secure, fast, and easy-to-use platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <AuthDialog type="signup">
                  <Button size="lg" className="font-medium bg-red-600 hover:bg-red-700">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </AuthDialog>
                <AuthDialog type="login">
                  <Button size="lg" variant="outline" className="font-medium border-blue-600 text-blue-600 hover:bg-blue-600/10">
                    Login to Account
                  </Button>
                </AuthDialog>
              </div>
            </div>
            <div className="relative w-full max-w-md">
              <div className="relative z-10 flex justify-center">
                <img 
                  src="/lovable-uploads/d29133b0-7604-47ac-9ce0-0b4d8c5f012e.png" 
                  alt="HappyPay Logo" 
                  className="w-72 h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Financial Solutions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our range of innovative financial services designed to make managing your money seamless and secure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureSection key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-amber-50/80 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Simple, secure, and straightforward - start using our platform in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-md bg-white/90 dark:bg-gray-800/90">
              <CardContent className="pt-6">
                <div className="rounded-full bg-red-600/90 text-white w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Create an Account</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Sign up for free in just a few minutes with your email address
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md bg-white/90 dark:bg-gray-800/90">
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-600/90 text-white w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Link Payment Methods</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Connect your bank account or cards securely to your eWallet
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md bg-white/90 dark:bg-gray-800/90">
              <CardContent className="pt-6">
                <div className="rounded-full bg-yellow-500/90 text-white w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Send & Receive Money</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Start making transfers and payments instantly with no delays
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <AuthDialog type="signup">
              <Button size="lg" className="font-medium bg-red-600 hover:bg-red-700">
                Get Started Today
              </Button>
            </AuthDialog>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your finances?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied users who have transformed how they manage money
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AuthDialog type="signup">
              <Button size="lg" variant="secondary" className="font-medium bg-white text-red-600 hover:bg-gray-100">
                Create Free Account
              </Button>
            </AuthDialog>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-red-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Chatbot Widget */}
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
    </div>
  );
};

export default Index;
