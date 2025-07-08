import { Link } from "react-router-dom";
import { Products_Service } from "../../components/data/goi-dich-vu";
import React from "react";

const ServicePR = () => {
  // Chia mảng thành các nhóm theo pattern 2-1-2 lặp lại
  const groupPattern = [2, 1, 2];
  const groupedServices = [];
  let currentIndex = 0;
  let patternIndex = 0;

  while (currentIndex < Products_Service.length) {
    const groupSize = groupPattern[patternIndex % groupPattern.length];
    groupedServices.push(Products_Service.slice(currentIndex, currentIndex + groupSize));
    currentIndex += groupSize;
    patternIndex++;
  }

  return (
    <div className="py-5 mt-24 lg:mt-0">
      {/* Banner */}
      <div className="py-5 relative">
        <img
          className="md:h-[200px] h-[150px] w-full opacity-15 object-cover"
          src="/assets/GioiThieu/Be2.jpg"
        />
        <h1 className="md:text-2xl text-base tracking-widest text-white font-bold italic absolute inset-0 flex items-center justify-center">
          DỊCH VỤ / SERVICE
        </h1>
      </div>

      {/* Các dòng dịch vụ */}
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-10">
        {groupedServices.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className={`grid gap-7 ${
              group.length === 1
                ? "grid-cols-1 justify-items-center"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
           {group.map((item, index) => (
  <Link
     key={item.id}
    to={`/service/${item.id}`}
    className={`flex relative flex-col gap-2 hover:scale-[0.95] transition-all duration-500 group ${
      group.length === 1 ? "w-full sm:w-[50%]" : "w-full"
    }`}
    style={{
      borderWidth: "3px",
      borderImage: "linear-gradient(90deg, #FFD700, #A37D2B) 1",
      borderStyle: "solid",
    }}
  >
    <div className="overflow-hidden relative w-full flex">
      <img
        src={item.url}
        alt={item.name}
        className="w-full object-cover lg:h-[300px] h-[200px]"
      />
      {item.id === 4 && (
        <img
          src="/assets/Logo/3tr2.png"
          alt="Logo"
          className="absolute lg:top-1 lg:-right-5 top-1 -right-4 lg:w-52 lg:h-36 w-36 h-28"
        />
      )}
      {item.id === 5 && (
        <img
          src="/assets/Logo/4tr.png"
          alt="Logo"
          className="absolute lg:top-1 lg:-right-14 top-1 -right-8 lg:w-64 lg:h-36 w-40 h-28"
        />
      )}
      <div className="absolute italic inset-0 bg-black bg-opacity-60 text-white text-lg font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        Xem chi tiết
      </div>
    </div>
    <p className="xl:text-2xl text-xl text-center mt-5 font-bold bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text">
      {item.name}
    </p>
   
    <div className="flex justify-center gap-3 items-center pb-5">
      <p className="lg:text-3xl text-xl bg-gradient-to-t from-yellow-900 to-yellow-300 text-transparent bg-clip-text font-bold lg:font-semibold">
        {item.price} VNĐ
      </p>
      <p className="lg:text-xl text-sm italic text-white line-through">
        {item.price_sale} VNĐ
      </p>
    </div>
  </Link>
))}

          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePR;
