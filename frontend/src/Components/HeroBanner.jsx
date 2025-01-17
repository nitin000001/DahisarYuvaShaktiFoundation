import React, { useState, useEffect } from "react";
import kids from "../assets/images/womens.jpg";
import image1 from "../assets/images/poor-kids.jpg";
import image2 from "../assets/images/poor-womens.jpg";
import WhatsAppButton from "./WhatsAppButton ";

const HeroBanner = () => {
  const images = [
    { src: kids, text: "No one has ever become poor by giving." },
    {
      src: image1,
      text: "Together, we can change the world, one act of kindness at a time.",
    },
    { src: image2, text: "Donation can Change Life." },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="p-5 h-screen flex flex-col justify-center items-center relative">
        <div className="h-[70vh] w-full max-w-5xl relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={images[currentImageIndex].src}
            className="h-full w-full object-cover transition-transform duration-1000"
            alt="Helping Hands"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
          <div className="absolute bottom-10 left-5 right-5 text-center px-4">
            <h2 className="text-[50px] sm:text-[2.5vw] md:text-[2vw] text-white font-bold leading-snug drop-shadow-lg">
              {images[currentImageIndex].text}
            </h2>
            <div className="mt-8">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
