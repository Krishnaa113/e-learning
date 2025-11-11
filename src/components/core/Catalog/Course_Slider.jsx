import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// import "../../.."

// Import required modules
import { FreeMode, Pagination } from "swiper/modules"

// import { getAllCourses } from "../../services/operations/courseDetailsAPI"
// eslint-disable-next-line react/jsx-pascal-case
import Course_Card from "./Course_Card"

// eslint-disable-next-line react/jsx-pascal-case
function Course_Slider({ Courses }) {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              {/* eslint-disable-next-line react/jsx-pascal-case */}
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

// eslint-disable-next-line react/jsx-pascal-case
export default Course_Slider
