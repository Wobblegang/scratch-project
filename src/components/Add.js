import React, { useState } from 'react';

const Add = ({ addNewBook }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newGenre, setNewGenre] = useState('');
  const [newFirstPublishedYear, setNewFirstPublishedYear] = useState('');

  const getNewTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const getNewAuthor = (e) => {
    setNewAuthor(e.target.value);
  };
  const getNewGenre = (e) => {
    setNewGenre(e.target.value);
  };
  const getNewFirstPublishedYear = (e) => {
    setNewFirstPublishedYear(e.target.value);
  };

  const saveNowBook = (e) => {
    e.preventDefault();
    const newBook = {
      title: newTitle,
      author: newAuthor,
      genre: newGenre,
      firstPublishedYear: newFirstPublishedYear,
    };
    addNewBook(newBook);

    setNewTitle('');
    setNewAuthor('');
    setNewGenre('');
    setNewFirstPublishedYear('');
  };

  return (
    <div>
      <form onClick={saveNowBook}>
        <label>Book Title:</label>
        <input type="text" onChange={getNewTitle} value={newTitle} />
        <label>Author:</label>
        <input type="text" onChange={getNewAuthor} value={newAuthor} />
        <label>Genre</label>
        <input type="text" onChange={getNewGenre} value={newGenre} />
        <label>First Published Year</label>
        <input
          type="text"
          onChange={getNewFirstPublishedYear}
          value={newFirstPublishedYear}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Add;
