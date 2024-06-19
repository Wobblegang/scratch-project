import React from 'react';
import './Catalog.scss';
import BookItem from '../BookItem/BookItem';

function Catalog(props) {
  //props.charterNumber <- charter number
  //props.filteredBooksArray <-books array
  //replace later with api image
  const tempImage = 'https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg';
  // Map list of books to BookItem component: <BookItem img={props.img} title={props.title} author={props.author} genre={props.genre} charterNumber={}
  const filteredBooks = props.filteredBooksArray.map(book => {
    return <BookItem id={book._id} img={tempImage} title={book.title} author={book.author} genre={book.genre} charterNumber={props.charterNumber} />
  });

  // let filteredBooks = [];
  // props.filteredBooksArray.forEach(book =>{
  //   filteredBooks.push(<BookItem id={book._id} img={tempImage} title={book.title} author={book.author} genre={book.genre} charterNumber={props.charterNumber} />)
  // })
  
  return (
    <div className='catalog'>
      {filteredBooks}
    </div>
  )
}

export default Catalog;