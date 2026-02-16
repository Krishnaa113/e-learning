import React from 'react'
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highliteText: "Anyone, Anywhere",
      description:
        "EduFlow partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "EduFlow partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "EduFlow partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "EduFlow partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "EduFlow partners with more than 275+ leading universities and companies to bring",
    },
  ];

const LearningGrid = () => {
    return (
        <div className="grid mx-auto w-full sm:w-[350px] xl:w-fit grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mb-8 sm:mb-12 gap-4 sm:gap-0">
          {LearningGridArray.map((card, i) => {
            return (
              <div
                key={i}
                className={`
                 ${i === 0 && "sm:col-span-2 xl:col-span-2 xl:h-[294px]"} 
                 ${
                  card.order % 2 === 1
                    ? "bg-richblack-700 h-auto sm:h-[294px]": "bg-richblack-800 h-auto sm:h-[294px]"
    
                  } 
                ${card.order === 3 && "xl:col-start-2"} 
                ${card.order<0 && "bg-transparent"} `}
              >
                {card.order < 0 ? (
                  <div className="xl:w-[90%] flex flex-col gap-3 pb-6 sm:pb-10 xl:pb-0 px-4 sm:px-0">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                      {card.heading}
                      <HighlightText text={card.highliteText} />
                    </div>
                    <p className="text-sm sm:text-base text-richblack-300 font-medium">
                      {card.description}
                    </p>
    
                    <div className="w-fit mt-2">
                      <CTAButton active={true} linkto={card.BtnLink}>
                        {card.BtnText}
                      </CTAButton>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 lg:gap-8">
                    <h1 className="text-base sm:text-lg text-richblack-5">{card.heading}</h1>
    
                    <p className="text-sm sm:text-base text-richblack-300 font-medium">
                      {card.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
}
export default LearningGrid