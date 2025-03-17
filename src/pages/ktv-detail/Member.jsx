import { Member_Ship } from "../../components/data/KTV";
import Booking from "../../components/button/Subscribe";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Review_PR from "../../components/review/Review";
import Subscribe_Responsive from "../../components/button/Subscribe_Responsive";
import { useParams } from "react-router-dom";

const Girl_Detail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  // Tìm thành viên theo id
  const member = Member_Ship.find((item) => item.id === parseInt(id));

  if (!member) {
    return <div>Không tìm thấy thành viên</div>;
  }

  return (
    <div className="py-5 mt-28 lg:mt-0">
      <div className=" md:w-[100%] w-[90%] mx-auto sm:grid-cols-2 gap-7">
        <div className="flex w-full justify-center group flex-col md:flex-row">
          <div className="md:w-[95%] lg:w-[75%] xl:w-[60%] w-full items-center flex-col gap-5">
            <div className="overflow-hidden flex border-2 border-yellow-600 text-white">
              <img
                src={member.url}
                alt={member.name}
                className="md:w-[50%] w-full object-cover h-auto"
              />
              <div className="md:flex hidden   flex-col  justify-between w-[90%] p-5">
                <p className="text-3xl bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text text-center py-5 font-semibold">
                  {member.name}
                </p>
                <div className="flex flex-col justify-between xl:gap-16 md:gap-5 lg:gap-10 items-center">
                  <p className="xl:text-xl text-base text-white text-center">
                    <span className="xl:text-xl md:text-base font-semibold">
                      MÔ TẢ NGẮN
                    </span>
                    : {member.desc}
                  </p>

                  <p className="xl:text-xl text-base text-white text-center">
                    <span className="xl:text-xl md:text-base font-semibold">
                      NĂM SINH
                    </span>
                    : {member.age}
                  </p>
                  <p className="xl:text-xl text-base text-white text-center">
                    <span className="xl:text-xl md:text-base font-semibold">
                      QUÊ QUÁN
                    </span>
                    : {member.country}
                  </p>

                  <p className="xl:text-xl text-base text-white text-center">
                    <span className="xl:text-xl md:text-base font-semibold">
                      SỐ ĐO BA VÒNG
                    </span>
                    : {member.roud}
                  </p>
                  <p className="xl:text-base text-base text-white text-center">
                    <span className="xl:text-base flex items-center gap-3 md:text-sm font-semibold">
                      KIỂM ĐỊNH :{" "}
                      <p className="bg-green-600 font-medium text-sm py-1 px-2 rounded-lg flex gap-2 items-center">
                        {" "}
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-white"
                        />
                        Đã kiểm tra sức khỏe định kỳ
                      </p>
                    </span>
                  </p>
                </div>

                <div className=" w-full" onClick={toggleOverlay}>
                  <p className="text-xs  text-white text-center flex items-end pt-3 xl:pt-0 xl:items-end justify-between w-[100%] mx-auto pb-4">
                    <p className="lg:text-base text-xs font-bold italic ">
                      ĐÁNH GIÁ :{" "}
                    </p>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="text-yellow-500 ml-1 text-2xl xl:text-3xl "
                      />
                    ))}
                    ( {member.vote} VOTE {""})
                  </p>
                  <Booking />
                </div>
                {isOverlayVisible && (
                  <div
                    onClick={toggleOverlay}
                    className="  fixed w-full bg-black inset-0 bg-bgr-download bg-opacity-50 flex items-center justify-center z-50 transition-example delay-1000"
                  >
                    <Subscribe_Responsive setOpen={setIsModalOpen} />
                  </div>
                )}
              </div>
            </div>
            <div className="flex md:hidden flex-col text-white mx-auto justify-between w-full ">
              <div className="flex flex-col gap-5">
                <p className="text-2xl md:hidden  bg-gradient-to-t from-yellow-900 pt-5 to-yellow-300 text-transparent bg-clip-text text-center font-semibold">
                  {member.name}
                </p>
                <p>
                  <span className="text-sm font-semibold">MÔ TẢ NGẮN</span>:{" "}
                  {member.desc}
                </p>

                <p>
                  <span className="text-sm font-semibold">NĂM SINH</span>:{" "}
                  {member.age}
                </p>
                <p>
                  <span className="text-sm font-semibold">QUÊ QUÁN</span>:{" "}
                  {member.country}
                </p>

                <p>
                  <span className="text-sm font-semibold">SỐ ĐO BA VÒNG</span>:{" "}
                  {member.roud}
                </p>
                <p className="text-sm text-white text-center">
                  <span className="text-sm flex items-center md:text-base gap-3 font-semibold">
                    KIỂM ĐỊNH :{" "}
                    <p className="bg-green-600 font-medium text-sm py-1 px-2 rounded-lg flex gap-2 items-center">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-white"
                      />
                      Đã kiểm tra sức khỏe định kỳ
                    </p>
                  </span>
                </p>
              </div>

              <p className="text-xs text-white text-center py-5 md:py-0 flex items-end justify-between w-[95%] mx-auto pb-4">
                <p className="text-xs font-bold italic ">ĐÁNH GIÁ : </p>
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="text-yellow-400 ml-1 md:text-xl text-2xl"
                  />
                ))}
                ( {member.vote} VOTE {""})
              </p>
              <div
                className=" w-full flex pt-5 justify-center"
                onClick={toggleOverlay}
              >
                <Booking />
              </div>
              {isOverlayVisible && (
                <div
                  onClick={toggleOverlay}
                  className="  fixed w-full bg-black inset-0 bg-bgr-download bg-opacity-50 flex items-center justify-center z-50 transition-example delay-1000"
                >
                  <Subscribe_Responsive setOpen={setIsModalOpen} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-[100%] text-white ">
          <span className="md:text-2xl text-base font-semibold py-5 flex justify-center">
            _________MÔ TẢ CHI TIẾT_________
          </span>
          <div className="text-2xl text-center py-3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 p-5 w-full gap-5 py-5 justify-center md:w-[80%] mx-auto xl:w-[65%]">
            {member.img_data.map((subImage, subIndex) => (
              <div
                key={subIndex}
                className={`snap-item w-full h-[400px] md:h-[700px] flex justify-center items-center ${
                  subIndex === selectedImageIndex
                    ? "border-2 border-red-700"
                    : "border-2 border-red-700"
                }`}
                onClick={() => handleImageClick(subIndex)}
              >
                <img
                  src={subImage.url}
                  alt={member.name + " - Ảnh phụ " + (subIndex + 1)}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="md:w-[80%] xl:w-[60%] w-full py-5 mx-auto md:text-lg text-base">
            <p>
              Em ấy là một chuyên viên massage với hơn 5 năm kinh nghiệm trong
              việc thực hiện các liệu trình massage thư giãn... Em ấy là một
              chuyên viên massage với hơn 5 năm kinh nghiệm trong việc thực hiện
              các liệu trình massage thư giãn... Em ấy là một chuyên viên
              massage với hơn 5 năm kinh nghiệm trong việc thực hiện các liệu
              trình massage thư giãn... Em ấy là một chuyên viên massage với hơn
              5 năm kinh nghiệm trong việc thực hiện các liệu trình massage thư
              giãn...
            </p>
          </div>
          <div className="md:w-[90%] mx-auto">
            <Review_PR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Girl_Detail;
