// HowItWorks.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './compcss/HowItWorks.css';

const HowItWorks = ({ isDarkMode }) => {
  const steps = [
    {
      title: 'Step 1: Sign Up',
      description: 'Create an account to get started with our platform.',
      icon: '📝',
    },
    {
      title: 'Step 2: Find Skills',
      description: 'Explore various skills and opportunities that match your interests.',
      icon: '🔍',
    },
    {
      title: 'Step 3: Get Matched',
      description: 'Our AI-driven system will match you with relevant freelancing jobs.',
      icon: '🤝',
    },
    {
      title: 'Step 4: Start Earning',
      description: 'Begin your freelancing journey and start earning today!',
      icon: '💰',
    },
  ];

  const [animationDirection, setAnimationDirection] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationDirection((prev) => (prev === 0 ? 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className={`how-it-works bg-white dark:bg-gray-800 py-12`}>
      <h3 className={`text-3xl font-bold text-center mb-8 text-blue-600 ${isDarkMode ? 'dark:text-blue-400' : ''}`}>
        How It Works
      </h3>
      <div className="steps-container flex flex-wrap justify-center gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`step-card bg-white dark:bg-gray-700 text-black dark:text-gray-300 p-6 rounded-lg shadow-md`}
            style={{
              transform: `translateY(${(index % 2 === 0 ? -1 : 1) * 10 * animationDirection}px)`,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
              delay: index * 0.5,
            }}
            role="region"
            aria-labelledby={`step-${index}`}
          >
            <div className="step-icon text-4xl mb-4" aria-hidden="true">
              {step.icon}
            </div>
            <h3 id={`step-${index}`} className={`text-xl font-semibold ${isDarkMode ? 'dark:text-a0d8ef' : ''}`}>
              {step.title}
            </h3>
            <p className={`text-sm ${isDarkMode ? 'dark:text-gray-300' : ''}`}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
