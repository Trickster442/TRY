import React, { useEffect, useState } from 'react';
import Header from './header'; // Ensure the file name matches
import api from '../api/configuration';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [pageContent, setPageContent] = useState([]); // Use setPageContent for state updater
  const navigate = useNavigate(); // Use useNavigate at the top level

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
      <div style={{width:'80%', display:'flex', justifyContent:'center', flexWrap:'wrap', margin:'0 10%'}}>
        {pageContent.length > 0 ? (
          pageContent.map((book, index) => (
            <div key={index}
              style={{
                boxSizing: 'border-box',
                padding:'10px',
                border: '1px solid black',
                margin:'10px 10px',
                borderRadius:'10px',
                width:'18%',
                cursor:'pointer'
              }}
              onClick={(e)=>{
                navigate('/bookdescription', {
                  state: {
                    book
                  }
                })
              }}
            >
              <img src={book.image} style={{width:"200px", height:'200px', objectFit:'cover'}} alt={book.id}/> <br/>
              <h3>{book.name}</h3>
              <p>{book.author}</p> 
            </div>
          ))
        ) : (
          <p>Loading...</p> 
        )}
      </div>
    </div>
  );
};

export default Home;