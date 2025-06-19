import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2" dangerouslySetInnerHTML={{ __html: logo }} />
          <span className="text-burgundy font-serif text-xl font-semibold">StoryWorth</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#how-it-works" className="text-gray-700 hover:text-burgundy transition-colors">
                How It Works
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-700 hover:text-burgundy transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-gray-700 hover:text-burgundy transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-700 hover:text-burgundy transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-700 hover:text-burgundy transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <button className="bg-burgundy hover:bg-burgundy-dark text-white font-medium py-2 px-6 rounded-full transition-colors">
            Give as a Gift
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="#how-it-works"
                  className="block text-gray-700 hover:text-burgundy transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="block text-gray-700 hover:text-burgundy transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block text-gray-700 hover:text-burgundy transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block text-gray-700 hover:text-burgundy transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block text-gray-700 hover:text-burgundy transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li className="pt-2">
                <button className="w-full bg-burgundy hover:bg-burgundy-dark text-white font-medium py-2 px-6 rounded-full transition-colors">
                  Give as a Gift
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;