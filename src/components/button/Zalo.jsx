import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";  // Facebook icon

const Za_lo = () => {
  return (
    <a href="https://zalo.me/0912302830" className="flex items-center justify-center gap-5 bg-white text-black py-2 lg:py-4 px-16 rounded-2xl transition-all duration-400 transform hover:scale-105 hover:text-black">
      <img className="w-8 h-8" src="/assets/Logo/zalo.png" alt="Zalo Logo" />

      <span className="font-semibold">0912.30.28.30</span>
    </a>
  );
};  

export default Za_lo;
