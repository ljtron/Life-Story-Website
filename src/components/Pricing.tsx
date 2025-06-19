import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Give the Gift of StoryWorth
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A meaningful gift that brings families closer together and preserves memories for generations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-burgundy-light text-burgundy text-sm font-medium px-3 py-1 rounded-full mb-4">
                Most Popular
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                One Year Subscription
              </h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-800">$99</span>
                <span className="text-gray-600 ml-1">USD</span>
              </div>
              <p className="text-gray-600 mb-8">
                Give a year of weekly questions, memories, and a beautiful keepsake book.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-burgundy mr-2 flex-shrink-0 mt-0.5" />
                  <span>Weekly questions for one year</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-burgundy mr-2 flex-shrink-0 mt-0.5" />
                  <span>Private sharing with family</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-burgundy mr-2 flex-shrink-0 mt-0.5" />
                  <span>One hardcover keepsake book</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-burgundy mr-2 flex-shrink-0 mt-0.5" />
                  <span>Free US shipping</span>
                </li>
              </ul>

              <button className="w-full bg-burgundy hover:bg-burgundy-dark text-white font-semibold py-3 px-8 rounded-full transition-colors">
                Give as a Gift
              </button>
            </div>
            <div className="md:w-1/2 bg-burgundy-light p-8 md:p-12 flex flex-col justify-center">
              <h4 className="font-serif text-xl text-burgundy font-semibold mb-4">
                What's Included
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-burgundy" />
                  </div>
                  <div>
                    <h5 className="font-medium text-burgundy">52 Thoughtful Questions</h5>
                    <p className="text-sm text-burgundy-dark mt-1">
                      One question emailed weekly to inspire meaningful stories
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-burgundy" />
                  </div>
                  <div>
                    <h5 className="font-medium text-burgundy">Digital Story Archive</h5>
                    <p className="text-sm text-burgundy-dark mt-1">
                      All stories saved securely and accessible to invited family members
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-burgundy" />
                  </div>
                  <div>
                    <h5 className="font-medium text-burgundy">Keepsake Book</h5>
                    <p className="text-sm text-burgundy-dark mt-1">
                      Beautifully designed hardcover book with all stories and photos
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-burgundy" />
                  </div>
                  <div>
                    <h5 className="font-medium text-burgundy">Easy to Use</h5>
                    <p className="text-sm text-burgundy-dark mt-1">
                      Simple email interface - no apps or accounts to manage
                    </p>
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-burgundy-dark text-sm">
                * Gift recipient will be notified on your selected date with instructions to get started
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-burgundy hover:text-burgundy-dark font-medium inline-flex items-center">
            Looking for corporate gifts? Contact us for special pricing
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;