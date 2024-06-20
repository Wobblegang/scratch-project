import React from 'react';
import './BookItem.scss';

// img={tempImage} title={book.title} author={book.author} genre={book.genre} charterNumber={props.charterNumber}

const BookItem = (props) => {
  return (
    <div className='bookContainer'>
      <img className='bookItem-img' src={props.img} />
      <ul>
        <li className='book-title'>{props.title}</li>
        <li className='book-author'><span className='book-by'>by</span> {props.author}</li>
        <li className='book-genre'><span className='genre'>Genre:</span> {props.genre}</li>
      </ul>
    </div>
  );
};

export default BookItem;
