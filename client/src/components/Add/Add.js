import React, { useState } from 'react';
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

  const saveNowBook = (e) => {
    e.preventDefault();
    const newBook = {
      title: newTitle,
      author: newAuthor,
      genre: newGenre,
    };
    // addNewBook(newBook);
    // post reqest to store new book

    setNewTitle('');
    setNewAuthor('');
    setNewGenre('');
    setNewFirstPublishedYear('');
  };

  return (
    <div className='add-box'>
      <form>
        <label>Book Title:</label>
        <br />
        <input type='text' onChange={getNewTitle} value={newTitle} />
        <br />
        <label>Author:</label>
        <br />
        <input type='text' onChange={getNewAuthor} value={newAuthor} />
        <br />
        <label>Genre:</label>
        <br />
        <input type='text' onChange={getNewGenre} value={newGenre} />
        <br />
        <label>First Published Year:</label>
        <br />
        <input
          type='text'
          onChange={getNewFirstPublishedYear}
          value={newFirstPublishedYear}
        />
        <br />
        <button onClick={saveNowBook}>Submit</button>
      </form>
    </div>
  );
};

export default Add;
