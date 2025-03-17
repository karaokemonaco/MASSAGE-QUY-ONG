import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"; // Telegram icon

const Telegram = () => {
  return (
    <a
    href="https://t.me/+84912302830"
    className="flex items-center justify-center gap-2 bg-white text-blue-400 py-2 lg:py-4 rounded-2xl transition-all duration-400 transform hover:scale-105 "
  >
    <FontAwesomeIcon  icon={faTelegramPlane} className="text-3xl text-blue-400" />
    <span className="font-semibold">MASSAGE QUÝ ÔNG</span>
  </a>
  );
};

export default Telegram;
