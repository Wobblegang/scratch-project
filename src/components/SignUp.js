import React from 'react';

const SignUp = () => {
  return (
    <div>
      Signup
      <form method="POST" action="/signup">
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password"></input>
        <input type="submit" value="create user"></input>
      </form>
    </div>
  );
};

export default SignUp;