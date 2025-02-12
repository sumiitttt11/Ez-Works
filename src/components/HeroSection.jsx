import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import heroAnimation from './heroAnimation.json'; // Lottie animation file
import './compcss/HeroSection.css';

function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center min-h-screen p-8 text-center transition-colors duration-500
        ${inView ? 'bg-white dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'}
        hero-container`}
    >
      {/* Lottie Animation */}
      <div className={`w-48 md:w-72 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} transition-all duration-700 ease-out`}>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>

      {/* Animated heading */}
      <h2
        className={`text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4 transform transition-all duration-700 delay-200
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        aria-label="Transform Your Career with EzSolvers"
      >
        Transform Your Career with EzWorks
      </h2>
      
      {/* Animated paragraph */}
      <p
        className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 transition-opacity duration-700 delay-300
          ${inView ? 'opacity-100' : 'opacity-0'}`}
      >
        Connect with opportunities that match your skills through AI-driven job matching.
      </p>
      
      <div className="flex space-x-4 mt-4">
        {/* Get Started Button */}
        <button
          className={`px-6 py-3 bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-400 rounded-lg hover:bg-blue-700 transform transition-transform duration-300 delay-500 shadow-lg hover:scale-105
            ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <Link to="/signup" className="hover:text-blue-300" aria-label="Sign up for EzSolvers">Get Started</Link>
        </button>
        
        {/* Learn More Button */}
        <button
          className={`px-6 py-3 bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transform transition-transform duration-300 delay-500 shadow-lg hover:scale-105
            ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <Link to="https://sumitkumawat.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300" aria-label="Learn more about EzSolvers">
            Learn More
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
