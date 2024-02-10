"use client";

import { generateBarcode } from "@/api/barcode";
import React, { useState } from "react";

const page = () => {
  const [numberString, setNumberString] = useState<string>("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const result = await generateBarcode(numberString);
      setImage(result.image);
    } catch (error) {
      setLoading(false);
      console.error("Error calling API:", error);
    }
  };

  return (
    <div>
      <div className=" w-[80%] mx-auto mb-44 flex justify-between">
        <div className=" w-[40%]">
          <p className=" text-3xl font-semibold my-12 ">Generate a Bar Code</p>
          <div className=" flex flex-col">
            <label className=" mb-4 text-gray-600" htmlFor="numberString">
              Your number
            </label>
            <input
              className="text-gray-600 text-md border-[1px] p-3 rounded-lg"
              name="numberString"
              type="text"
              value={numberString}
              onChange={(e) => setNumberString(e.target.value)}
            />
          </div>
          <button
            onClick={handleGenerate}
            className=" bg-slate-900 text-white text-md px-8 py-3 rounded-lg mt-20"
          >
            Generate
          </button>
        </div>
        {loading ? (
          <div>Wait for us</div>
        ) : (
          <div className=" w-[50%]">
            <p className=" text-3xl font-semibold my-12 text-center">
              Your bar code here
            </p>
            <img
              className=" w-full"
              src={`https://github.com/Duonganhdu2002/Qr-code/blob/main/be/${image}.png?raw=true`}
              alt=""
            />
            <div className=" flex justify-center">
              <button className=" bg-slate-900 text-white text-md px-8 py-3 rounded-lg mt-20">
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
