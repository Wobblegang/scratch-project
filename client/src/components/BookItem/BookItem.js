import React from 'react';
import './BookItem.scss';

const Bookitem = (props) => {
  return (
    <div className="book-container">
      <img src={props.img} />
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
