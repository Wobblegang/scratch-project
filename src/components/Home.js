import React from 'react';
import Booklist from './Booklist';

const Home = () => {
  const BOOK_DATA = [
    {
      name: '1984',
      author: 'George Orwell',
      genre: 'Science Fiction',
      firstPublishedYear: 1949,
      image: '',
    },
    {
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Historical Fiction',
      firstPublishedYear: 1960,
      image: '',
    },
  ];
  return (
    <div>
      <div>
        <ul>
          <li>Home</li>
          <li>Add</li>
        </ul>
      </div>
      <Booklist bookData={BOOK_DATA} />
    </div>
  );
};

export default Home;
