import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhatsAppButton = () => {

  return (
    <div className="flex justify-center items-center mt-4">
     
        <Link to="/contact" className="bg-green-400 px-9 py-3 text-center font-mono rounded text-white" >
        <span className="flex items-center gap-2 group">
          <p className="joinUs text-base group-hover:hidden">Join Us</p>
          <FaWhatsapp className="whatsapp text-3xl w-24 hidden group-hover:block" />
        </span>
        </Link>
    </div>
  );
};

export default WhatsAppButton;
