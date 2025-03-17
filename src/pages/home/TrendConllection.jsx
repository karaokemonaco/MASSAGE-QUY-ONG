import { Products_Service } from "../../components/data/goi-dich-vu";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const TrendingCollection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [showFullText, setShowFullText] = useState(isLargeScreen);

{/* Tiêu đề Welcome to Massage Quý Ông*/}
  const textContent = `
    Hệ thống Massage Quý Ông đạt tiêu chuẩn quốc tế, 
    Trung tâm massage đầu tiên được thành lập vào năm 2016 tại khu vực Mỹ Đình,
     trung tâm đắc địa của thủ đô Hà Nội. Massage Quý Ông được thiết kế theo phong cách kết hợp Á - Âu sang trọng,
      cùng trang thiết bị hiện đại và nội thất cao cấp. Không gian trung tâm sử dụng gam màu nâu trầm làm điểm nhấn, 
      tạo cảm giác ấm cúng và lịch lãm ngay từ lần đầu bước chân đến. Bên cạnh đó, sự kết hợp giữa tông màu trắng tinh tế 
      và ánh sáng dịu nhẹ giúp không gian trở nên trẻ trung, hiện đại và sang trọng. Với đội ngũ kỹ thuật viên massage chuyên nghiệp,
       được đào tạo bài bản cùng các liệu pháp chăm sóc sức khỏe đẳng cấp, chúng tôi cam kết mang đến cho quý ông những trải nghiệm thư 
       giãn tuyệt vời nhất. Đây chính là không gian lý tưởng để quý khách tận hưởng sự thoải mái, tái tạo năng lượng và khẳng định phong
        cách đẳng cấp của mình.
  `;


  useEffect(() => {
    const handleResize = () => {
      const lgScreen = window.innerWidth >= 1024;
      setIsLargeScreen(lgScreen);
      setShowFullText(lgScreen); 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayedText = showFullText
    ? textContent
    : textContent.slice(0, 150) + (textContent.length > 300 ? "..." : "");

  return (
    <div className="lg:w-[90%] w-[100%] mx-auto bg-header">
     
      <div className="w-full mx-auto py-5 mb-10 flex items-center justify-between relative">
        <div className="xl:text-5xl md:text-2xl text-xl w-full uppercase font-semibold leading-loose text-center text-white absolute md:left-1/2 transform md:-translate-x-1/2">
          <h1 className="block md:hidden text-white italic w-[100%] text-center">
            Welcome to Massage Quý Ông
          </h1>
          <h1 className="hidden md:inline-block w-full text-white italic tracking-widest">
            Welcome to Massage Quý Ông
          </h1>
        </div>

        <Link
          to="/rankings"
          className="hidden text-white lg:block md:mr-14 lg:mr-0 text-sm p-3 xl:text-xl lg:p-5 rounded-full bg-customRed hover:text-customRed hover:bg-white uppercase font-semibold leading-loose text-right  ml-auto transition-all duration-700 hover:scale-110"
        >
          Kỹ Thuật Viên
        </Link>
      </div>

     
      <div className="lg:w-[100%] w-full mx-auto flex justify-center">
        <div className="w-full flex flex-col gap-5 relative group">
          {/* Ảnh Welcome to Massage Quý Ông*/}
          <img
            src="/assets/GioiThieu/Banner1.webp"
            alt="Lady Loading"
            className="w-full h-auto object-cover hover:scale-[0.95] transition-transform duration-500"
          />

         
          <div className="text-white md:text-xl text-base px-4 lg:px-0 tracking-tight">
            <p>{displayedText}</p>

           
            {!isLargeScreen && (
              <button
                onClick={() => setShowFullText(!showFullText)}
                className="text-white italic text-sm text-center w-full underline mt-3"
              >
                {showFullText ? "Thu gọn" : "Xem thêm"}
              </button>
            )}
          </div>

          {/* Video*/}
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=eF7eRpLivSg"
              playing={false}
              controls={true}
              width="100%"
              alt="Lady Loading"
              height="400px"
              className="hover:scale-[0.95] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
