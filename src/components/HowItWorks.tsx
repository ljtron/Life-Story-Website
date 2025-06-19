import React from 'react';
import { MessageSquare, BookOpen, Gift } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-10 h-10 text-burgundy" />,
    title: 'Weekly Questions',
    description: 'Each week, StoryWorth emails your loved one a thought-provoking question about their life.',
  },
  {
    icon: <BookOpen className="w-10 h-10 text-burgundy" />,
    title: 'Share Memories',
    description: 'They reply with stories that you\'ve never heard before, which are shared with you and archived for safekeeping.',
  },
  {
    icon: <Gift className="w-10 h-10 text-burgundy" />,
    title: 'Printed Book',
    description: 'After one year, we print their stories in a beautiful hardcover book, preserving their memories for generations.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works\" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">How StoryWorth Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple three-step process makes it easy to capture and preserve your family's most cherished memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-cream rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-cream-dark rounded-full">{step.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className={`mt-6 ${index < steps.length - 1 ? 'hidden md:block' : 'hidden'}`}>
                <div className="h-1 w-16 bg-burgundy-light transform rotate-90 md:rotate-0 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-burgundy hover:bg-burgundy-dark text-white font-semibold py-3 px-8 rounded-full transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;