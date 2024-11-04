import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Clientsu from './components/SignUp/Clientsu';
import Freelancer from './components/SignUp/Freelancer';
import NotFound from './components/NotFound';
import HowItWorks from './components/HowItWorks';

// Create a custom component to handle conditional rendering of NavBar
const AppContent = () => {
  const location = useLocation();
  const showNavBar = !['/signup', '/signup/clients', '/signup/freelancer', '/login'].includes(location.pathname);

  useEffect(() => {
    // Set document title based on the current route
    switch (location.pathname) {
      case '/':
        document.title = 'EzWorks | Transform your carrer with us!!';
        break;
      case '/login':
        document.title = 'Login - EzWorks';
        break;
      case '/signup':
        document.title = 'Sign Up - EzWorks';
        break;
      case '/signup/clients':
        document.title = 'Client Sign Up - EzWorks';
        break;
      case '/signup/freelancer':
        document.title = 'Freelancer Sign Up - EzWorks';
        break;
      default:
        document.title = '404 Not Found - EzWorks';
    }
  }, [location.pathname]);

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        {/* Main Routes */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HowItWorks />
              <Services />
              <Testimonials />
            </>
          }
        />
        {/* Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/clients" element={<Clientsu />} />
        <Route path="/signup/freelancer" element={<Freelancer />} />

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Add Footer component here */}
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
