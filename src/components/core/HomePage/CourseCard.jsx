import React from 'react'

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({currentCard , setCurrentCard, cardData}) => {
  return (
    <div  className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-gradient-to-br from-yellow-50 to-white shadow-2xl shadow-yellow-500/30 text-richblack-900 border-2 border-yellow-400 scale-105"
          : "bg-gradient-to-br from-richblack-800 to-richblack-900 border border-richblack-700 hover:border-primary-light/50"
      } text-richblack-25 h-[320px] box-border cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 card-hover relative group`}
      onClick={() => setCurrentCard(cardData?.heading)}>

      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        currentCard === cardData?.heading 
          ? "from-yellow-400/5 to-transparent" 
          : "from-primary-light/5 to-transparent opacity-0 group-hover:opacity-100"
      } transition-opacity duration-300`}></div>

      <div className={`border-b-2 ${
        currentCard === cardData?.heading 
          ? "border-yellow-400/20" 
          : "border-richblack-600/50 group-hover:border-primary-light/30"
      } h-[80%] p-6 flex flex-col gap-4 relative z-10 transition-all duration-300`}>
        
      <div
          className={`font-bold text-xl ${
            currentCard === cardData?.heading 
              ? "text-richblack-900" 
              : "text-richblack-5 group-hover:text-white"
          } transition-colors duration-300`}
        >
          {cardData?.heading}
        </div>

        <div className={`${
          currentCard === cardData?.heading 
            ? "text-richblack-700" 
            : "text-richblack-400 group-hover:text-richblack-300"
        } transition-colors duration-300 leading-relaxed`}>
          {cardData?.description}
        </div>

      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading 
            ? "text-richblack-800 bg-yellow-50/30" 
            : "text-richblack-300 bg-richblack-800/50 group-hover:bg-richblack-700/50"
        } px-6 py-4 font-medium relative z-10 transition-all duration-300`}
      >
        {/* Level */}
        <div className={`flex items-center gap-2 text-base ${
          currentCard === cardData?.heading ? "text-richblack-800" : "text-richblack-300"
        }`}>
          <HiUsers className="text-lg" />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className={`flex items-center gap-2 text-base ${
          currentCard === cardData?.heading ? "text-richblack-800" : "text-richblack-300"
        }`}>
          <ImTree className="text-lg" />
          <p>{cardData?.lessionNumber} Lesson</p>
        </div>
      </div>

    </div>
  )
}

export default CourseCard