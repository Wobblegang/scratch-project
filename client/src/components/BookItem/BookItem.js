import React from 'react';
import './BookItem.scss';

// img={tempImage} title={book.title} author={book.author} genre={book.genre} charterNumber={props.charterNumber}

const Bookitem = (props) => {
  return (
    <div className="book-container">
      <img src={props.img} />
      <ul>
        <li>Title: {props.title}</li>
        <li>Author: {props.author}</li>
        <li>Genre:{props.genre}</li>
      </ul>
    </div>
  );
};

export default Bookitem;
