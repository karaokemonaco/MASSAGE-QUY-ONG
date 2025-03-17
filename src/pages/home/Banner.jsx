import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="w-[100%] md:w-[100%] mx-auto flex flex-col pb-6  xl:py-10 text-white gap-5 lg:w-[100%] overflow-hidden">
      <div className="slider-container">
        <Slider {...settings}>
          {/*_________________________________________________________________________________________*/}
          <div>
            {/*Ảnh banner 1*/}
            <LazyLoadImage
              src="/assets/GioiThieu/Banner4.jpg"
              alt="Lady Loading"
              className="w-full h-[200px] md:h-[350px] lg:h-[600px] object-cover "
            />+-
          </div>
          {/*_________________________________________________________________________________________*/}
          <div>
            {/*Ảnh banner 2*/}
            <LazyLoadImage
              src="/assets/GioiThieu/Banner2.webp"
              alt="Lady Loading"
              className="w-full h-[200px] md:h-[350px] lg:h-[600px] object-cover"
            />
          </div>
          {/*_________________________________________________________________________________________*/}
          <div>
            {/*Ảnh banner 3*/}
            <LazyLoadImage
              src="/assets/GioiThieu/Banner3.webp"
              alt="Lady Loading"
              className="w-full h-[200px] md:h-[350px] lg:h-[600px] object-cover"
            />
          </div>
          {/*_________________________________________________________________________________________*/}
          <div>
            {/*Ảnh banner 3*/}
            <LazyLoadImage
              src="/assets/GioiThieu/Banner1.webp"
              alt="Lady Loading"
              className="w-full h-[200px] md:h-[350px] lg:h-[600px] object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
