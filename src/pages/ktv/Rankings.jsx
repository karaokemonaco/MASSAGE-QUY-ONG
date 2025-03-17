import React, { useState, useEffect } from "react";
import { Member_Ship } from "../../components/data/KTV";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ReactPaginate from "react-paginate";

const Rankings = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  // Cuộn lên đầu trang khi currentPage thay đổi
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt
    });
  }, [currentPage]);

  // Lấy danh sách data của trang hiện tại
  const pageData = Member_Ship.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Số lượng trang (giới hạn tối đa là 3)
  const pageCount = Math.min(Math.ceil(Member_Ship.length / itemsPerPage), 4);

  // Xử lý khi chuyển trang
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="py-5 mt-24 lg:mt-0">
        <div className="py-5 relative">
          <LazyLoadImage
            className="md:h-[200px] h-[150px] w-full opacity-15 object-cover"
            src="/assets/GioiThieu/Be2.jpg"
            alt="Lady Loading"
          />
          <h1 className="md:text-2xl text-base tracking-widest text-white font-boFld italic text-center absolute inset-0 flex items-center justify-center">
            KỸ THUẬT VIÊN / MASSAGE THERAPIST
          </h1>
        </div>
        <div className="xl:w-[80%] w-[95%] mx-auto grid grid-cols-2 sm:grid-cols-2 gap-2 xl:grid-cols-4 md:grid-cols-3 md:gap-7">
          {pageData.map((item, index) => (
            <React.Fragment key={index}>
              <Link
                to={`/girl/${item.id}`}
                className="w-full mx-auto flex flex-col border-2 border-red-500 hover:scale-[0.95] transition-all duration-500 group relative"
              >
                {/* Thêm chữ UY TÍN với icon React */}
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold py-1 px-2 rounded-sm z-10 flex items-center gap-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-white"
                  />
                  ĐÃ KIỂM ĐỊNH
                </div>
                <LazyLoadImage
                  src={item.url}
                  alt="Lady Loading"
                  className="md:w-full object-cover lg:h-[500px] md:h-[400px] w-full h-[250px]"
                />
                <div className="relative overflow-hidden">
                  <p className="md:text-2xl text-md pt-4 bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text text-center font-bold">
                    {item.name}
                  </p>
                  <p className="md:text-base text-xs text-white text-center font-bold py-2">
                    {item.desc}
                  </p>
                  <p className="text-xs text-white text-center flex items-center lg:items-end justify-center gap-2 md:gap-0 w-[95%] mx-auto pb-4">
                    <span className="text-xs hidden md:block font-semibold italic text-yellow-600">
                      ĐÁNH GIÁ :{" "}
                    </span>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="text-red-700 lg:text-xl xl:ml-1 text-xs"
                      />
                    ))}
                    <div className="hidden md:block"> ( {item.vote} VOTE )</div>
                  </p>
                  <div
                    className="absolute hidden left-0 bottom-0 w-full bg-red-900 text-white text-lg font-semibold md:flex items-center justify-center py-3
                         translate-y-full group-hover:translate-y-0 transition-all duration-500"
                  >
                    Xem chi tiết
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
             marginPagesDisplayed={null} // Hiển thị trang đầu và cuối
             pageRangeDisplayed={currentPage === 1 ? 2 : 3} // Hiển thị 3 trang gần nhau
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
    </>
  );
};

export default Rankings;
