import React, { useState, useEffect } from 'react';
import './Library.scss';
import { useParams } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import AddBookModal from '../AddBook/AddBookModal';
 
function Library() {
  const { charterNumber } = useParams();

  // States
  const [booksArray, setBooksArray] = useState([]);
  const [filteredBooksArray, setFilteredBooksArray] = useState([]);
  const [genre, setGenre] = useState('All Books');
  const [showModal, setShowModal] = useState(false);

  // Fetch library's book catalog from DB
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

  // Filter library's book catalog based on genre selector's value
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

  // Toggle 'AddBook' modal when clicking on '+ Add Book' button
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <main className='library-main'>
      <h2 className='library-h2'>Public Library #{charterNumber}</h2>
      <div className='library-options-bar'>
        <button className='btn btn-1' onClick={toggleModal}>+ Add Book</button> 
        <div>Genre:
          <select className='library-filter' onChange={filter} value={genre}>
            <option value="All Books">All Books</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Historical Fiction">Historical Fiction</option>
          </select>
        </div>
      </div>
      <AddBookModal show={showModal} onClose={toggleModal}/>
      <Catalog charterNumber={charterNumber} filteredBooksArray={filteredBooksArray}/>
    </main>
  )
}

export default Library;