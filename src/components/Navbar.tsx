
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gradient">ShadowCore OS</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#download" className="text-sm text-gray-300 hover:text-white transition-colors">Download</a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</a>
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 py-4">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#download" className="text-sm text-gray-300 hover:text-white transition-colors">Download</a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</a>
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
