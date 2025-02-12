
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="glass-card p-6 rounded-xl transition-all duration-300 hover:translate-y-[-4px]">
      <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
