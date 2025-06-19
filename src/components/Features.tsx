import React from 'react';
import { Star, Heart, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <Star className="w-8 h-8 text-burgundy" />,
    title: 'Thoughtful Questions',
    description: 'We\'ve crafted hundreds of thought-provoking questions designed to bring out meaningful stories and memories.'
  },
  {
    icon: <Heart className="w-8 h-8 text-burgundy" />,
    title: 'Meaningful Connection',
    description: 'Create deeper relationships as you discover new stories about the people you love.'
  },
  {
    icon: <Clock className="w-8 h-8 text-burgundy" />,
    title: 'Weekly Reminders',
    description: 'We handle all the scheduling and reminders, making it easy to stay consistent throughout the year.'
  },
  {
    icon: <Shield className="w-8 h-8 text-burgundy" />,
    title: 'Private & Secure',
    description: 'Your stories belong to you. We keep them private and secure, sharing only with those you choose.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features\" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Families Love StoryWorth
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how StoryWorth helps preserve memories and strengthen family bonds across generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex p-6 bg-white rounded-lg shadow-sm">
              <div className="mr-4 mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                  alt="StoryWorth book"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Beautifully Bound Keepsake
                </h3>
                <p className="text-gray-600 mb-6">
                  After a year of collecting stories, we compile them into a beautiful hardcover book. It's a precious 
                  family keepsake that can be passed down for generations.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="mr-2 text-burgundy">✓</span>
                    <span>High-quality hardcover book</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-burgundy">✓</span>
                    <span>Up to 480 pages of stories</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-burgundy">✓</span>
                    <span>Include photos alongside stories</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-burgundy">✓</span>
                    <span>Professional layout and design</span>
                  </li>
                </ul>
                <button className="self-start bg-burgundy hover:bg-burgundy-dark text-white font-medium py-2 px-6 rounded-full transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;