import React from "react";
import babies from "../assets/images/babies.avif";
import {Link} from "react-router-dom"

const HeroFooter = () => {
  return (
    <div className="px-4">
      {/* Outer container */}
      <div className="bg-gray-400 h-auto lg:h-[50vh] p-5 rounded-lg mb-10 lg:mt-[200px] shadow-lg">
        <div className="container relative flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-0">
          {/* Left Section: Image */}
          <div className="left lg:absolute top-[-90px] left-[-70px] rounded-3xl overflow-hidden w-40 h-40 lg:w-60 lg:h-60">
            <img
              src={babies}
              alt="Babies"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section: Content */}
          <div className="right flex flex-col gap-5 bg-white w-full lg:w-[700px] p-5 rounded-lg shadow-md lg:absolute lg:top-[100px] lg:right-0">
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-2xl font-bold text-center lg:text-left">
                Standing Together, For Better Future.
              </h1>
              <p className="text-gray-500 text-sm lg:text-base text-center lg:text-left">
                Every charitable act is a stepping stone towards heaven.
              </p>
            </div>
            <div>
              <p className="text-center lg:text-left text-sm lg:text-base text-gray-600">
                We gather voluntary contributions to help people, <br /> and
                other non-profit organizations.
              </p>
              <div className="flex justify-center lg:justify-start mt-4">
                <Link to="/donate" >
                    <span className="bg-green-400 px-9 text-center text-white py-2 rounded hover:bg-yellow-300 ">Donate</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
