import React from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const navigate = useNavigate();
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div>
          <Link to='/' style={logoStyle}>
          LOGO
          </Link>
          
        </div>
        <nav style={navStyle}>
          <Link to='/about_us' style={linkStyle}>
            About Us
          </Link>
          <Link to='/' style={linkStyle} onClick={()=>{ localStorage.removeItem('token'); navigate('/')}}>
          Logout
          </Link>
          <Link style={linkStyle} to='bookmark'>
          Booked
          </Link>
          <Link style={linkStyle} to='/login'>
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
