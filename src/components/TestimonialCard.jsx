import React from 'react';
import { useInView } from 'react-intersection-observer';

function TestimonialCard({ feedback, name }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allows the animation to re-trigger every time it enters the viewport
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`max-w-xs p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:border-gray-600 transform transition-all duration-500 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:scale-105 hover:shadow-2xl`}
    >
      <p className="text-gray-800 dark:text-gray-100 mb-4">"{feedback}"</p>
      <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-200">- {name}</h5>
    </div>
  );
}

export default TestimonialCard;
