
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[#F3F4F6] rounded-[2rem] p-12 md:p-16 lg:p-20 text-black">
      <blockquote className="space-y-10">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight italic">
          "{testimonial.text}"
        </p>
        <footer className="flex flex-col">
          <span className="text-lg font-bold">{testimonial.author}</span>
          <span className="text-sm text-gray-500 uppercase tracking-widest mt-1">
            {testimonial.role}
          </span>
        </footer>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
