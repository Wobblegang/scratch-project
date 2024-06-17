import React from 'react';

const Bookitem = ({ book }) => {
  return (
    <div>
      <img src={book.image} alt="image" />
      <ul>
        <li>Title: {book.title}</li>
        <li>Author: {book.author}</li>
        <li>Genre:{book.genre}</li>
        <li>First Published Year: {book.firstPublishedYear}</li>
      </ul>
    </div>
  );
};

export default Bookitem;
