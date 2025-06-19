import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import logo from '../assets/logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="mr-2 filter brightness-0 invert" dangerouslySetInnerHTML={{ __html: logo }} />
              <span className="font-serif text-xl font-semibold">StoryWorth</span>
            </div>
            <p className="text-gray-400 mb-4">
              Preserving your family's stories and strengthening bonds across generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-medium text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Gift Cards</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Examples</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-medium text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-medium text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for tips on preserving family stories and special offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-burgundy"
              />
              <button
                type="submit"
                className="w-full bg-burgundy hover:bg-burgundy-dark text-white font-medium py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} StoryWorth Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;