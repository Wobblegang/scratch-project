import React, { useState } from 'react';
import Bookitem from '../BookItem/BookItem';
import Bookfilter from '../Bookfilter/Bookfilter';

const Booklist = ({ booksData }) => {
  const [genre, setGenre] = useState('All Books');
  const genreSelect = (selectedGenre) => {
    setGenre(selectedGenre);
  };
  ///fetch get all books to filter by genre
  let filteredData = booksData; /// change to response of fetch request
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
