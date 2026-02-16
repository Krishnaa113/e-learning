import React from 'react'

import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// No logo import needed - using text-based brand

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-richblack-900 via-richblack-800 to-richblack-900 border-t border-richblack-700/50">
      <div className="flex lg:flex-row gap-6 sm:gap-8 items-start justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-8 sm:py-12 lg:py-16 px-4 sm:px-0">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-6 sm:pb-8 border-richblack-700/50">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-0 lg:pl-3 lg:pr-5 gap-4 sm:gap-3">
            <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-4 mb-6 sm:mb-7 lg:pl-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center shadow-lg">
                  <span className="text-richblack-900 font-bold text-xl">E</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-richblack-5 to-richblack-25 bg-clip-text text-transparent">
                  EduFlow
                </span>
              </div>
              <h1 className="text-richblack-50 font-bold text-lg mb-2">
                Company
              </h1>
              <div className="flex flex-col gap-3">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-sm cursor-pointer hover:text-yellow-50 transition-all duration-300 group"
                    >
                      <Link to={ele.toLowerCase()} className="flex items-center gap-2">
                        <span className="w-0 h-0.5 bg-yellow-50 transition-all duration-300 group-hover:w-4"></span>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 text-xl mt-2">
                <FaFacebook className="hover:text-primary-light transition-colors duration-300 cursor-pointer" />
                <FaGoogle className="hover:text-primary-light transition-colors duration-300 cursor-pointer" />
                <FaTwitter className="hover:text-primary-light transition-colors duration-300 cursor-pointer" />
                <FaYoutube className="hover:text-primary-light transition-colors duration-300 cursor-pointer" />
              </div>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[30%] mb-6 sm:mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-bold text-base sm:text-lg mb-3">
                Resources
              </h1>

              <div className="flex flex-col gap-3 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-sm cursor-pointer hover:text-yellow-50 transition-all duration-300 group"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()} className="flex items-center gap-2">
                        <span className="w-0 h-0.5 bg-yellow-50 transition-all duration-300 group-hover:w-4"></span>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-bold text-lg mt-8 mb-3">
                Support
              </h1>
              <div className="text-sm cursor-pointer hover:text-yellow-50 transition-all duration-300 group">
                <Link to={"/help-center"} className="flex items-center gap-2">
                  <span className="w-0 h-0.5 bg-yellow-50 transition-all duration-300 group-hover:w-4"></span>
                  Help Center
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[30%] mb-6 sm:mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-bold text-base sm:text-lg mb-3">
                Plans
              </h1>

              <div className="flex flex-col gap-3 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-sm cursor-pointer hover:text-yellow-50 transition-all duration-300 group"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()} className="flex items-center gap-2">
                        <span className="w-0 h-0.5 bg-yellow-50 transition-all duration-300 group-hover:w-4"></span>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-bold text-lg mt-8 mb-3">
                Community
              </h1>

              <div className="flex flex-col gap-3 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-sm cursor-pointer hover:text-yellow-50 transition-all duration-300 group"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()} className="flex items-center gap-2">
                        <span className="w-0 h-0.5 bg-yellow-50 transition-all duration-300 group-hover:w-4"></span>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-0 lg:pl-5 gap-4 sm:gap-3 mt-6 lg:mt-0">
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="w-full sm:w-[48%] lg:w-[30%] mb-6 sm:mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-bold text-base sm:text-lg mb-3">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-3 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-sm cursor-pointer hover:text-yellow-50 transition-all duration-300 group"
                        >
                          <Link to={link.link} className="flex items-center gap-2">
                            <span className="w-0 h-0.5 bg-yellow-50 transition-all duration-300 group-hover:w-4"></span>
                            {link.title}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-8 sm:pb-12 text-xs sm:text-sm border-t border-richblack-700/50 pt-6 sm:pt-8 px-4 sm:px-0">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700/50 pr-3"
                  } cursor-pointer hover:text-yellow-50 transition-all duration-300 group`}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()} className="relative">
                    {ele}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-50 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center text-richblack-300">
            Made with <span className="text-pink-200 animate-pulse"></span>Krishna Jha © 2025 Krishna Jha
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
