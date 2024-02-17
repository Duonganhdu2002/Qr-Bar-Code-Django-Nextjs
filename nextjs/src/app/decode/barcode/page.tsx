"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import { imageUpload } from "@/api/imageUpload";
import { decodeBarcode } from "@/api/bardecode";

function Page() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [notificationSaveImage, setNotificationSaveImage] =
    useState<string>("");
  const [userCode, setUserCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleDecode = async () => {
    try {
      setLoading(true);

      if (selectedImage) {
        // Tải ảnh lên server
        const uploadResult = await imageUpload(selectedImage);
        setNotificationSaveImage(uploadResult.image_filename);

        // Sau khi tải ảnh lên thành công, giải mã barcode
        const decodeResult = await decodeBarcode(
          `media/${uploadResult.image_filename}`
        );
        setUserCode(decodeResult.numberString);
      } else {
        console.error("No image selected.");
      }
    } catch (error) {
      console.error("Error decoding barcode:", error);
    } finally {
      setLoading(false);
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
          <div className="flex justify-center w-1/2 mt-20">
            {selectedImage && (
              <button
                onClick={handleDecode}
                className="bg-slate-900 text-white py-2 px-4 rounded-lg text-sm"
              >
                Decode Barcode
              </button>
            )}
          </div>
        </div>
        <div className="w-[50%]">
          <p className="text-2xl font-semibold text-center">
            Your number string here
          </p>
          {selectedImage && (
            <div className="border border-dashed border-slate-900 h-auto mx-auto rounded-md mt-6 w-1/2 flex justify-center items-center">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Uploaded Barcode"
                className="mt-4 w-[80%] mx-auto"
              />
            </div>
          )}
          {userCode && (
            <div>
              <p className=" text-center text-2xl mt-20 bg-gray-100 rounded-md w-1/2 mx-auto py-2 font-semibold">
                {userCode}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
