import React from "react"
import HighlightText from "../components/core/HomePage/HighlightText"
import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponent from "../components/core/AboutPage/StatsComponent"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"

const About=()=>{
  return(
    <div className="text-white pt-4">
      {/*section */}
      <section className="bg-gradient-to-br from-richblack-800 via-richblack-900 to-richblack-800 relative overflow-hidden">
        <div className="relative mx-auto flex w-11/12 sm:w-10/12 lg:w-9/12 max-w-maxContent flex-col justify-between gap-6 sm:gap-10 text-center text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-0">
          <header className="mx-auto py-6 sm:py-8 lg:py-12 text-3xl sm:text-4xl lg:text-5xl font-bold lg:w-[70%] leading-tight px-2">
            Driving Innovation in Online Education for a
            <br/>
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-4 sm:mt-6 text-center text-base sm:text-lg font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
              EduFlow is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="h-[50px] sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 grid w-[95%] sm:w-[100%] left-[50%] translate-x-[-50%] translate-y-[20%] sm:translate-y-[30%] grid-cols-3 gap-2 sm:gap-3 lg:gap-5 px-2 sm:px-0">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-richblack-700/50 hover:scale-105 transition-transform duration-300">
              <img src={BannerImage1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-richblack-700/50 hover:scale-105 transition-transform duration-300">
              <img src={BannerImage2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-richblack-700/50 hover:scale-105 transition-transform duration-300">
              <img src={BannerImage3} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

     {/*section 2*/}
     <section className="border-b border-richblack-700/50 bg-richblack-900">
     <div className="mx-auto flex w-11/12 sm:w-10/12 lg:w-9/12 max-w-maxContent flex-col justify-between gap-6 sm:gap-10 py-8 sm:py-12 px-4 sm:px-0">
       <div className="h-[40px] sm:h-[60px]"></div>
       <Quote />
     </div>
   </section>

   {/*Section 3*/}

   <section className="bg-richblack-900 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto flex w-11/12 sm:w-10/12 lg:w-9/12 max-w-maxContent flex-col justify-between gap-10 sm:gap-12 lg:gap-16 text-richblack-500 px-4 sm:px-0">
          <div className="flex flex-col items-center lg:flex-row justify-between gap-8 sm:gap-10 lg:gap-0">
            <div className="my-6 sm:my-8 lg:my-12 flex lg:w-[50%] flex-col gap-6 sm:gap-8">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent lg:w-[70%] leading-tight">
                Our Founding Story
              </h1>
              <p className="text-base sm:text-lg font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base sm:text-lg font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div className="w-full lg:w-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-richblack-700/50 hover:scale-105 transition-transform duration-300">
              <img
                src={FoundingStory}
                alt="Founding Story"
                className="w-full h-auto shadow-[0_0_30px_0] shadow-pink-500/30"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-12 lg:flex-row justify-between gap-8 sm:gap-10 lg:gap-12">
            <div className="my-6 sm:my-8 lg:my-12 flex lg:w-[40%] flex-col gap-6 sm:gap-8">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent lg:w-[70%] leading-tight">
                Our Vision
              </h1>
              <p className="text-base sm:text-lg font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-6 sm:my-8 lg:my-12 flex lg:w-[40%] flex-col gap-6 sm:gap-8">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-3xl sm:text-4xl lg:text-5xl font-bold lg:w-[70%] leading-tight">
              Our Mission
              </h1>
              <p className="text-base sm:text-lg font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponent />

      <section className="mx-auto mt-12 sm:mt-16 lg:mt-20 flex w-11/12 sm:w-10/12 lg:w-9/12 max-w-maxContent flex-col justify-between gap-8 sm:gap-10 text-white px-4 sm:px-0">
        <LearningGrid />
        <ContactFormSection/>
        
      </section>

      <div className="relative mx-auto my-12 sm:my-16 lg:my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-6 sm:gap-8 bg-gradient-to-br from-richblack-900 via-purple-900/20 to-richblack-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden px-4 sm:px-0">
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
        
        <div className="relative z-10 w-full">
          {/* Reviews from Other Learners */}
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-richblack-5 to-richblack-25 bg-clip-text text-transparent px-2">
            Reviews from other learners
          </h1>
          <p className="text-center text-richblack-300 mb-8 sm:mb-12 text-base sm:text-lg px-2">See what our students are saying</p>
          <ReviewSlider/>
        </div>
      </div>
      <Footer />
     
    </div>
  )
}

export default About