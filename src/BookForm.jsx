import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./actions";

const BookForm=()=>{
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, isbn }));
    setTitle('');
    setAuthor('');
    setIsbn('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text"placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <input type="text"placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)}/>
      <button type="submit">Add Book</button>
    </form>
  )
}
export default BookForm;