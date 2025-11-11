import React from "react"
import copy from "copy-to-clipboard"
import { toast } from "react-hot-toast"
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addToCart } from "../../../slices/cartSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"

// const CourseIncludes = [
//   "8 hours on-demand video",
//   "Full Lifetime access",
//   "Access on Mobile and TV",
//   "Certificate of completion",
// ]

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    thumbnail: ThumbnailImage,
    price: CurrentPrice,
    _id: courseId,
  } = course

  const handleShare = () => {
    copy(window.location.href)
    toast.success("Link copied to clipboard")
  }

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.")
      return
    }
    if (token) {
      dispatch(addToCart(course))
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  // console.log("Student already enrolled ", course?.studentsEnroled, user?._id)

  return (
    <>
      <div
        className={`flex flex-col gap-6 rounded-2xl bg-gradient-to-br from-richblack-800 to-richblack-900 p-6 text-richblack-5 border border-richblack-700/50 shadow-2xl`}
      >
        {/* Course Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-richblack-700/50">
          <img
            src={ThumbnailImage}
            alt={course?.courseName}
            className="max-h-[300px] min-h-[180px] w-full overflow-hidden object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="px-2">
          <div className="space-x-3 pb-4 text-3xl font-bold text-richblack-5">
            Rs. {CurrentPrice}
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="yellowButton"
              onClick={
                user && course?.studentsEnrolled.includes(user?._id)
                  ? () => navigate("/dashboard/enrolled-courses")
                  : handleBuyCourse
              }
            >
              {user && course?.studentsEnrolled.includes(user?._id)
                ? "Go To Course"
                : "Buy Now"}
            </button>
            {(!user || !course?.studentsEnrolled.includes(user?._id)) && (
              <button onClick={handleAddToCart} className="blackButton">
                Add to Cart
              </button>
            )}
          </div>
          <div className="bg-yellow-50/10 border border-yellow-50/20 rounded-xl p-4 mt-4">
            <p className="text-center text-sm text-richblack-25 font-medium">
              ✨ 30-Day Money-Back Guarantee
            </p>
          </div>

          <div className="mt-6">
            <p className={`my-2 text-xl font-bold text-richblack-5 mb-4`}>
              This Course Includes :
            </p>
            <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
              {course?.instructions?.map((item, i) => {
                return (
                  <p className={`flex gap-3 items-start`} key={i}>
                    <BsFillCaretRightFill className="text-caribbeangreen-50 mt-1 flex-shrink-0" />
                    <span className="text-richblack-200">{item}</span>
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              className="mx-auto flex items-center gap-2 py-4 text-yellow-50 hover:text-yellow-100 transition-colors duration-300 font-medium"
              onClick={handleShare}
            >
              <FaShareSquare size={18} /> Share
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetailsCard
