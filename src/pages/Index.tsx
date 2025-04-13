
import React from "react";
import { NavBar } from "@/components/NavBar";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { CTASection } from "@/components/CTASection";
import { ChatBotWidget } from "@/components/ChatBotWidget";
import { ContactForm } from "@/components/ContactForm";
import { Wallet, UsersIcon, CreditCard } from "lucide-react";

const Index = () => {
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
      <HeroSection />

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
      <HowItWorks />
      
      {/* Contact Form */}
      <ContactForm />
      
      {/* CTA Section */}
      <CTASection />

      <Footer />

      {/* Chatbot Widget */}
      <ChatBotWidget />
    </div>
  );
};

export default Index;
