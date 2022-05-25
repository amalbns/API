import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Admin from './Components/Pages/Admin';
import Error from './Components/Pages/Error';
import Home from './Components/Pages/Home';
import Profile from './Components/Pages/Profile';
import UserList from './Components/UserList';
import Private from './Router/Private';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      <NavBar/>
      <h1>Workshop API</h1>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/Users' element={ <UserList/>}/>
        <Route path='/user/:id' element={<Profile/>}/>
        <Route path='/Admin' element={<Private isAuth={isAuth}/>}/>
        <Route path='/Admin' element={<Admin/>}/><Route/>


        <Route path='/*' element={<Error/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
