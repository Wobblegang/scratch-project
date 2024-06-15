import React, { useState } from 'react';
import Bookitem from './Bookitem';
import Bookfilter from './Bookfilter';

const Booklist = ({ bookData }) => {
  const [genre, setGenre] = useState('Science Fiction');
  const genreSelect = (selectedGenre) => {
    setGenre(selectedGenre);
  };
  const filteredData = bookData.filter((book) => book.genre === genre);
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
