import React from "react"

import Footer from "../components/common/Footer"

import ContactDetails from "../components/core/contactPage/ContactDetails"
import ContactForm from "../components/core/contactPage/ContactForm"
import ReviewSlider from "../components/common/ReviewSlider"

const Contact = () => {
  return (
    <div className="pt-4">
      <div className="mx-auto mt-4 sm:mt-8 flex w-11/12 max-w-maxContent flex-col justify-between gap-8 sm:gap-10 text-white lg:flex-row py-8 sm:py-12 px-4 sm:px-0">
        {/* Contact Details */}
        <div className="w-full lg:w-[40%]">
        <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[60%]">
          <ContactForm/>
        </div>
        
      </div>
      <div className="relative mx-auto my-12 sm:my-16 lg:my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-6 sm:gap-8 bg-gradient-to-br from-richblack-900 via-purple-900/20 to-richblack-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden px-4 sm:px-0">
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
        
        <div className="relative z-10 w-full">
          {/* Reviews from Other Learners */}
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-richblack-5 to-richblack-25 bg-clip-text text-transparent px-2">
            Reviews from other learners
          </h1>
          <p className="text-center text-richblack-300 mb-8 sm:mb-12 text-base sm:text-lg px-2">See what our students are saying</p>
          <ReviewSlider />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
