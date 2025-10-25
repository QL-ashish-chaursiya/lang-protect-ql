 import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight } from "lucide-react";

const JordsStyleCarousel = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      img: "/Images/cr1.svg",
     
    },
    {
      img: "/Images/cr2.svg",
      
    },
    {
      img: "/Images/cr3.svg",
      
    },
    {
      img: "/Images/cr4.svg",
     
    },
    {
      img: "/Images/cr5.svg",
     
    },
    {
      img: "/Images/cr6.svg",
     
    },
    {
      img: "/Images/cr7.svg",
     
    },
  ];

  return (
    <div className="relative pt-[60px] md:pt-0 w-full pb-10 flex flex-col items-center md:mt-[200px]">
      {/* Swiper Section */}
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: false,
        }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="jords-swiper w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="jords-slide">
            <div className="slide-content">
              <div className="image-wrapper">
                <img
                  src={slide.img}
                  alt={'Image'}
                  className="slide-image"
                />
              </div>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="nav-button"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="nav-button"
          aria-label="Next slide"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Styles */}
      <style>{`
        /* Jords.co.uk inspired carousel styles */
        .jords-swiper {
          padding: 40px 0 60px 0 !important;
          overflow: visible !important;
        }

        .jords-slide {
          width: 81vw !important;
          max-width: 90vw !important;
          height: auto !important;
        }

        @media (max-width: 768px) {
          .jords-slide {
            width: 85vw !important;
            max-width: 100% !important;
          }
        }

        .slide-content {
          position: relative;
          width: 100%;
          height: 100%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          background: #f8f9fa;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-image {
          width: 100%;
          object-fit: contain;
          display: block;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (max-width: 768px) {
           .jords-swiper .swiper-pagination {
          display: none !important;
        }
          .jords-swiper{
          padding-bottom:20px !important;
          }
        }

         

        /* Inactive slides styling */
        .jords-swiper .swiper-slide {
          opacity: 1;
          transform: scale(0.85);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .jords-swiper .swiper-slide .image-wrapper {
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
        }

        /* Active slide styling */
        .jords-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }

        .jords-swiper .swiper-slide-active .image-wrapper {
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.2);
        }

        .jords-swiper .swiper-slide-active .slide-title {
          opacity: 1;
          transform: translateY(0);
        }

        /* Pagination dots */
        .jords-swiper .swiper-pagination {
          bottom: 20px !important;
        }

    .jords-swiper .swiper-pagination-bullet {
  width: 75.49px;
  height: 8.65px;
  border-radius: 40px;
  background-color: #cbd5e1;
  opacity: 1;
  margin: 0 6px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
}

.jords-swiper .swiper-pagination-bullet-active {
  background-color: #A59BED;
  width: 75.49px;
  border-radius: 40px;
}

        /* Navigation buttons */
        .nav-button {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .nav-button:hover {
          background: #f9fafb;
          border-color: #d1d5db;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .nav-button:active {
          transform: translateY(0);
        }

        .nav-button svg {
          color: #374151;
        }

        /* Remove default swiper buttons */
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }

        /* Smooth scrolling behavior */
        .jords-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>
    </div>
  );
};

export default JordsStyleCarousel;