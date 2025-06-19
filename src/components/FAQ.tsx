import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does StoryWorth work?",
    answer: "StoryWorth sends weekly questions to your loved one via email. They respond with their stories, which are shared with you and saved in their private account. After one year, we compile their stories into a beautiful hardcover book."
  },
  {
    question: "Do I need to install any software or apps?",
    answer: "No, StoryWorth works entirely through email. Your loved one simply responds to our weekly question emails, making it easy for everyone, even those who aren't tech-savvy."
  },
  {
    question: "Can I choose which questions are sent?",
    answer: "Yes! While we have a curated list of thoughtful questions, you can select specific questions to send, customize our questions, or even create your own. You control the storytelling journey."
  },
  {
    question: "What if my loved one misses a week?",
    answer: "That's completely fine. There's no pressure to answer every question. They can skip questions, answer at their own pace, or even go back and answer previous questions whenever they wish."
  },
  {
    question: "Can we include photos in the stories and book?",
    answer: "Absolutely! Photos can be added to any story response, and they will be included in the printed book. This adds a wonderful visual dimension to the memories being shared."
  },
  {
    question: "When will the book be created?",
    answer: "The hardcover book is created after the full year of storytelling. At that time, you'll have the opportunity to review all stories, arrange their order, and customize the book before it's printed and delivered."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about StoryWorth and how it works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full flex justify-between items-center p-6 text-left rounded-lg ${
                  openIndex === index ? 'bg-cream' : 'bg-cream-light hover:bg-cream'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-serif font-semibold text-xl text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-burgundy flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-burgundy flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-1 p-6 bg-cream rounded-b-lg">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="#"
            className="inline-block bg-transparent border-2 border-burgundy text-burgundy hover:bg-burgundy-light font-semibold py-2 px-6 rounded-full transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;