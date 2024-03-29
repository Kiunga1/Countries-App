/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage';


function App() {
  

  return (
    <div className='min-h-screen bg-bgColorLight dark:bg-bgColorDark'>
     <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route path='/country/:alpha2Code' element={<DetailsPage/>}/>
     </Routes>
    </div>
  )
}

export default App
