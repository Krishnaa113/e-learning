import React from "react"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import HighlightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimeLineSection from "../components/core/HomePage/TimeLineSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import Footer from "../components/common/Footer"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import ReviewSlider from "../components/common/ReviewSlider"

const Home=()=>{
    return(
        <div className="relative"> 
            {/*Section 1 - Modern Hero Section*/}
            <div className="mx-auto relative flex flex-col w-9/12 items-center max-w-maxContent text-white justify-between pt-8 pb-16">

          <Link to={"/signup"}>
            <div  className="mt-16 p-1 mx-auto rounded-full bg-gradient-to-r from-richblack-800 to-richblack-900 font-bold text-richblack-200 
            transition-all duration-300 hover:scale-105 w-fit group border border-richblack-700 shadow-lg">     
                <div className="flex flex-row items-center gap-2 rounded-full transition-all duration-300 px-4 py-2 group-hover:bg-gradient-to-r group-hover:from-primary-light/10 group-hover:to-accent-light/10">
                    <p>Become an Instructor</p>
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
                </div>
            </div>
                </Link>

            <div className="text-center text-5xl lg:text-6xl font-bold mt-10 leading-tight"> 
                Empower your future With
                <br/>
                <HighlightText text={"Coding Skills"}/>
            </div>

            <div className="mt-6 w-[90%] text-center text-lg lg:text-xl text-richblack-300 leading-relaxed">
                With our online coding courses, you can learn at your own pace, from anywhere in the world and get access of wealth of resources, including hands-on projects, quizzes and personalized feedback from instructors. 
            </div>

            <div className="flex flex-row gap-6 mt-10"> 
                <CTAButton active={true} linkto={"/signup"}>Start Learning</CTAButton>
                <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>
            </div>

            <div className="relative mx-3 my-16 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-light via-accent-light to-pink-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-richblack-700/50">
                    <video width={900} height={500} className="w-full h-auto"
                    loop
                    muted
                    autoPlay
                    >
                     <source src={Banner} type="video/mp4"/>
                    </video>
                </div>
            </div>
            

            {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-pink"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        {/* Explore Section */}
        <ExploreMore />
            </div>

          <div className="mx-auto w-9/12 max-w-maxContent flex flex-col items-center justify-between gap-10 py-16">

          <div className="flex flex-col lg:flex-row lg:gap-12 gap-8 mt-8 mb-12">

             <div className="text-4xl lg:text-5xl font-bold lg:w-[50%] leading-tight">
             Get the skills you need for a{" "}
             <HighlightText text={"job that is in demand."} />
             </div>

             <div className="flex flex-col items-start gap-8 lg:w-[50%]">
              <div className="text-lg text-richblack-300 leading-relaxed">
                The modern e-learning platform dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"} >
                <div>Learn More</div>
              </CTAButton>
            </div>

          </div>

          <TimeLineSection/>

            <LearningLanguageSection/>
          </div>

            {/*Section 3 - Enhanced Reviews Section*/}
           <div className="w-full mx-auto flex-col items-center justify-between gap-12
           bg-gradient-to-br from-richblack-900 via-purple-900/20 to-richblack-900 text-white py-20 relative overflow-hidden">
           {/* Purple gradient overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
           
           <div className="relative z-10 w-9/12 max-w-maxContent mx-auto">
             <InstructorSection/>

             {/* Reviews from Other Learners */}
             <div className="mt-16">
               <h1 className="text-center text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-richblack-5 to-richblack-25 bg-clip-text text-transparent">
                 Reviews from other learners
               </h1>
               <p className="text-center text-richblack-300 mb-12 text-lg">See what our students are saying</p>
               <ReviewSlider />
             </div>
           </div>
           </div>

           {/*Footer*/}
           
           <Footer/>
        </div>
    )
}
export default Home