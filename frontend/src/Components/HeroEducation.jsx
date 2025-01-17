import React from 'react'
import education from "../assets/images/education.avif";
import { Link } from 'react-router-dom';


const HeroEducation = () => {
  return (
    <div className="p-5 ">
      <div
        className=" ImgContainer rounded-l-full mb-10 md:m-2 sm:m-4 p-5 "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhdHRlcm58ZW58MHx8MHx8fDA%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col md:flex-row md:ite justify-between items-center text-white rounded-lg p-5 gap-5 bg-black bg-opacity-50 md:rounded-l-full ">
          <div className="overflow-hidden rounded-full shadow-lg">
            <img
              className="h-[200px] md:h-[300px] w-[200px] md:w-[300px] rounded-full object-cover"
              src={education}
              alt="Education"
            />
          </div>
          {/* Text Content Section */}
          <div className="text-left space-y-3 md:w-2/3 ">
            <h1 className=" ">
              Dahisar Yuva Shakti Foundation
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold">
              We're a Non-Profit Charity Organization
            </h2>
            <p className="text-sm md:text-base text-gray-300 text-left">
              Dahisar Yuva Shakti Foundation is a non-profit organization
              dedicated to empowering the underprivileged and fostering social
              welfare in the Dahisar. The foundation thrives on
              the collective efforts of volunteers and donors who are committed
              to making a meaningful difference in society. Through its
              consistent work, the organization has become a beacon of hope for
              many, driving change at the grassroots level.
            </p>
            <button>
              <Link to="/about" >
              About Us
              </Link>
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default HeroEducation