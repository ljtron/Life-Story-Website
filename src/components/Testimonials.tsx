import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "StoryWorth has been an incredible gift for my family. My father was hesitant at first, but now he looks forward to answering the weekly questions. We've learned so much about his childhood and life experiences that we never knew before.",
    author: "Jennifer T.",
    relation: "Daughter",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    text: "I bought StoryWorth for my grandmother's 80th birthday. The questions have sparked memories she hadn't shared in decades. The hardcover book we received at the end of the year is something our entire family will treasure forever.",
    author: "Michael R.",
    relation: "Grandson",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    text: "As someone who lives far from my parents, StoryWorth has been a beautiful way to stay connected. I look forward to reading my mother's stories each week, and it's prompted many meaningful conversations that wouldn't have happened otherwise.",
    author: "Sarah L.",
    relation: "Daughter",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hear From Our Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how StoryWorth has helped families around the world capture their precious memories.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-cream rounded-xl shadow-sm p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-10">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-burgundy text-white p-2 rounded-full shadow-sm">
                    <Star size={16} fill="#ffffff" />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="font-semibold text-gray-800">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].relation}</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote className="relative">
                  <div className="text-4xl font-serif text-burgundy-light absolute top-0 left-0 transform -translate-x-6 -translate-y-3 opacity-50">
                    "
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 italic mb-4 relative z-10 leading-relaxed">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="text-4xl font-serif text-burgundy-light absolute bottom-0 right-0 transform translate-x-2 translate-y-1 opacity-50">
                    "
                  </div>
                </blockquote>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-burgundy" />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-burgundy' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-burgundy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;