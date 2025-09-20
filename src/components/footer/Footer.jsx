import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Subscribe from "../button/Subscribe";
import Subscribe_Responsive from "../button/Subscribe_Responsive";
const Footer = () => {
  return (
    <div className="w-full bg-footer">
      <div className="mx-auto py-10 w-[95%] 2xl:w-[90%] xl:w-[90%]">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col gap-5 2xl:w-[45%] xl:w-[45%]">
            <a href="#" className="flex  gap-3 2xl:w-full xl:w-full">
              <img
                src="/assets/Logo/logo.png"
                className="2xl:w-[25%] md:w-[25%] xl:w-[25%] rounded-full w-[30%]"
              />
              <h1 className="text-white flex items-center lg:items-start  xl:mt-8 text-xl text-center md:text-left md:text-2xl font-semibold xl:font-semibold tracking-wider">
                MASSAGE QUÝ ÔNG
              </h1>
            </a>
            <h1 className="text-white font-semibold  text-center md:text-left text-sm md:text-xl tracking-wide w-full 2xl:w-[100%] xl:w-[100%]">
              NÂNG TẦM QUÝ ÔNG - KHẲNG ĐỊNH PHONG ĐỘ 
            </h1>
            <p className="text-white opacity-80 font-normal text-base text-center md:text-left md:text-base py-5 md:py-0 tracking-wide w-[90%] md:w-full mx-auto ">
              Địa chỉ : Số 28 – 30 Lê Đức Thọ, Mỹ Đình, Nam Từ Liêm, Hà Nội.
            </p>
            <div>
              <p className="text-white w-[90%] mx-auto md:w-full  mb-5 font-medium text-center md:text-left text-sm md:text-base tracking-wide">
                CÁC PHƯƠNG TIỆN TRUYỀN THÔNG
              </p>
              <ul className="flex text-white  gap-5 w-[90%] mx-auto md:w-full md:justify-start justify-center opacity-30 text-3xl xl:text-3xl leading-loose">
                <li>
                  <a href="https://s.net.vn/5eJU">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="https://s.net.vn/t17R">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="https://s.net.vn/ZYO7">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                </li>
                <li>
                  <a href="https://s.net.vn/Ar0E">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="xl:w-[25%] w-[90%] mx-auto md:w-full xl:mt-8 flex flex-col gap-3 text-center md:text-left xl:gap-5 tracking-wide">
            <p className="text-white text-xl font-extrabold tracking-wider">
              LIÊN HỆ
            </p>
            <p className="text-white opacity-80 font-normal text-base md:text-base tracking-wide">
              Hotline : 0912.30.28.30 - 098.656.2830
            </p>
            <p className="text-white opacity-80 font-normal text-base md:text-base tracking-wide">
              Facebook : Massage Quý Ông
            </p>
            <p className="text-white opacity-80 font-normal text-base md:text-base tracking-wide">
              Zalo : 0912.30.28.30 - 098.656.2830
            </p>
            <p className="text-white opacity-80 font-normal text-base md:text-base tracking-wide">
              Telegram :0912.30.28.30
            </p>
          </div>

          <div className="w-full xl:w-[40%] mt-5 lg:mt-0 xl:mt-8 text-center md:text-left  flex flex-col gap-5">
            <p className="text-white w-[90%] mx-auto md:w-full text-xl font-extrabold tracking-wider">
              VỊ TRÍ TRÊN GOOLGE MAP
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8060420477377!2d105.7670537750248!3d21.031445187686828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134559621a35069%3A0xa132d48a3f0b7897!2zTWFzc2FnZSBRdcO9IMOUbmc!5e1!3m2!1svi!2s!4v1735723198564!5m2!1svi!2s"
              className="h-[220px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] 2xl:w-[80%] xl:w-[80%] mx-auto pb-5">
        <hr className="opacity-70" />
        <p className="text-white text-center md:text-left opacity-70 text-xs font-light tracking-wider mt-5">
          © Bản quyền thuộc về Massage Quý Ông
        </p>
      </div>
    </div>
  );
};

export default Footer;
