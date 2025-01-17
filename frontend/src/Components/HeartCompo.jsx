import React from "react";
import childs from "../assets/images/childs.jpg";
import HeartImg from "../assets/images/Heartimg.png";
import { Link } from "react-router-dom";

const HeartCompo = () => {
  return (
    <div>
      <div className="bg-white  p-8 m-2 overflow-hidden rounded-lg mb-10 shadow-md">
        <div className="flex flex-wrap justify-center items-center ">
          <div className="bg-green-400 rounded-md flex p-6  justify-between items-center sm:flex-col sm:gap-4 sm:p-4 md:m-auto">
            <img
              src={HeartImg}
              alt="heartImg"
              className="w-16 h-16 sm:w-12 sm:h-12"
            />
            <p className="text-white text-center text-lg sm:text-base">
              We're here to support you every step of the way.
            </p>
          </div>
          <div className="">
            <img
              src={childs}
              className="-rotate-90 rounded-lg  sm:w-32"
              width={200}
              alt="childImage"
            />
          </div>
        </div>
          <button className="text-center " >
            <Link to="/ourwork" >
            Our Work
            </Link>
          </button>
      </div>
    </div>
  );
};

export default HeartCompo;
