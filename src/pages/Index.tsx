
import { Rocket, Zap, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Stats } from '@/components/Stats';
import { Feature } from '@/components/Feature';
import { PricingCard } from '@/components/PricingCard';
import { FAQ } from '@/components/FAQ';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            It's Time To Change
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Experience a new level of performance and security.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Need More than this?
          </Button>
          
          <div className="mt-16">
            <Stats />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">About ShadowCore OS</h2>
            <p className="text-gray-400 mb-8">
              ShadowCore OS is a modified, lightweight, and optimized version of Windows. 
              It is over three times lighter than the original Microsoft Windows, 
              with performance improvements exceeding 30%. It comes completely free of bloatware,
              without Microsoft Windows Defender, and without Microsoft Windows updates.
            </p>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              Go to Premium
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Ultimate Subscription"
              price="5.00"
              features={[
                "Discord Ultimate Role",
                "Access to all the private ultimate AtomOS Builds",
                "Access to all the private ultimate AtomOS Tweaks",
                "Access to the Atom Tool Box"
              ]}
            />
            <PricingCard
              title="Extreme"
              price="9.99"
              features={[
                "Windows Settings Tweaks",
                "Cpu, Ram, Gpu, Usb Tweaks",
                "Gpu Over Clocking",
                "Custom Windows build make specially for you",
                "Rebranded AtomOS Builds with your name, files, settings and everything"
              ]}
              isPopular
            />
            <PricingCard
              title="Ultimate"
              price="19.99"
              features={[
                "Windows Settings Tweaks",
                "Cpu, Ram, Gpu, Usb Tweaks",
                "Gpu Over Clocking",
                "Hidden Box Tweaks",
                "2 Custom Windows builds make specially for you",
                "2 Rebranded AtomOS Builds with your name, files, settings and everything"
              ]}
            />
          </div>
          <div className="text-center mt-8">
            <Button variant="link" className="text-gray-400 hover:text-white">
              See all features
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">
            Questions and Answers
          </h2>
          <FAQ />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>© 2024 ShadowCore OS. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
