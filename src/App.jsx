/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage';


function App() {
  

  return (
    <div className='  bg-bgColorLight dark:bg-bgColorDark'>
     <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route path='/details' element={<DetailsPage/>}/>
     </Routes>
    </div>
  )
}

export default App
