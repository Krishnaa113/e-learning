import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import GetAvgRating from "../../../utils/avgRating"
import RatingStars from "../../common/RatingStars"

// eslint-disable-next-line react/jsx-pascal-case
function Course_Card({ course, Height }) {
  // const avgReviewCount = GetAvgRating(course.ratingAndReviews)
  // console.log(course.ratingAndReviews)
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews)
    setAvgReviewCount(count)
  }, [course])
  // console.log("count............", avgReviewCount)

  return (
    <>
      <Link to={`/courses/${course._id}`} className="block group">
        <div className="bg-gradient-to-br from-richblack-800 to-richblack-900 rounded-2xl overflow-hidden border border-richblack-700/50 hover:border-primary-light/50 transition-all duration-300 card-hover shadow-lg">
          <div className="rounded-lg overflow-hidden">
            <img
              src={course?.thumbnail}
              alt="course thumbnail"
              className={`${Height} w-full object-cover group-hover:scale-110 transition-transform duration-500`}
            />
          </div>
          <div className="flex flex-col gap-3 px-4 py-4">
            <p className="text-xl font-semibold text-richblack-5 group-hover:text-yellow-50 transition-colors duration-300 line-clamp-2">{course?.courseName}</p>
            <p className="text-sm text-richblack-300">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-50 font-semibold">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-richblack-400 text-sm">
                ({course?.ratingAndReviews?.length || 0} Ratings)
              </span>
            </div>
            <p className="text-2xl font-bold text-richblack-5">Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

// eslint-disable-next-line react/jsx-pascal-case
export default Course_Card
