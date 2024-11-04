import React from 'react';
import ServiceCard from './ServiceCard';
import './compcss/Services.css';

function Services() {
  const services = [
    { title: 'AI-Powered Skill Matching', description: 'Get jobs that align perfectly with your skills and experience.' },
    { title: 'Blockchain Security', description: 'Enjoy secure, transparent transactions with blockchain technology.' },
    { title: 'Global Payment Solutions', description: 'Receive payments seamlessly across borders.' },
  ];
  

  return (
    <div className="bg-white dark:bg-gray-800 py-28">
      <h3 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">Our Services</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
