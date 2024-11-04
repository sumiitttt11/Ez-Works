import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../assests/logo.png"; // Updated path

function SignUp() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Create Account');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setButtonText(option === 'client' ? 'Join as Client' : 'Apply as Freelancer');
  };

  const handleCreateAccount = () => {
    if (selectedOption === 'client') {
      navigate('/signup/clients'); // Navigate to client signup
    } else if (selectedOption === 'freelancer') {
      navigate('/signup/freelancer'); // Navigate to freelancer signup
    }
  };

  return (
    <div style={styles.container}>
      {/* Logo in the top left corner */}
      <div className="flex items-center" style={styles.logoContainer}>
        <Link to="/" className="flex items-center">
          <img className="w-32" src={logo} alt="logo" />
        </Link>
      </div>

      <h1 style={styles.header}>Join as a client or freelancer</h1>
      <div style={styles.optionsContainer}>
        <div
          style={{
            ...styles.option,
            borderColor: selectedOption === 'client' ? '#000' : '#ddd',
            transform: selectedOption === 'client' ? 'scale(1.05)' : 'scale(1)',
            boxShadow: selectedOption === 'client' ? '0px 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
          }}
          onClick={() => handleOptionChange('client')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            if (selectedOption !== 'client') {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          <input
            type="radio"
            name="role"
            checked={selectedOption === 'client'}
            onChange={() => handleOptionChange('client')}
            style={styles.radio}
          />
          <label style={styles.label}>
            <span role="img" aria-label="client">👤</span> I’m a client, hiring for a project
          </label>
        </div>
        <div
          style={{
            ...styles.option,
            borderColor: selectedOption === 'freelancer' ? '#000' : '#ddd',
            transform: selectedOption === 'freelancer' ? 'scale(1.05)' : 'scale(1)',
            boxShadow: selectedOption === 'freelancer' ? '0px 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
          }}
          onClick={() => handleOptionChange('freelancer')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            if (selectedOption !== 'freelancer') {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          <input
            type="radio"
            name="role"
            checked={selectedOption === 'freelancer'}
            onChange={() => handleOptionChange('freelancer')}
            style={styles.radio}
          />
          <label style={styles.label}>
            <span role="img" aria-label="freelancer">👨‍💻</span> I’m a freelancer, looking for work
          </label>
        </div>
      </div>
      <button
        style={{
          ...styles.button,
          backgroundColor: selectedOption ? '#4CAF50' : '#ddd',
          cursor: selectedOption ? 'pointer' : 'not-allowed',
          opacity: selectedOption ? 1 : 0.6,
          transition: 'background-color 0.3s, opacity 0.3s',
          animation: selectedOption ? 'textFadeIn 0.5s ease-in-out' : 'none',
        }}
        onClick={handleCreateAccount}
        disabled={!selectedOption}
      >
        {buttonText}
      </button>
      <p style={styles.loginText}>
        Already have an account? <a href="/login" style={styles.link}>Log In</a>
      </p>
      <style>
        {`
          @keyframes textFadeIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '140px',
    marginTop: '40px',
    backgroundColor: '#fff', // Set background to pure white
    height: '50vh', // Full height for the container
  },
  logoContainer: {
    position: 'absolute', // Position the logo absolutely
    top: '20px', // Adjust as needed
    left: '20px', // Adjust as needed
  },
  header: {
    fontSize: '30px',
    marginBottom: '40px',
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
  },
  option: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '40px',
    cursor: 'pointer',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  radio: {
    marginRight: '10px',
  },
  label: {
    fontSize: '24px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    transition: 'background-color 0.3s, opacity 0.3s',
  },
  loginText: {
    marginTop: '20px',
    fontSize: '16px',
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
  },
};

export default SignUp;
