import React from 'react'

import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const timeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success of the company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skill",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];

const TimeLineSection = () => {
  return (
<div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 py-16">
      <div className="flex flex-col lg:flex-row gap-15 items-center mx-auto w-9/12 max-w-maxContent">

      <div className='lg:w-[45%] flex flex-col gap-8'>
  {
   timeLine.map((element , index)=>{
    return(
       <div className="flex flex-col" key={index}>
       <div className='flex flex-row gap-6 items-start'>

<div className='w-[60px] h-[60px] bg-white rounded-xl flex items-center justify-center shadow-lg flex-shrink-0'>
  <img src={element.Logo} alt={element.Heading} className="w-8 h-8 object-contain"/>
</div>

<div className="flex-1">
 <h2 className="font-bold text-xl text-emerald-400 mb-2">{element.Heading}</h2>
 <p className="text-base text-richblack-100 leading-relaxed">{element.Description}</p>
</div>
            
</div>

<div
         className={`${
                    timeLine.length - 1 === index ? "hidden" : "block"
                  } h-8 border-dotted border-l-2 border-purple-400/30 ml-[30px] mt-4 mb-4`}
                ></div>
       </div>
      
      
    );
   })
  }
      </div>
     
      <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0  lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                types of courses
              </h1>
            </div>
            <div></div>
          </div>
          <img
            src={TimeLineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
</div>
  )
}

export default TimeLineSection