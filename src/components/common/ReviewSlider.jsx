import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, FreeMode, Pagination } from "swiper/modules"; 
import "swiper/swiper-bundle.css";

import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import { apiConnector } from "../../services/apiConnector";
import { ratingsEndpoints } from "../../services/apis";

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const truncateWords = 15;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API);
        if (data?.success) {
          setReviews(data?.data);
        }
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    })();
  }, []);

  const getUserName = (review) => {
    const firstName = review?.user?.firstName || "";
    const lastName = review?.user?.lastName || "";
    if (firstName && lastName && firstName !== "undefined" && lastName !== "undefined") {
      return `${firstName} ${lastName}`;
    }
    return firstName || lastName || "Anonymous User";
  };

  return (
    <div className="text-white relative">
      <div className="my-12 min-h-[280px] max-w-maxContentTab lg:max-w-maxContent mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-4 bg-gradient-to-br from-richblack-800 to-richblack-900 p-6 rounded-2xl border border-richblack-700/50 shadow-xl hover:shadow-2xl hover:border-primary-light/30 transition-all duration-300 h-full group hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${getUserName(review)}`
                      }
                      alt={getUserName(review)}
                      className="h-14 w-14 rounded-full object-cover border-2 border-primary-light/50 shadow-lg group-hover:border-yellow-400 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-2 border-richblack-900 flex items-center justify-center">
                      <FaStar className="text-richblack-900 text-xs" />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <h1 className="font-bold text-base text-richblack-5 mb-1 truncate">
                      {getUserName(review)}
                    </h1>
                    <h2 className="text-sm font-medium text-richblack-400 truncate">
                      {review?.course?.courseName || "General Course"}
                    </h2>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg text-yellow-50">
                    {review.rating.toFixed(1)}
                  </h3>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={18}
                    edit={false}
                    activeColor="#ffd700"
                    emptyColor="#4b5563"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </div>

                <p className="text-sm font-medium text-richblack-200 leading-relaxed flex-1 line-clamp-4">
                  {review?.review.split(" ").length > truncateWords
                    ? `${review?.review.split(" ").slice(0, truncateWords).join(" ")} ...`
                    : `${review?.review}`}
                </p>

                <div className="pt-2 border-t border-richblack-700/50">
                  <div className="flex items-center gap-2 text-xs text-richblack-400">
                    <span>Verified Student</span>
                    <span>•</span>
                    <span>Course Completed</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewSlider;
