import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    package: "",
    numberOfPeople: "",
    additionalRequest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lấy ngày hiện tại theo định dạng yyyy-mm-dd
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Thiết lập ngày mặc định khi component được render
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: getCurrentDate(),
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^0\d{9,10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(formData.phone)) {
      Swal.fire({
        icon: "error",
        title: "Lỗi!",
        text: "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại hợp lệ!",
        confirmButtonText: "Đóng",
        confirmButtonColor: "#e11d48",
      });
      return;
    }

    if (isSubmitting) {
      Swal.fire({
        icon: "warning",
        title: "Vui lòng đợi!",
        text: "Bạn chỉ có thể gửi yêu cầu sau 5 giây.",
        confirmButtonText: "Đóng",
        confirmButtonColor: "#e11d48",
      });
      return;
    }
//
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_deupnse",
        "template_t8vll2k",
        e.target,
        "6nooVVJZEQE93be_W"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Thành công!",
            html: "Yêu cầu của bạn đã được gửi thành công!<br> <br>Chúng tôi sẽ sớm phản hồi cho bạn!",
            confirmButtonText: "Xác nhận",
            confirmButtonColor: "#4f46e5",
          });

          setTimeout(() => {
            setIsSubmitting(false);
          }, 5000);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Lỗi!",
            text: "Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.",
            confirmButtonText: "Đóng",
            confirmButtonColor: "#e11d48",
          });

          setTimeout(() => {
            setIsSubmitting(false);
          }, 5000);
        }
      );
  };

  // Tạo danh sách thời gian từ 10h sáng hôm trước đến 3h sáng hôm sau
  const timeOptions = [];
  for (let hour = 10; hour < 24; hour++) {
    timeOptions.push(`${hour.toString().padStart(2, "0")}:00`);
    timeOptions.push(`${hour.toString().padStart(2, "0")}:30`);
  }
  for (let hour = 0; hour <= 3; hour++) {
    timeOptions.push(`${hour.toString().padStart(2, "0")}:00`);
    if (hour !== 3) {
      timeOptions.push(`${hour.toString().padStart(2, "0")}:30`);
    }
  }

  return (
    <div className="w-[100%] md:w-[80%] lg:w-[100%] mx-auto py-5 px-3 rounded-lg shadow-lg">
      <h2 className="lg:text-2xl text-xl font-semibold text-center text-white mb-6">
        GỬI YÊU CẦU ĐẶT LỊCH
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tên / Bí danh"
            className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Số Điện Thoại"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="" disabled>
              Chọn giờ
            </option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            required
            className="w-full text-black p-3 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="" disabled>
              Chọn dịch vụ
            </option>
            <option value="QUÝ ÔNG ĐẲNG CẤP - 2.000.000vnđ">
              QUÝ ÔNG ĐẲNG CẤP - 2.000.000vnđ
            </option>
            <option value="QUÝ ÔNG HOÀN HẢO - 1.500.000vnđ">
              QUÝ ÔNG HOÀN HẢO - 1.500.000vnđ
            </option>
            <option value="QUÝ ÔNG HỘI TỤ - 2.300.000vnđ">
              QUÝ ÔNG HỘI TỤ - 2.300.000vnđ
            </option>
            <option value="QUÝ ÔNG QUYỀN LỰC - 3.000.000vnđ">
              QUÝ ÔNG QUYỀN LỰC - 3.000.000vnđ
            </option>
          </select>
          <input
            type="number"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            required
            placeholder="Số người"
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <textarea
          name="additionalRequest"
          value={formData.additionalRequest}
          onChange={handleChange}
          placeholder="Yêu Cầu Khác (chọn kỹ thuật viên, dịch vụ phụ...)"
          className="w-full italic text-black p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 text-white font-semibold rounded-xl focus:outline-none focus:ring-2 transition-all duration-500 transform ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-600 hover:bg-opacity-90 hover:scale-105"
          }`}
        >
          {isSubmitting ? "Đang Gửi..." : "Đặt Lịch Ngay"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
