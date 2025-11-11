import React from 'react'
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import { useState } from "react"
import CourseCard from "./CourseCard";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
  ];

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="relative bg-gradient-to-b from-richblack-900 via-richblack-800 to-richblack-700 py-20 overflow-hidden">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-800/10 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Explore more section */}
        <div className="mb-12">
          <div className="text-4xl lg:text-5xl font-bold text-center text-white mb-4">
            Unlock the
            <HighlightText text={"Power of Code"} />
          </div>
          <p className="text-center text-richblack-200 text-lg lg:text-xl font-medium mt-2">
            Learn to Build Anything You Can Imagine
          </p>
        </div>

        {/*Tabs Section*/}
        <div className="flex flex-wrap justify-center gap-3 mx-auto w-max bg-richblack-800/80 backdrop-blur-sm text-richblack-200 p-2 rounded-full font-medium shadow-lg border border-richblack-700/50 mb-16">
          {tabsName.map((ele, index) => {
            return (
              <div
                className={`text-sm lg:text-base flex flex-row items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentTab === ele
                    ? "bg-richblack-900 text-richblack-5 font-semibold shadow-md"
                    : "text-richblack-200 hover:bg-richblack-900/50 hover:text-richblack-5"
                }`}
                key={index}
                onClick={() => setMyCards(ele)}
              >
                {ele}
              </div>
            );
          })}
        </div>

        {/* Cards Group */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full px-4 lg:px-0 mb-12">
          {courses.map((ele, index) => {
            return (
              <CourseCard
                key={index}
                cardData={ele}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
              />
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex flex-row gap-3 items-center">
              Explore Full Catalog
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
            </div>
          </CTAButton>
          <CTAButton active={false} linkto={"/signup"}>
            <div>Learn more</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore