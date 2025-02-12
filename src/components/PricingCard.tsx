
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <div className={`glass-card p-6 rounded-xl ${isPopular ? 'border-blue-500/50 scale-105' : ''}`}>
      {isPopular && (
        <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-gray-400 text-sm">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="default" className="w-full bg-blue-500 hover:bg-blue-600">
        Choose Plan
      </Button>
    </div>
  );
}
