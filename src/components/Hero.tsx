import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Preserve your family stories forever
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              StoryWorth makes it easy to share stories that will be cherished for generations.
              Each week, we email thoughtful questions to loved ones to spark meaningful memories.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
              <button className="w-full md:w-auto bg-burgundy hover:bg-burgundy-dark text-white font-semibold py-3 px-8 rounded-full transition-colors">
                Give as a Gift
              </button>
              <button className="w-full md:w-auto bg-transparent border-2 border-burgundy text-burgundy hover:bg-burgundy-light font-semibold py-3 px-8 rounded-full transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7014080/pexels-photo-7014080.jpeg"
                alt="Family sharing stories"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="italic text-sm text-gray-600">
                  "StoryWorth brought our family closer by sharing stories we never knew."
                </p>
                <p className="font-medium mt-2 text-gray-800">— Sarah K.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;