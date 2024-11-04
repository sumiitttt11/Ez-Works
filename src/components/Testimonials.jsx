import React from 'react';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'EzSolvers helped me find my dream job, and the entire process was seamless.',
    },
    {
      name: 'Jane Smith',
      feedback: 'The blockchain feature makes me feel safe about my payments. Highly recommend!',
    },
    {
      name: 'Alice Brown',
      feedback: 'Global payments have made it easy to work with clients worldwide.',
    },
    
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <h3 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">What Our Users Say</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            feedback={testimonial.feedback}
            name={testimonial.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
