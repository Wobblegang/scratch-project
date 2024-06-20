import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  const [charterNumber, setCharterNumber] = useState('');

  const getCharterNumber = (e) => {
    setCharterNumber(e.target.value);
  };

  const navigate = useNavigate();

  //if library does not exist, create new library, navigate to new library page
  //otherwise alert users that library already exists
  const createLibrary = () => {
    console.log('Creating library with charter number:', charterNumber);
    //save charter number to variable before clearing input field
    const charterNum = charterNumber;
    setCharterNumber('');

    fetch('/api/library/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'charterNumber': charterNum }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        //if library creation is successful, navigate to the library
        navigate(`/library/${charterNum}`);
      } else {
        throw new Error('Library creation unsuccessful');
      }
    })
    .catch((error) => console.error('Error occured in createLibrary:', error));
  };

  const checkLibrary = () => {
    console.log('Checking for library with charter number:', charterNumber);
    fetch(`/api/library/find/${charterNumber}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Data:', data);
        if (data.length > 0) {
          alert('Library already exists');
        } else {
          createLibrary();
        }
      })
      .catch((error) => console.error('Error occured in checkLibrary:', error));
  };


  return (
    <main className='register-main'>
      <h1 className='register-h1'>Register a New Library</h1>
      <p>Enter a Charter Number</p>
      <input 
        className='charter-input'
        type="text"
        placeholder="Charter Number"
        onChange={getCharterNumber}
        value={charterNumber}
        ></input>
      <button className='btn btn-1 search-btn' onClick={checkLibrary}>Register Library</button>
      <Link to='/' id='toSearch'>Search for a Library</Link>
    </main>
  );
};

export default Register;

// const SignUp = ({ addNewUser }) => {
//   const [newUsername, setNewUsername] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   const getNewUsername = (e) => {
//     setNewUsername(e.target.value);
//   };

//   const getNewPassword = (e) => {
//     setNewPassword(e.target.value);
//   };

//   const saveNewUser = (e) => {
//     e.preventDefault();
//     const newUser = {
//       userName: newUsername,
//       password: newPassword,
//     };

//     addNewUser(newUser);

//     setNewUsername('');
//     setNewPassword('');
//   };

//   return (
//     <div className="signup-box">
//       Signup
//       <form method="POST" action="/signup">
//         {/* <form> */}
//         <input
//           type="text"
//           placeholder="username"
//           onChange={getNewUsername}
//           value={newUsername}
//         ></input>
//         <input
//           type="text"
//           placeholder="password"
//           onChange={getNewPassword}
//           value={newPassword}
//         ></input>
//         <button onClick={saveNewUser}>Submit</button>
//         {/* <input type="submit" value="create user" onClick={saveNewUser}></input> */}
//       </form>
//     </div>
//   );
// };

// export default SignUp;
