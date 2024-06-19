import React, { useState, useEffect } from 'react';
import './Library.scss';
import { useParams } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
 
function Library() {
  const [booksArray, setBooksArray] = useState([]);
  const [filteredBooksArray, setFilteredBooksArray] = useState([]);
  const [genre, setGenre] = useState('All Books');

  const { charterNumber } = useParams();
  
useEffect(()  => {
  const fetchBooks = async () => {
    try {
      const response = await fetch(`/api/library/${charterNumber}`);
      const data = await response.json();
      setBooksArray(data);
      setFilteredBooksArray(data);
    } catch (error) {
      console.error('Error occurred in fetchBooks:', error);
    }
  }
  fetchBooks();
}, [charterNumber]);

  const filter = (e) => {
    const selectedGenre = e.target.value;
    setGenre(selectedGenre);
    if (selectedGenre === 'All Books') {
      setFilteredBooksArray(booksArray);
    } else {
      const filtered = booksArray.filter(book => book.genre === selectedGenre);
      setFilteredBooksArray(filtered);
    }
  }

  return (
    <main>
      <h2>Public Library #{charterNumber}</h2>
      <div className='options-bar'>
        <button>+ Add Book</button>
        <div>Genre:
          <select onChange={filter} value={genre}>
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