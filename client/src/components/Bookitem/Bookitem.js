import React from 'react';
import './Bookitem.scss';

const Bookitem = ({ book }) => {
  return (
    <div className="book-box">
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
