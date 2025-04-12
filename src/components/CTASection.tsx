
import React from "react";
import { Button } from "@/components/ui/button";
import { AuthDialog } from "@/components/AuthDialog";

export const CTASection: React.FC = () => {
  return (
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
  );
};
