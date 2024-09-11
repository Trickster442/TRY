import React, { useEffect, useState } from 'react';
import api from "../api/configuration";

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);


  useEffect(() => {
    async function fetchBookmarks() {
      try {
        const response = await api.get("/books/all_bookmarks");
        console.log('API Response:', response.data);

        const { data } = response.data; // Destructure to get the 'data' property
        if (Array.isArray(data) && data.length > 0) {
          setBookmarks(data);
        } else {
          console.log('No bookmarks found or data is not in expected format');
        }
      } catch (error) {
        console.error("Failed to fetch bookmarks", error);
      }
    }

    fetchBookmarks();
  }, []);

  return (
    <div>
      {bookmarks.length > 0 ? (
        bookmarks.map((bookmark) => {
          

          return (
            <div key={bookmark.id}>
              <div>User ID: {bookmark.userID}</div>
              <div>Book Name: {bookmark.book.name}</div>
            <img src={bookmark.book.image} alt={bookmark.book.name}/>
            </div>
          );
        })
      ) : (
        <p>No bookmarks available</p> // Message if bookmarks array is empty
      )}
    </div>
  );
};

export default Bookmark;
