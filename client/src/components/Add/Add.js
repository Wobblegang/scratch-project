import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Add.scss';


//path to add <Route path='/library/:charterNumber/addBook' element={<Add />} />
const Add = () => {
  const { charterNumber } = useParams();
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newGenre, setNewGenre] = useState('');

  const getNewTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const getNewAuthor = (e) => {
    setNewAuthor(e.target.value);
  };
  const getNewGenre = (e) => {
    setNewGenre(e.target.value);
  };

  const navigate = useNavigate();

  const saveBook = (e) => {
    const newBook = {
      title: newTitle,
      author: newAuthor,
      genre: newGenre,
    };
    setNewTitle('');
    setNewAuthor('');
    setNewGenre('');

    fetch(`/api/library/${charterNumber}/addBook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error: unable to add book to library');
      }
      return response.json();
    })
    .then(data => {
      if(data.success) {
        navigate(`/library/${charterNumber}`);
      }
    })
  };

  return (
    <div className='addBody'>
      <h1>Add a Book</h1>
      <h2>Little Free Library Charter Number: {charterNumber}</h2>
      <label>Book Title:</label>
      <input type='text' onChange={getNewTitle} value={newTitle} placeholder='Book Title'/>
      <label>Author:</label>
      <input type='text' onChange={getNewAuthor} value={newAuthor} placeholder='Author'/>
      <label>Genre:</label>
      <input type='text' onChange={getNewGenre} value={newGenre} placeholder='Genera'/>
      <button onClick={saveBook}>Add Book</button>
      <Link to={`/library/${charterNumber}`}>Back to Library</Link>
    </div>
  );
};

export default Add;
