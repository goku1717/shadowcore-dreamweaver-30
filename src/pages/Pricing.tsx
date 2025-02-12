
import { Navbar } from '@/components/Navbar';
import { PricingCard } from '@/components/PricingCard';
import { Button } from '@/components/ui/button';

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
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
    </div>
  );
}
