import { useState } from 'react'; //do we need to import react from react too?
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './Search.scss';

const Search = () => {
  const [charterNumber, setCharterNumber] = useState('');

  const getCharterNumber = (e) => {
    setCharterNumber(e.target.value);
  };

  const navigate = useNavigate();

  const searchForLibrary = () => {
    console.log('Searching for library with charter number:', charterNumber);
    fetch(`/api/library/find/${charterNumber}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Data:', data);
        if (data.length > 0) {
          navigate(`/library/${charterNumber}`);
        } else {
          alert('Library not found');
        }
      });
  };

  const toRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <Header />
      <div className="charterBox">
        <h1>Enter a Charter Number</h1>
        <input 
          className='charterInput'
          type="text"
          placeholder="Charter Number"
          onChange={getCharterNumber}
          value={charterNumber}
          ></input>
        <button id='searchButton' onClick={searchForLibrary}>Search</button>
        <button id='toRegisterButton' onClick={toRegister}>Register</button>
      </div>
    </div>
    
  );
};

export default Search;