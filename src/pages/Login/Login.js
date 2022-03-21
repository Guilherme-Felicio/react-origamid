import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCreate from '../LoginCreate/LoginCreate';
import LoginPasswordLost from '../LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from '../LoginPasswordReset/LoginPasswordReset';
import LoginForm from '../LoginForm/LoginForm';

const Login = () => {
  return (
    <div>
      <Routes>
          <Route path="" element={<LoginForm/>}></Route>
          <Route path="criar" element={<LoginCreate/>}></Route>
          <Route path="perdeu" element={<LoginPasswordLost/>}></Route>
          <Route path="resetar" element={<LoginPasswordReset/>}></Route>
      </Routes>
    </div>
  )
}

export default Login;