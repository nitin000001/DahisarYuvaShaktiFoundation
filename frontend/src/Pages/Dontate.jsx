import React from "react";

const Donate = () => {

  return (
    <div className="flex flex-col items-center space-y-4 mt-[100px]">
      <h1 className="text-2xl font-bold">Donate to Our Cause</h1>
      <input
        type="number"
        className="border rounded px-4 py-2"
        placeholder="Enter donation amount"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Donate  Now
      </button>
    </div>
  );
};

export default Donate;
