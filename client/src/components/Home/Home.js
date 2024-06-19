import React, { useState } from 'react'; //do we need to import react from react too?
import { useNavigate, Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const [charterNumber, setCharterNumber] = useState('');

  const getCharterNumber = (e) => {
    setCharterNumber(e.target.value);
  };

  const navigate = useNavigate();

  //if library exists, navigate to library page
  const searchForLibrary = () => {
    console.log('Searching for library with charter number:', charterNumber);
    const charterNum = charterNumber;
    setCharterNumber('');

    fetch(`/api/library/find/${charterNum}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Data:', data);
        if (data.length > 0) {
          navigate(`/library/${charterNum}`);
        } else {
          alert('Library not found');
        }
      })
      .catch((error) => console.error('Error occured in searchForLibrary:', error));
  };

  return (
    <main>
      <h1>Find a Free Library</h1>
      <p>Enter a Charter Number</p>
      <input 
        className='charter-input'
        type="text"
        placeholder="Charter Number"
        onChange={getCharterNumber}
        value={charterNumber}
        ></input>
      <button className='btn-1 search-btn' onClick={searchForLibrary}>Search</button>
      <Link to='/register' id='toRegister'>Register a Library</Link>
    </main>
  );
};

export default Home;