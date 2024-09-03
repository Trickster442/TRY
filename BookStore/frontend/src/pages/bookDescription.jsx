import React from 'react'
import { useLocation } from 'react-router-dom'

const BookDescription = () => {
  const location = useLocation();
  const book = location.state.book;

  return (
    <div style={{
        width:'60%',
        justifyContent:'center'
    }}>
      <h1>{book.name}</h1>
      <p>{book.author}</p>
      <img src={book.image} alt={book.id}  style={{width:'200px', height:'200px'}}/>
      <p>{book.description}</p>
    </div>
  )
}

export default BookDescription;