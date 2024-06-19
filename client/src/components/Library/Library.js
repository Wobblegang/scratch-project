import React, { useState, useEffect } from 'react';
import './Library.scss';
import { useParams } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
 
async function Library() {
  let booksArray;
  let filteredBooksArray;
  const [genre, setGenre] = useState('');

  const { charterNumber } = useParams();
  
useEffect(()  => {
  const fetchBooks = async () => {
    try {
      const response = await fetch(`/api/library/${charterNumber}`);
      const data = await response.json();
      setBooksArray(data);
      setFilteredBooksArray(data); // Initialize filtered books
    } catch (error) {
      console.error('Error occurred in fetchBooks:', error);
    }
    fetchBooks();
  }
  // fetch(`/api/library/${charterNumber}`)
  // .then(response => response.json())
  // .then(data => {
  //   console.log('fetch req data', data);
  //   booksArray = data;
  //   filteredBooksArray = data;
  // })
  // .catch(error => console.error('Error occured in searchForLibrary:', error));
}, []);

  console.log('filteredBooksArray after promise chaining', filteredBooksArray);

  const filter = (e) => {
    setGenre(e.target.value);
    if(e.target.value === 'All Books') {
      filteredBooksArray = booksArray;
      return;
    }
    filteredBooksArray = booksArray.filter(book => {
      book.genre === genre;
    })
  }

  return (
    <main className='library-container'>
      <h2>Public Library #{charterNumber}</h2>
      <div className='options-bar'>
        <button>+ Add Book</button>
        <div>Genre:
          <select onChange={filter}>
            <option value="All Books" selected>All Books</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Historical Fiction">Historical Fiction</option>
          </select>
        </div>
      </div>
      <Catalog charterNumber={charterNumber} filteredBooksArray={filteredBooksArray}/>
    </main>
  )
}

export default Library;