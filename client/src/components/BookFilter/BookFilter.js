import React from 'react';

const Bookfilter = ({ genreSelect }) => {
  
  return (
    <div style={{ marginBottom: '10px' }}>
      Genre:
      <select onChange={filter}>
        <option value="All Books">All Books</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Historical Fiction">Historical Fiction</option>
      </select>
    </div>
  );
};

export default Bookfilter;
