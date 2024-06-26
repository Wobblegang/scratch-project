import React, { useState } from 'react';
import Bookitem from './Bookitem';
import Bookfilter from './Bookfilter';

const Booklist = ({ booksData }) => {
  const [genre, setGenre] = useState('All Books');
  const genreSelect = (selectedGenre) => {
    setGenre(selectedGenre);
  };
  let filteredData = booksData;
  genre === 'All Books'
    ? filteredData
    : (filteredData = booksData.filter((book) => book.genre === genre));

  // if (genre !== 'All Books') {
  //   filteredData = booksData.filter((book) => book.genre === genre);
  // }
  return (
    <div>
      <Bookfilter genreSelect={genreSelect} />
      {filteredData.map((book) => (
        <Bookitem book={book} />
      ))}
    </div>
  );
};

export default Booklist;
