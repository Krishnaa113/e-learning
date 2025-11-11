import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-transparent bg-clip-text font-bold animate-gradient bg-[length:200%_auto]">{" "}
        {text}
    </span>
  )
}

export default HighlightText