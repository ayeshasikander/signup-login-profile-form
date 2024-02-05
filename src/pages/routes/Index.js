import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  
  } from "react-router-dom";
import Signup from '../../components/Signup';
import Login from '../../components/Login';
import UserProfile from '../../components/UserProfile';


const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/profile/:email' element={<UserProfile/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Index
