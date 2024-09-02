  import React, { useEffect, useState } from 'react';
  import Header from './header'; // Ensure the file name matches
  import api from '../api/configuration';

  const Home = () => {
    
    const [pageContent, setPageContent] = useState([]); // Use setPageContent for state updater

    useEffect(() => {
      async function fetchApi() {
        try {
          const response = await api.get('/books/allbook');
          if (response && response.data) { // Ensure there's data to set
            setPageContent(response.data); // Set the response data to state
            
          }
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      }

      fetchApi(); // Call the fetchApi function
    }, []); // Empty dependency array means this runs once on mount

    return (
      <div>
        <Header />
        {pageContent.length > 0 ? (
          pageContent.map((book, index) => (
            
            <div key={index}
            style={{
              display:'inline-block',
              width:'20%',
              marginLeft:''

            }}
            >
            
              <h1>
              {book.author}
              </h1>
              <img src={book.image} style={{width:"20px", height:'20px'}}/>
              {/* Render other book details as needed */}
              <h1>
                {book.title}
              </h1>
            </div>
          ))
        ) : (
          <p>Loading...</p> // Display a loading message or spinner if data is not yet loaded
        )}
      </div>
    );
  };

  export default Home;
