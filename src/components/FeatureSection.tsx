
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  description, 
  icon,
  color
}) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className={`rounded-full ${color} w-16 h-16 flex items-center justify-center mb-4 mx-auto`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-center">{description}</p>
      </CardContent>
    </Card>
  );
};
