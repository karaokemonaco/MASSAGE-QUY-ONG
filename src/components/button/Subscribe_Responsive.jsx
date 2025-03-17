import React from "react";
import FB from "./FaceBook";
import Za_lo from "./Zalo";
import PhoneNumber from "./Phone";
import ContactForm from "../forms/form";
import Telegram from "./Tele";

const Subscribe_Responsive = ({ setOpen }) => {
  const closeOverlay = () => {
    setOpen(false);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 flex justify-center items-center "
      onClick={closeOverlay}
    >
      <div
        className="bg-black md:p-5 rounded-lg gap-4 border-2 items-center border-yellow-700 flex flex-col max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <ContactForm />
        <p className="italic hidden md:block text-white text-xs md:text-lg text-center">
          Hoặc liên hệ với chúng tôi qua các hình thức
        </p>
        <div className=" gap-4 hidden md:grid-cols-2 md:grid pb-5 w-full">
          <FB />
          <Za_lo />
          <Telegram />
          <PhoneNumber />
        </div>
      </div>
    </div>
  );
};

export default Subscribe_Responsive;
