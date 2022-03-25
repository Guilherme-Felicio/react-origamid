import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRouter from '../../components/helper/ProtectedRouter/ProtectedRouter'
import UserHeader from '../../components/UserHeader/UserHeader'
import Feed from '../Feed/Feed'

const User = () => {
  return (
    <section className='container'>
      <UserHeader/>
      <Routes>
        <Route path="/" element={<ProtectedRouter><Feed/></ProtectedRouter>}/>
        <Route path="/postar" element={<ProtectedRouter><Feed/></ProtectedRouter>}/>
      </Routes>
    </section>
  )
}

export default User