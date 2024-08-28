import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div>
          <Link to='/home' style={logoStyle}>
          LOGO
          </Link>
          
        </div>
        <nav style={navStyle}>
          <Link to='/about_us' style={linkStyle}>
            About Us
          </Link>
          <Link to='contact' style={linkStyle}>
          Contact Us
          </Link>
          <Link style={linkStyle}>
          Booked
          </Link>
          <Link style={linkStyle}>
          Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

// Styles as JavaScript objects for ease of customization and maintenance
const headerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '10px 20px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  textDecoration: 'none'
};

const navStyle = {
  display: 'flex',
  gap: '20px',
 
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  fontSize: '16px',
};


export default Header;
