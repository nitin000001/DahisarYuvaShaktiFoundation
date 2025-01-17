import React from "react";
import water from "../assets/images/water.png";
import food from "../assets/images/food.avif";
import books from "../assets/images/books.avif";
import medical from "../assets/images/medical.avif";

const NeccessaryThings = () => {
  const content = [
    {
      src: water,
      name: "water",
      desc: "Clean water is a basic necessity for life. Together, we can ensure access to safe drinking water for those in need.",
    },
    {
      src: food,
      name: "food",
      desc: "No one should go to bed hungry. Your support helps us provide nutritious meals to underprivileged families and children.",
    },
    {
      src: books,
      name: "Education",
      desc: "Education is the key to breaking the cycle of poverty. We aim to empower children with knowledge and opportunities for a brighter future.",
    },
    {
      src: medical,
      name: "Medical",
      desc: "Healthcare should be accessible to all. Your contribution helps us provide medical aid and life-saving treatments to those in need.",
    },
  ];
  return (
    <div>
      <div className=" mb-10 p-5 mt-[50px]">
        <div className="bg-white shadow-md w-full rounded-md">
          <div className="left text-center mb-4 mt-4 text-gray-400 leading-tight">
            <p>❤ Welcome to <br /> Dahisar Yuva Shakti Foundation</p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              We believe that we can save more lives with you
            </h1>
          </div>

          <div className="right grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-6">
            {content.map((item, i) => {
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="bg-red-500 rounded-t-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-lg font-semibold">{item.name}</p>
                  <p className="text-sm md:text-base text-gray-500">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeccessaryThings;
