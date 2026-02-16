import React, { useEffect, useState } from "react"
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"

import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown';
import ConfirmationModal from "../components/common/ConfirmationModal"
import Footer from "../components/common/Footer"
import RatingStars from "../components/common/RatingStars"
import CourseAccordionBar from "../components/core/Course/CourseAccordionBar"
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard"
import { formatDate } from "../services/formatDate"
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI"
import { BuyCourse } from "../services/operations/studentFeaturesAPI"
import GetAvgRating from "../utils/avgRating"
import Error from "./Error"

function CourseDetails() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { loading } = useSelector((state) => state.profile)
  const { paymentLoading } = useSelector((state) => state.course)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Getting courseId from url parameter
  const { courseId } = useParams()
  // console.log(`course id: ${courseId}`)

  // Declear a state to save the course details
  const [response, setResponse] = useState(null)
  const [confirmationModal, setConfirmationModal] = useState(null)
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    ;(async () => {
      try {
        const res = await fetchCourseDetails(courseId)
        // console.log("course details res: ", res)
        setResponse(res)
      } catch (error) {
        console.log("Could not fetch Course Details")
      }
    })()
  }, [courseId])

  // console.log("response: ", response)

  // Calculating Avg Review count
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  useEffect(() => {
    const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews)
    setAvgReviewCount(count)
  }, [response])
  // console.log("avgReviewCount: ", avgReviewCount)

  // // Collapse all
  // const [collapse, setCollapse] = useState("")
  const [isActive, setIsActive] = useState(Array(0))
  const handleActive = (id) => {
    // console.log("called", id)
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e !== id)
    )
  }

  // Total number of lectures
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0)
  useEffect(() => {
    let lectures = 0
    response?.data?.courseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0
    })
    setTotalNoOfLectures(lectures)
  }, [response])

  if (loading || !response) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  if (!response.success) {
    return <Error />
  }

  const {
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    createdAt,
  } = response.data?.courseDetails

  const handleBuyCourse = () => {
    if (token) {
      BuyCourse(token, [courseId], user, navigate, dispatch)
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  if (paymentLoading) {
    // console.log("payment loading")
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
      <div className={`relative w-full bg-gradient-to-br from-richblack-800 via-richblack-900 to-richblack-800`}>
        {/* Hero Section */}
        <div className="mx-auto box-content px-4 sm:px-6 lg:w-[1260px] 2xl:relative py-4 sm:py-6 lg:py-8">
          <div className="mx-auto grid min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] max-w-maxContentTab justify-items-center py-4 sm:py-6 lg:py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
            <div className="relative block max-h-[20rem] sm:max-h-[25rem] lg:hidden rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-richblack-700/50 w-full">
              <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-richblack-900 via-richblack-900/50 to-transparent"></div>
              <img
                src={thumbnail}
                alt="course thumbnail"
                className="aspect-auto w-full"
              />
            </div>
            <div
              className={`z-30 my-3 sm:my-5 flex flex-col justify-center gap-3 sm:gap-4 lg:gap-5 py-3 sm:py-4 lg:py-5 text-base sm:text-lg text-richblack-5`}
            >
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-richblack-5 leading-tight">
                  {courseName}
                </p>
              </div>
              <p className={`text-richblack-200 text-sm sm:text-base lg:text-lg leading-relaxed`}>{courseDescription}</p>
              <div className="text-sm sm:text-base flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-yellow-50 font-semibold text-base sm:text-lg">{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={20} />
                <span className="text-richblack-400 text-sm sm:text-base">({ratingAndReviews?.length || 0} reviews)</span>
              </div>
              <div>
                <p className="text-sm sm:text-base text-richblack-300">
                  Created By <span className="text-richblack-5 font-semibold">{`${instructor.firstName} ${instructor.lastName}`}</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-5 text-sm sm:text-base text-richblack-300">
                <p className="flex items-center gap-2">
                  <BiInfoCircle className="text-primary-light text-base sm:text-lg" /> <span className="text-xs sm:text-sm">Created at {formatDate(createdAt)}</span>
                </p>
                <p className="flex items-center gap-2">
                  <HiOutlineGlobeAlt className="text-primary-light text-base sm:text-lg" /> <span className="text-xs sm:text-sm">English</span>
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:gap-4 border-y border-y-richblack-700/50 py-4 sm:py-6 lg:hidden bg-richblack-800/50 rounded-xl px-4">
              <p className="space-x-3 pb-2 text-2xl sm:text-3xl font-bold text-richblack-5">
                Rs. {price}
              </p>
              <button className="yellowButton text-sm sm:text-base" onClick={handleBuyCourse}>
                Buy Now
              </button>
              <button className="blackButton text-sm sm:text-base">Add to Cart</button>
            </div>
          </div>
          {/* Courses Card */}
          <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute lg:block">
            <CourseDetailsCard
              course={response?.data?.courseDetails}
              setConfirmationModal={setConfirmationModal}
              handleBuyCourse={handleBuyCourse}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto box-content px-4 sm:px-6 text-start text-richblack-5 lg:w-[1260px] py-6 sm:py-8">
        <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
          {/* What will you learn section */}
          <div className="my-6 sm:my-8 border border-richblack-700/50 bg-richblack-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <p className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-richblack-25 bg-clip-text text-transparent">What you'll learn</p>
            <div className="mt-3 sm:mt-5 text-sm sm:text-base text-richblack-200 leading-relaxed">
              <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown>
            </div>
          </div>

          {/* Course Content Section */}
          <div className="max-w-[830px]">
            <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
              <p className="text-2xl sm:text-3xl lg:text-[28px] font-bold bg-gradient-to-r from-white to-richblack-25 bg-clip-text text-transparent">Course Content</p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-3 sm:gap-4 items-start sm:items-center">
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-richblack-300">
                  <span className="bg-richblack-800/50 px-2 sm:px-3 py-1 rounded-lg">
                    {courseContent.length} {`section(s)`}
                  </span>
                  <span className="bg-richblack-800/50 px-2 sm:px-3 py-1 rounded-lg">
                    {totalNoOfLectures} {`lecture(s)`}
                  </span>
                  <span className="bg-richblack-800/50 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">{response.data?.totalDuration} total length</span>
                </div>
                <div>
                  <button
                    className="text-xs sm:text-sm text-yellow-50 hover:text-yellow-100 transition-colors duration-300 font-medium"
                    onClick={() => setIsActive([])}
                  >
                    Collapse all sections
                  </button>
                </div>
              </div>
            </div>

            {/* Course Details Accordion */}
            <div className="py-4">
              {courseContent?.map((course, index) => (
                <CourseAccordionBar
                  course={course}
                  key={index}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))}
            </div>

            {/* Author Details */}
            <div className="mb-8 sm:mb-12 py-4">
              <p className="text-2xl sm:text-3xl lg:text-[28px] font-semibold mb-3 sm:mb-4">Author</p>
              <div className="flex items-center gap-3 sm:gap-4 py-3 sm:py-4">
                <img
                  src={
                    instructor.image
                      ? instructor.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
                  }
                  alt="Author"
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
                />
                <p className="text-base sm:text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
              </div>
              <p className="text-sm sm:text-base text-richblack-50">
                {instructor?.additionalDetails?.about}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default CourseDetails
