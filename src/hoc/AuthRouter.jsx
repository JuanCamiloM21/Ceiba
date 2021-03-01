import React from 'react';
import { Redirect } from 'react-router-dom';

const AuthRouter = ({ children }) => {

  const token = window.localStorage.getItem('token');

  if (!token) {
    return <Redirect to="/login" />
  } 
  return children;
}

export default AuthRouter;