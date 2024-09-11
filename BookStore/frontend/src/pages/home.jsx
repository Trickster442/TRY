import React, { useEffect, useState } from 'react';
import Header from './header'; // Ensure the file name matches
import api from '../api/configuration';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; 
const Home = () => {
  const [pageContent, setPageContent] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 

  const bookmark = async (event, book) => {
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent div

    const userConfirmed = window.confirm(`Do you want to bookmark ${book.name}?`);

    if (userConfirmed) {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setError('No token found.');
        navigate('/login');
        return;
      }

      try {
        // Decode the token to get userID
        const decoded = jwtDecode(token);
        const userID = decoded.id;

        // Make the API call with userID and bookID
        const response = await api.post('/books/add_bookmark', 
          { userID, bookID: book.id }, 
          {
            headers: {
              token
            }
          }
        );

        // Use navigate for redirection
        if (response.status === 200) { // Assuming a successful response has status 200
          navigate("/bookmark"); // Navigate to bookmarks page
        } else {
          navigate('/login'); // Navigate to login page if not successful
        }
      } catch (error) {
        console.error('Failed to bookmark:', error);
        setError('Failed to bookmark the book.');
      }
    }
  };

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await api.get('/books/allbook');
        console.log(response.data)
        if (response && response.data) { // Ensure there's data to set
          setPageContent(response.data); // Set the response data to state
        }
      } catch (error) {
        setError('Failed to fetch data.'); // Update error state
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false); // Set loading to false when fetch completes
      }
    }

    fetchApi(); // Call the fetchApi function
  }, []); 

  return (
    <div>
      <Header />
      <div style={{ width: '80%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '0 auto' }}>
        {loading ? (
          <p>Loading...</p> 
        ) : error ? (
          <p>{error}</p> 
        ) : (
          pageContent.length > 0 ? (
            pageContent.map((book, index) => (
              <div
                key={index}
                style={{
                  boxSizing: 'border-box',
                  padding: '10px',
                  border: '1px solid black',
                  margin: '10px',
                  borderRadius: '10px',
                  width: '18%',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
                onClick={() => {
                  navigate('/bookdescription', {
                    state: { book }
                  });
                }}
              >
                <img src={book.image} alt={book.name} style={{ width: "200px", height: '200px', objectFit: 'fit' }} />
                <h3>{book.name}</h3>
                <p>{book.author}</p> 
                <button
                  type='button' 
                  onClick={(event) => bookmark(event, book)} 
                  style={{
                    fontWeight: 300,
                    fontSize: 'small',
                    backgroundColor: 'red',
                    width: '100px',
                    cursor: 'pointer'
                  }}
                >
                  Bookmark
                </button>
              </div>
            ))
          ) : (
            <p>No books available.</p> // Message for empty content
          )
        )}
      </div>
    </div>
  );
};

export default Home;
