import React from "react";
import babies from "../assets/images/babies.avif";
import founder from "../assets/images/founder.png";
import child from "../assets/images/childs.jpg";
import bhai from "../assets/videos/bhai.mp4";
import bhai1 from "../assets/videos/bhai1.mp4";
import bhai2 from "../assets/videos/bhai2.mp4";
import bhai3 from "../assets/videos/bhai3.mp4";
import bhai4 from "../assets/videos/bhai4.mp4";
import education from "../assets/images/education.avif";
import data from "../assets/data";

const OurWork = () => {
  return (
    <div className="container mx-auto p-6 mt-[60px]">
      <section id="our-work" className="mb-12">
        <h2 className="text-4xl font-semibold mb-6 text-center">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
            Work
          </span>
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Discover the impactful initiatives led by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
            Bipin Maurya
          </span>{" "}
          and the team at Dahisar Yuva Shakti Foundation.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <img
            src={babies}
            alt="babies"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src={founder}
            alt="Activity 2"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src={child}
            alt="Activity 3"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-4xl font-semibold mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
            Our social-work
          </span>
        </h2>
        {/* Video Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <video controls className="w-full h-64 rounded-lg shadow-md">
            <source src={bhai1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className="w-full h-64 rounded-lg shadow-md">
            <source src={bhai} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className="w-full h-64 rounded-lg shadow-md">
            <source src={bhai2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className="w-full h-64 rounded-lg shadow-md">
            <source src={bhai3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Helper Cards */}
        <h3 className="text-3xl font-semibold mb-6 text-center">
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500">
            Meet Our Helpers
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {data.map((item, index) => (
    <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg group">
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover object-center mt-9 hover:scale-125 duration-300 cursor-pointer"
      />
      <h4 className="text-xl font-bold text-center mb-2 group-hover:blur-sm">
        {item.name}
      </h4>
      <p className="text-center text-gray-700 group-hover:blur-sm">
        {item.description}
      </p>
    </div>
  ))}
</div>

      </section>
    </div>
  );
};

export default OurWork;
