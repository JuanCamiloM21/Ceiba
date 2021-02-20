import React, { useEffect } from 'react';

import constants from '../../constants';

const Login = () => {

  const callLogin = async () => {
    const response = await fetch(`${constants.API_URL}/users?page=2`);
    const data = await response.json();
    console.log(data)
  }

  useEffect(callLogin, []);

  return (
    <div>
      <form>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button type="button">Ingresar</button>
      </form>
    </div>
  )
};

export default Login;
