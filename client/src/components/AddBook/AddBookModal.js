import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddBookModal.scss';

//path to add <Route path='/library/:charterNumber/addBook' element={<AddBookModal />} />
const AddBookModal = (props) => {
  const { charterNumber } = useParams();

  // State
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
  });

  // Do not show AddBookModal if props.show is false
  if (!props.show) {
    return null;
  }

  // Update bookData state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  // Add book to DB
  const saveBook = (e) => {
    const newBook = bookData;

    setBookData({
      title: '',
      author: '',
      genre: '',
    });

    // setNewTitle('');
    // setNewAuthor('');
    // setNewGenre('');

    fetch(`/api/library/${charterNumber}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => {
        console.log('response from add book fetch:', response);
        if (!response.ok) {
          throw new Error('Error: unable to add book to library');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          props.onClose();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='modal-overlay' onClick={props.onClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <button className='btn close-btn' onClick={props.onClose}>
          &times;
        </button>
        <h2 className='modal-h2'>Add a Book</h2>
        <p>Little Free Library Charter Number: {charterNumber}</p>
        <div className='addBook-form'>
          <label>Book Title:</label>
          <input
            type='text'
            name='title'
            value={bookData.title}
            placeholder='Book Title'
            onChange={handleChange}
          />
          <label>Author:</label>
          <input
            type='text'
            name='author'
            value={bookData.author}
            placeholder='Author'
            onChange={handleChange}
          />
          <div>
            <label>Genre:</label>
            <br />
            <select
              className='genera-selector'
              onChange={handleChange}
              value={bookData.genre}
              name='genre'
            >
              <option value='Science Fiction'>Science Fiction</option>
              <option value='Historical Fiction'>Historical Fiction</option>
              <option value='Non-fiction'>Non-fiction</option>
              <option value='Biographical'>Biographical</option>
              <option value='Romance/Drama'>Romance/Drama</option>
              <option value='Childrens'>Childrens</option>
              <option value='Horror/Thriller'>Horror/Thriller</option>
              <option value='Wellness'>Wellness</option>
              <option value='Action/Adventure'>Action/Adventure</option>
              <option value='Young Adult'>Young Adult</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <button className='addBook-btn' onClick={saveBook}>
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className='modal-overlay' onClick={props.onClose}>
  //     <div className='modal' onClick={e => e.stopPropagation()}>
  //       <button className='btn close-btn' onClick={props.onClose}>&times;</button>
  //       <h2 className='modal-h2'>Add a Book</h2>
  //       <p>Little Free Library Charter Number: {charterNumber}</p>
  //       <form className='addBook-form' onSubmit={saveBook}>
  //         <label>Book Title:</label>
  //         <input type='text' name='title' value={bookData.title} placeholder='Book Title' onChange={handleChange} />
  //         <label>Author:</label>
  //         <input type='text' name='author' value={bookData.author} placeholder='Author' onChange={handleChange} />
  //         <label>Genre:</label>
  //         <input type='text' name='genre' value={bookData.genre} placeholder='Genera' onChange={handleChange} />
  //         <button className='addBook-btn' type='submit'>Add Book</button>
  //       </form>
  //     </div>
  //   </div>
  // );
};

export default AddBookModal;
