import React from 'react'
import api from "../api/configuration"
const addBook = () => {

    async function addBook(){
        const response = await api.post('books/addBook');
    }
  return (
    <div>
      <form method='POST' onSubmit={addBook}>
        <label for='name'>Name:</label>
        <input type='text' id='name'></input>
        <label for='genre'>Genre:</label>
        <input type='text' id='genre'></input>
        <label for='author'>Author:</label>
        <input type='author' id='author'></input>
        <label for='description'>Description:</label>
        <textarea id='description' rows={10} cols={20}></textarea>
        <input type='file'/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default addBook
