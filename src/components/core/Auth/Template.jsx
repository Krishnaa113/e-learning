import { useSelector } from "react-redux"

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm.jsx"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center py-8">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-richblack-5 mb-4">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed">
              <span className="text-richblack-200">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-yellow-50">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-richblack-700/50">
              <img
                src={frameImg}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"
                className="w-full h-auto"
              />
              <img
                src={image}
                alt="Students"
                width={558}
                height={504}
                loading="lazy"
                className="absolute -top-4 right-4 z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Template