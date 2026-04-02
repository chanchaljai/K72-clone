import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Work from './pages/Work' 

const App = () => {
  return (
 <div className='text-white'>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/agency' element={<Agency />}/>
    <Route path='/work' element={<Work />}/>
  </Routes>
 </div>
  )
}

export default App