import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  console.log("my profile" ,user)
  const navigate = useNavigate()

  return (
    <>
      <h1 className="mb-8 sm:mb-10 lg:mb-14 text-2xl sm:text-3xl font-medium text-richblack-5">
        My Profile
      </h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 sm:p-6 lg:p-8 px-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-x-4 gap-y-2 w-full sm:w-auto">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-16 h-16 sm:w-[78px] sm:h-[78px] rounded-full object-cover flex-shrink-0"
          />
          <div className="space-y-1 min-w-0 flex-1">
            <p className="text-base sm:text-lg font-semibold text-richblack-5 truncate">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-xs sm:text-sm text-richblack-300 truncate">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings")
          }}
          customClasses="w-full sm:w-auto flex-shrink-0"
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-6 sm:my-8 lg:my-10 flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 sm:p-6 lg:p-8 px-4 sm:px-6 lg:px-12">
        <div className="flex w-full items-center justify-between gap-4">
          <p className="text-base sm:text-lg font-semibold text-richblack-5">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
            customClasses="flex-shrink-0"
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm sm:text-base font-medium leading-relaxed`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-6 sm:my-8 lg:my-10 flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 sm:p-6 lg:p-8 px-4 sm:px-6 lg:px-12">
        <div className="flex w-full items-center justify-between gap-4">
          <p className="text-base sm:text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
            customClasses="flex-shrink-0"
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex flex-col sm:flex-row max-w-full sm:max-w-[500px] gap-6 sm:gap-8 lg:justify-between">
          <div className="flex flex-col gap-y-4 sm:gap-y-5 flex-1">
            <div>
              <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-richblack-400">First Name</p>
              <p className="text-sm sm:text-base font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-richblack-400">Email</p>
              <p className="text-sm sm:text-base font-medium text-richblack-5 break-words">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-richblack-400">Gender</p>
              <p className="text-sm sm:text-base font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 sm:gap-y-5 flex-1">
            <div>
              <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-richblack-400">Last Name</p>
              <p className="text-sm sm:text-base font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-richblack-400">Phone Number</p>
              <p className="text-sm sm:text-base font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-richblack-400">Date Of Birth</p>
              <p className="text-sm sm:text-base font-medium text-richblack-5">
                {user?.additionalDetails?.dateOfBirth ? formattedDate(user?.additionalDetails?.dateOfBirth) : "Add a Date of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
