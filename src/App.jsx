import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'


const App = () => {
  return (
    <div className='text-white'>App
      <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
        <Route path='/work' element={<h1>Work</h1>}></Route>
        <Route path='/agency' element={<h1>Agency</h1>}></Route>

      </Routes>
    </div>
  )
}

export default App