import React from 'react';
import './Library.scss';
import { useParams } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';

function Library() {

  const { charterNumber } = useParams();

  return (
    <main className='library-container'>
      <h2>Public Library #{charterNumber}</h2>
      <div className='options-bar'>
        <button>+ Add Book</button>
        <div>Genre:
          <select onChange={filter}>
            <option value="All Books">All Books</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Historical Fiction">Historical Fiction</option>
          </select>
        </div>
      </div>
      <Catalog charterNumber={charterNumber}/>
    </main>
  )
}

export default Library;