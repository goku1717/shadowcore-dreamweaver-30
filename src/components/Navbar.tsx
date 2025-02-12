
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gradient">ShadowCore OS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</Link>
            <Link to="/download" className="text-sm text-gray-300 hover:text-white transition-colors">Download</Link>
            <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link>
            <Link to="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <Link to="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</Link>
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
            <Link to="/features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</Link>
            <Link to="/download" className="text-sm text-gray-300 hover:text-white transition-colors">Download</Link>
            <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link>
            <Link to="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <Link to="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</Link>
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
