
import React from "react";
import { Button } from "@/components/ui/button";
import { AuthDialog } from "@/components/AuthDialog";
import { Smartphone, Apple, Download } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to simplify your finances?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of satisfied users who have transformed how they manage money
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <AuthDialog type="signup">
            <Button size="lg" variant="secondary" className="font-medium bg-white text-red-600 hover:bg-gray-100">
              Create Free Account
            </Button>
          </AuthDialog>
          <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-red-600">
            Learn More
          </Button>
        </div>
        
        {/* Mobile App Download Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Get the HappyPay Mobile App</h3>
          <p className="mb-6 opacity-90">Access your finances anytime, anywhere with our mobile application</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="flex items-center gap-2 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors">
              <Apple size={24} />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            
            <a href="#" className="flex items-center gap-2 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors">
              <Smartphone size={24} />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          
          <p className="mt-4 text-sm opacity-80">
            Scan the QR code or click on the buttons above to download our app
          </p>
        </div>
      </div>
    </section>
  );
};
