import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { massage_data } from "../../components/data/loi-ich";
import Booking from "../../components/button/Subscribe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import { faClock } from "@fortawesome/free-regular-svg-icons"; // Import faStar and faClock icons
import Subscribe_Responsive from "../../components/button/Subscribe_Responsive";

const TreatM = () => {
  const { id } = useParams();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isImageOverlayVisible, setIsImageOverlayVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return (
        <>
          {text.substring(0, maxLength)}
          <span className="text-sm italic">...xem thêm </span>
        </>
      );
    }
    return text;
  };
  const handleImageClick = (index) => {
    setMainImage(
      massage_data.find((data) => data.id === parseInt(id)).img_data[index]
    );
    setSelectedImageIndex(index);
  };

  const item = massage_data.find((data) => data.id === parseInt(id));

  if (!item) {
    return <div>Bài viết không tồn tại</div>;
  }

  const relatedTreatments = massage_data.filter(
    (data) => data.id !== parseInt(id) && data.category === item.category
  );

  return (
    <div className="py-5 mt-28 lg:mt-0">
      <div className=" relative"></div>
      <div className="py-5 relative">
        <img
          className="md:h-[200px] h-[150px] w-full opacity-15 object-cover"
          src="/assets/GioiThieu/Be2.jpg"
        />
        <p className="md:text-3xl text-xl md:w-[70%] w-[90%] mx-auto text-center tracking-widest text-white font-bold  absolute inset-0 flex items-center justify-center">
          {item.name}
        </p>
      </div>
      <p className="md:text-lg text-white md:w-[80%] w-[95%] mx-auto text-left">
        {item.desc}
      </p>
      <div className="md:w-[80%] w-[95%] mx-auto sm:grid-cols-2 gap-7">
        <div className=" w-full items-start gap-5 group">
          <div className="w-[100%] flex flex-col gap-5">
            <div className="py-5">
              <img
                src={mainImage ? mainImage.url : item.url}
                alt={item.name}
                className="w-full object-cover h-[350px] hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          <div className="w-[100%] mt-5">
            <p className="md:text-base text-sm text-white italic text-right">
              Thời gian đăng bài : {item.time}{" "}
            </p>
          </div>
        </div>

        <div className="w-[100%] text-white">
          <div className=" gap-5">
            <div className="  flex-col  ">
              <p className="text-base md:text-lg text-white order-3 w-full mx-auto text-left py-5">
                {item.desc1}
              </p>
              {item.img_data[0] && (
                <img
                  src={item.img_data[0].url}
                  alt="Ảnh chi tiết"
                  className="w-full h-[250px] object-cover hover:scale-105 transition duration-700"
                />
              )}
            </div>

            <div className="flex-col  ">
              <p className="text-base md:text-lg text-white order-3 w-full mx-auto text-left py-5">
                {item.desc2}
              </p>
              {item.img_data[1] && (
                <img
                  src={item.img_data[1].url}
                  alt="Ảnh chi tiết"
                  className="w-full h-[250px] object-cover hover:scale-105 transition duration-700"
                />
              )}
            </div>
            <div className="flex-col  ">
              <p className="text-base md:text-lg text-white order-3 w-full mx-auto text-left py-5">
                {item.desc3}
              </p>
              {item.img_data[2] && (
                <img
                  src={item.img_data[2].url}
                  alt="Ảnh chi tiết"
                  className="w-full h-[250px] object-cover hover:scale-105 transition duration-700"
                />
              )}
            </div>
            <div className="flex-col  ">
              <p className="text-base md:text-lg text-white order-3 w-full mx-auto text-left py-5">
                {item.desc4}
              </p>
              {item.img_data[3] && (
                <img
                  src={item.img_data[3].url}
                  alt="Ảnh chi tiết"
                  className="w-full h-[250px] object-cover hover:scale-105 transition duration-700"
                />
              )}
              <p>
                Trên đây là những giới thiệu cơ bản của Masage Quý Ông về dịch
                vụ Super KIng tại cơ sở massage. Masage Quý Ông luôn tự hào mang
                tới những trải nghiệm dịch vụ thoải mái, sang trọng và chuyên
                nghiệp nhất, luôn đặt sự thư giãn của khách hàng lên đầu, lấy ấy
                làm kim chỉ nam để phục vụ các khách hàng của mình.
              </p>
            </div>
          </div>

          <div className="py-10">
            <span className="text-2xl font-semibold py-5 flex justify-center">
              BÀI VIẾT LIÊN QUAN
            </span>
            <div className="overflow-x-auto w-full flex flex-col gap-4 mx-auto">
              {relatedTreatments.map((relatedItem) => (
                <div
                  key={relatedItem.id}
                  className="flex-shrink-0 w-[100%] mx-auto"
                >
                  <Link
                    to={`/treat/${relatedItem.id}`}
                    className="flex flex-col md:flex-row gap-4 items-center hover:scale-[0.95] transition-all duration-500 group"
                    style={{
                      borderWidth: "2px",
                      borderImage: "linear-gradient(90deg, #FFD700, #A37D2B) 1",
                      borderStyle: "solid",
                    }}
                  >
                    <div className="relative md:py-5 w-full md:w-[30%]">
                      <img
                        src={relatedItem.url}
                        alt={relatedItem.name}
                        className="w-full h-[200px] object-cover "
                      />
                      <div className="absolute italic inset-0 bg-black bg-opacity-60 text-white text-lg font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        Xem chi tiết
                      </div>
                    </div>

                    <div className="flex flex-col w-[90%] mx-auto md:w-[70%] gap-2">
                      <p className="text-white px-5 md:px-0 lg:pr-5 xl:px-5  line-clamp-1 md:line-clamp-2 text-center md:text-left md:text-2xl text-base font-bold">
                        {relatedItem.name}
                      </p>
                      <p className="hidden xl:block text-white text-base p-5">
                        {truncateText(relatedItem.desc, 300)}
                      </p>
                      <p className="block md:hidden text-white text-base ">
                        {truncateText(relatedItem.desc, 100)}
                      </p>
                      <p className="hidden md:block xl:hidden text-white text-base ">
                        {truncateText(relatedItem.desc, 200)}
                      </p>
                      <div className="flex justify-end  pb-4 md:pb-0 md:px-5 items-center gap-2">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-gray-300"
                        />
                        <p className="lg:text-sm text-sm italic  text-gray-300">
                          {relatedItem.time}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatM;
