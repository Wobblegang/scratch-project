import React, { useState } from 'react';
import Bookitem from './Bookitem';
import Bookfilter from './Bookfilter';

const Booklist = ({ booksData }) => {
  const [genre, setGenre] = useState('Science Fiction');
  const genreSelect = (selectedGenre) => {
    setGenre(selectedGenre);
  };
  const filteredData = booksData.filter((book) => book.genre === genre);
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
