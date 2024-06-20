import React from 'react';
import './BookItem.scss';

// img={tempImage} title={book.title} author={book.author} genre={book.genre} charterNumber={props.charterNumber}

const BookItem = (props) => {
  return (
    <div className='bookContainer'>
      <img className='bookItem-img' src={props.img} />
      <ul>
        <li><span className='book-data'>Title:</span> {props.title}</li>
        <li><span className='book-data'>Author:</span> {props.author}</li>
        <li><span className='book-data'>Genre:</span>{props.genre}</li>
      </ul>
    </div>
  );
};

export default BookItem;
