import React from "react";

const SpinningLoader = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen ">
      <div className="spinner">
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default SpinningLoader;
