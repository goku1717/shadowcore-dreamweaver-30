
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
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
    </div>
  );
}
