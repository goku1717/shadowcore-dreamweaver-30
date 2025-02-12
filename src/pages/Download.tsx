
import { Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';

export default function DownloadPage() {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/94778068975', '_blank');
  };

  const handleDownload = () => {
    window.open('https://your-download-link.com/shadowcore-free.iso', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Download ShadowCore OS</h2>
            <p className="text-gray-400 mb-8">
              Experience the power of ShadowCore OS with our free version. Get a taste of enhanced performance, 
              reduced bloatware, and optimized system resources. Upgrade to premium for full features and 
              customization options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleDownload}
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Version
              </Button>
              <Button 
                onClick={handleWhatsAppContact}
                variant="outline" 
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact for Premium
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Free version includes basic optimizations and essential features
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
