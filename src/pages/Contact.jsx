import React from "react"

import Footer from "../components/common/Footer"

import ContactDetails from "../components/core/contactPage/ContactDetails"
import ContactForm from "../components/core/contactPage/ContactForm"
import ReviewSlider from "../components/common/ReviewSlider"

const Contact = () => {
  return (
    <div className="pt-4">
      <div className="mx-auto mt-8 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row py-12">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
        <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm/>
        </div>
        
      </div>
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-gradient-to-br from-richblack-900 via-purple-900/20 to-richblack-900 text-white py-20 overflow-hidden">
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
        
        <div className="relative z-10 w-full">
          {/* Reviews from Other Learners */}
          <h1 className="text-center text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-richblack-5 to-richblack-25 bg-clip-text text-transparent">
            Reviews from other learners
          </h1>
          <p className="text-center text-richblack-300 mb-12 text-lg">See what our students are saying</p>
          <ReviewSlider />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
