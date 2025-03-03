import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from './actions';


const Library=()=>{
  const books=useSelector((state)=>state.books)
  const dispatch=useDispatch()

  return (
    <div>
      <h2>Library Summary</h2>
      <h5>Total Books: {books.length}</h5>
      <ul>
        {books.map((book)=><li key={book.isbn}>
          {book.title} by {book.author}  (ISBN:{book.isbn})
          <button onClick={()=>dispatch(removeBook(book.isbn))}>Remove</button>
        </li>)}
      </ul>
    </div>
  )
}
export default Library;