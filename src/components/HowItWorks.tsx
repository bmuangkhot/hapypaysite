
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AuthDialog } from "@/components/AuthDialog";

export const HowItWorks: React.FC = () => {
  return (
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
  );
};
