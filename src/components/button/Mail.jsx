import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Easadsail icon

const EmailMail = () => {
  return (
    <a 
      href="mailto:MASSAGE779@GMAIL.COM" 
      className="flex items-center bg-blue-600 justify-center gap-5 text-white w-full py-4 px-7 rounded-2xl hover:bg-blue-700 transition duration-300"
    >
      <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
      <span className="font-semibold">MASSAGE779@GMAIL.COM</span>
    </a>
  );
};

export default EmailMail;
