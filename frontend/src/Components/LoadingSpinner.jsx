import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-green-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
