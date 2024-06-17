import React from 'react';

const Login = () => {
  return (
    <div>
      Login
      <form method="POST" action="/signup">
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="username"></input>
        <input type="submit" value="login"></input>
      </form>
    </div>
  );
};

export default Login;
