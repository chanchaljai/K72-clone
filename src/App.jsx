import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Work from './pages/Work'
import Agency from './pages/Agency'


const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/agency' element={<Agency/>}></Route>

      </Routes>
    </div>
  )
}

export default App