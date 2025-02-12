
import { Rocket, Zap, Lock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Feature } from '@/components/Feature';

export default function Features() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              icon={Rocket}
              title="Much better performance"
              description="Enjoy faster and stronger performance by more than 30%"
            />
            <Feature
              icon={Zap}
              title="Lighter than light"
              description="Get lighter than light Windows with Zero bloatwares and less than 1.4GB RAM usage"
            />
            <Feature
              icon={Lock}
              title="Privacy in chloride"
              description="Completely get rid of Windows defender. With malwarebytes Preinstalled"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
