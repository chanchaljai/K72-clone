import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="flex gap-20 justify-center text-center">
      <Link className='text-[6vw] uppercase font-bold border-white border-4 rounded-full hover:text-lime-300 hover:border-lime-300' to='/work'>work</Link>
      <Link className='text-[6vw] uppercase font-bold border-white border-4 rounded-full  hover:text-lime-300 hover:border-lime-300' to='/agency'>agency</Link>
    </div>
  )
}

export default HomeBottomText