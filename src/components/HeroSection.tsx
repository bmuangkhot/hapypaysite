
import React from "react";
import { Button } from "@/components/ui/button";
import { AuthDialog } from "@/components/AuthDialog";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
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
  );
};
