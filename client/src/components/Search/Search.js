import React from 'react';
import './Search.scss';

const Search = () => {
  const [charterNumber, setCharterNumber] = useState('');
  const getCharterNumber = (e) => {
    setCharterNumber(e.target.value);
  };

  return (
    <div className="search-box">
      <h1>Enter a Charter Number</h1>
      <input
        type="text"
        placeholder="Charter Number"
        onChange={getCharterNumber}
        value={charterNumber}
        ></input>
    </div>
  );
};

export default Search;