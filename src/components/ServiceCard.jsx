import React from 'react';
import { useInView } from 'react-intersection-observer';

function ServiceCard({ title, description }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allows the animation to trigger every time it enters the viewport
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={`service-card max-w-xs p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:border-gray-600 transform transition-all duration-500 ease-out
        ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        hover:scale-105 hover:shadow-2xl`}
    >
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    </div>
  );
}

export default ServiceCard;
