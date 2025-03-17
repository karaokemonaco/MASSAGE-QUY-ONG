import React, { useState } from "react";

import Subscribe_Responsive from "../button/Subscribe_Responsive";

const CallNowButton = () => {
  // State management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div onClick={toggleOverlay}>
      {/* Hiển thị <h2> và Subscribe_Responsive ở mọi trang, bao gồm cả /rankings */}
      <h2
        className="fixed bottom-5 z-20 italic text-center right-5 flex items-center justify-center 
                 bg-red-700 rounded-full border-2 text-white text-md font-bold h-20 w-20 p-5 cursor-pointer 
                 shadow-lg hover:text-customRed hover:bg-white hover:border-4 hover:border-customRed transition-all duration-800"
      >
        ĐẶT NGAY
      </h2>

      {isOverlayVisible && (
        <div>
          <Subscribe_Responsive setOpen={setIsModalOpen} />
        </div>
      )}

      {/* Ẩn <Link> ở trang /rankings */}
    </div>
  );
};

export default CallNowButton;
