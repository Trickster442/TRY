import React, { useEffect, useState } from 'react'; // Correct import statement
import Header from './header'; // Ensure the file name matches

const Home = () => { // Capitalize component name

  const [pageContent, setPageContent] = useState([]); // Use setPageContent for state updater

  useEffect(() => {
    
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <Header />
      
    </div>
  );
}

export default Home;
