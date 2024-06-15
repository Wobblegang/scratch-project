import React from 'react';
import SignUp from './SignUp';

const Login = () => {
  return (
    <div>
      Login
      <form method="POST" action="/signup">
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password"></input>
        <input type="submit" value="login"></input>
        <SignUp />
      </form>
    </div>
  );
};

export default Login;
