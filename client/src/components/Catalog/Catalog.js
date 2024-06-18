import React from 'react';
import './Catalog.scss';
import BookItem from '../BookItem/BookItem';

function Catalog(props) {

  // Get list of books from DB using props.charterNumber
  // Filter list of books using props.selectedGenre
  // Map list of books to BookItem component: <BookItem img={props.img} title={props.title} author={props.author} genre={props.genre}

  return (
    <div className='catalog'>
      {/* Insert result of mapping list of books to BookItem component */}
    </div>
  )
}

export default Catalog