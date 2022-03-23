import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginCreate from '../LoginCreate/LoginCreate';
import LoginPasswordLost from '../LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from '../LoginPasswordReset/LoginPasswordReset';
import LoginForm from '../LoginForm/LoginForm';
import { UserContext } from '../../userContext';

const Login = () => {
  const {login} = React.useContext(UserContext);

  if(login === true) return <Navigate to="/conta"></Navigate>

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