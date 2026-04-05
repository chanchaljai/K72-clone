import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="flex  justify-center items-center gap-20 text-center mb-5">
      <Link className='text-[6vw] uppercase font-bold border-white border-4 rounded-full hover:text-green-500 hover:border-green-500' to='/work'>work</Link>
      <Link className='text-[6vw] uppercase font-bold border-white border-4 rounded-full  hover:text-green-500 hover:border-green-500' to='/agency'>agency</Link>
    </div>
  )
}

export default HomeBottomText