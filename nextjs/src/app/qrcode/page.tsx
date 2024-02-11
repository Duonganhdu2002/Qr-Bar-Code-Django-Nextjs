"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [numberString, setNumberString] = useState<string>("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="w-[80%] mx-auto mt-6 mb-44 flex justify-between">
        <div className="w-[40%]">
          <p className="text-3xl font-semibold my-12">Generate a QR Code</p>
          <div className="flex flex-col">
            <label className="mb-4 text-gray-600" htmlFor="numberString">
              Your link
            </label>
            <input
              className="text-gray-600 text-md border-[1px] p-3 rounded-lg"
              name="numberString"
              type="text"
              value={numberString}
              onChange={(e) => setNumberString(e.target.value)}
            />
          </div>
          <button className="bg-slate-900 text-white text-md px-8 py-3 rounded-lg mt-20">
            Generate
          </button>
        </div>
        {loading ? (
          <div className="w-[50%]">Loading...</div>
        ) : image ? (
          <div className="w-[50%]">
            <p className="text-3xl font-semibold my-12 text-center">
              Your bar code here
            </p>
            <Image
              src={`/assets/images/image-barcode/${image}`}
              width={500}
              height={300}
              alt="Generated Barcode"
              loading="lazy"
              decoding="async"
              className=" mx-auto"
            />
            <div className="flex justify-center">
              <button className="bg-slate-900 text-white text-md px-8 py-3 rounded-lg mt-20">
                Download
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Page;
