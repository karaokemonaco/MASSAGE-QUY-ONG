import { Link } from "react-router-dom";
import { massage_data } from "../../components/data/loi-ich";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LoiIch = () => {
  const itemsPerPage = 4; // Số lượng mục hiển thị trên mỗi trang
  const [currentPage, setCurrentPage] = useState(0);

  // Cuộn lên đầu trang khi chuyển trang
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hiệu ứng cuộn mượt mà
    });
  }, [currentPage]);

  // Lấy danh sách data cho trang hiện tại
  const pageData = massage_data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Tổng số trang
  const pageCount = Math.ceil(massage_data.length / itemsPerPage);

  // Xử lý khi chuyển trang
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
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

  // Tính toán phạm vi trang cần hiển thị
  const getPageRange = () => {
    if (currentPage === 0 || currentPage === 1) {
      return [0, 1, 2]; // Hiển thị trang 1, 2, 3 khi ở trang 1 hoặc 2
    } else if (currentPage === 2) {
      return [1, 2, 3]; // Nếu ở trang 2, chỉ hiển thị 1, 2, 3
    } else {
      return [currentPage - 1, currentPage, currentPage + 1]; // Các trang còn lại
    }
  };

  return (
    <div className="py-5 mt-24 lg:mt-0">
      <div className="py-5 relative">
        <LazyLoadImage
          className="md:h-[200px] h-[150px] w-full opacity-15 object-cover"
          src="/assets/GioiThieu/Be2.jpg"
          alt="Lady Loading"
        />
        <h1 className="md:text-2xl text-base tracking-widest text-white font-bold italic absolute inset-0 flex items-center justify-center">
          LỢI ÍCH / BENEFIT
        </h1>
      </div>
      <div className="lg:w-[80%] w-[90%] mx-auto grid py-5 grid-cols-1 sm:grid-cols-1 gap-7">
        {pageData.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              to={`/treat/${item.id}`}
              className="flex flex-col md:flex-row items-center hover:scale-105 transition-all duration-500 group"
              style={{
                borderWidth: "2px",
                borderImage: "linear-gradient(90deg, #FFD700, #A37D2B) 1",
                borderStyle: "solid",
              }}
            >
              {/* Hình ảnh */}
              <div className="relative md:p-5 p-2 w-full md:w-[30%]">
                <LazyLoadImage
                  src={item.url}
                  alt="Lady Loading"
                  className="w-full object-cover h-[200px]"
                />
                <div className="absolute italic inset-0 bg-black bg-opacity-60 text-white text-lg font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Xem chi tiết
                </div>
              </div>
              {/* Nội dung */}
              <div className="flex flex-col md:pr-5 md:w-[70%] w-[95%] gap-5">
                <p className="lg:text-2xl pt-3 md:pt-0 text-center line-clamp-1 md:line-clamp-2 md:text-left text-base font-bold text-white">
                  {item.name}
                </p>
                <p className="lg:text-lg text-sm text-white line-clamp-3 overflow-hidden">
                  {truncateText(item.desc, 250)}
                </p>
                <div className="flex justify-end items-center gap-2 pb-4 md:pb-0">
                  <FontAwesomeIcon icon={faClock} className="text-gray-300" />
                  <p className="lg:text-sm text-sm italic text-gray-300">
                    {item.time}
                  </p>
                </div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
      {/* Phân trang */}
      <div className="mt-5 flex justify-center">
        <ReactPaginate
          previousLabel={currentPage > 0 ? "<" : null}
          nextLabel={currentPage < pageCount - 1 ? ">" : null}
          breakLabel={null}
          pageCount={pageCount}
          marginPagesDisplayed={null} 
          pageRangeDisplayed={currentPage === 1 ? 2 : 3} 
          onPageChange={handlePageClick}
          containerClassName={"pagination"} 
          activeClassName={"active"}
          previousClassName={currentPage > 1 ? "prev-page show" : "prev-page"}
          nextClassName={
            currentPage < pageCount - 1 ? "next-page show" : "next-page"
          }
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          forcePage={currentPage} // Chỉ định trang hiện tại
        />
      </div>
    </div>
  );
};

export default LoiIch;
