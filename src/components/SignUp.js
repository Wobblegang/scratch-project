import React, { useState } from 'react';

const SignUp = ({ addNewUser }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const getNewUsername = (e) => {
    setNewUsername(e.target.value);
  };

  const getNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const saveNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      userName: newUsername,
      password: newPassword,
    };

    addNewUser(newUser);

    setNewUsername('');
    setNewPassword('');
  };

  return (
    <div>
      Signup
      <form method="POST" action="/signup">
        {/* <form> */}
        <input
          type="text"
          placeholder="username"
          onChange={getNewUsername}
          value={newUsername}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={getNewPassword}
          value={newPassword}
        ></input>
        <button onClick={saveNewUser}>Submit</button>
        {/* <input type="submit" value="create user" onClick={saveNewUser}></input> */}
      </form>
    </div>
  );
};

export default SignUp;
