import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  return (
    <div className="w-[80%] hidden mx-auto text-sm px-5 xl:px-0 lg:text-md font-semibold h-10 md:flex items-center justify-around mb-5 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 animate-gradient clip-path-diagonal">
      <p className="flex items-center">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 lg:text-xs xl:text-base mb-2 xl:mb-0 text-black" />
        Địa chỉ : Số 28 – 30 Lê Đức Thọ, Mỹ Đình, Nam Từ Liêm, Hà Nội
      </p>
      
      <p className="hidden items-center lg:text-xs xl:text-base lg:flex">
        <FontAwesomeIcon icon={faPhone} className="mr-2 text-black" />
        Liên Hệ : 0912.30.28.30 - 098.656.2830
      </p>
    </div>
  );
};

export default ContactInfo;
