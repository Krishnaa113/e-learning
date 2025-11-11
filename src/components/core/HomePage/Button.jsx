import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children , linkto , active}) => {
  return (
  <Link to={linkto} className="inline-block">
    <div className={`text-center text-sm px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg
    ${active 
      ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-richblack-900 hover:shadow-yellow-500/50 hover:shadow-xl" 
      : "bg-gradient-to-r from-richblack-800 via-richblack-700 to-richblack-800 text-richblack-5 border border-richblack-600 hover:border-richblack-500 hover:shadow-xl hover:shadow-richblack-900/50"
    }`}>
          {children}
    </div>
  </Link>
  )
}

export default Button