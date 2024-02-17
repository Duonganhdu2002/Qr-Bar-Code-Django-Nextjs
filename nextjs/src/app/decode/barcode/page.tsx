"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import { imageUpload } from "@/api/imageUpload";
import { decodeBarcode } from "@/api/bardecode";

function Page() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [notificationSaveImage, setNotificationSaveImage] = useState<string>("");
  const [userCode, setUserCode] = useState<string>("");

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSendImage = async () => {
    try {
      const result = await imageUpload(selectedImage);
      setNotificationSaveImage(result.image_filename);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleDecode = async () => {
    try {
      const result = await decodeBarcode(`media/${notificationSaveImage}`);
      setUserCode(result.numberString);
    } catch (error) {
      console.error("Error decoding barcode:", error);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  console.log(notificationSaveImage);
  console.log(userCode);

  return (
    <div>
      <div className="w-[80%] flex justify-between mx-auto my-16">
        <div className="w-[40%]">
          <p className="text-2xl font-semibold">Upload your barcode image</p>
          <div className="border border-dashed border-slate-900 h-44 rounded-md mt-6 w-1/2 flex justify-center items-center">
            <label htmlFor="upload" className="cursor-pointer">
              <input
                type="file"
                id="upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
                ref={fileInputRef}
              />
              <button
                onClick={handleButtonClick}
                className="bg-slate-900 text-white py-2 px-4 rounded-lg text-sm"
              >
                Upload an image
              </button>
            </label>
          </div>
        </div>
        <div className="w-[50%]">
          <p className="text-2xl font-semibold text-center">
            Your number string here
          </p>
          {selectedImage && (
            <div>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Uploaded Barcode"
                className="mt-4 rounded-md max-w-full mx-auto"
              />
            </div>
          )}
          <button
            onClick={handleSendImage}
            className="bg-slate-900 text-white py-2 px-4 rounded-lg text-sm"
          >
            Send Image
          </button>
          <button
            onClick={handleDecode}
            className="bg-slate-900 text-white py-2 px-4 rounded-lg text-sm"
          >
            Decode Barcode
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
