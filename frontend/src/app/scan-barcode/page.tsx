"use client";

import React, { useEffect, useRef, useState } from "react";
import Quagga from "@ericblade/quagga2";

const Page: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userCode, setUserCode] = useState<string | null>("");

  useEffect(() => {
    const startCamera = async () => {
      try {
        // Lấy stream từ camera
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        // Tạo và cấu hình phần tử <video>
        const videoElement = document.createElement("video");
        videoElement.srcObject = stream;
        videoElement.play();

        // Thay thế phần tử <video> hiện tại bằng phần tử mới
        if (videoRef.current) {
          videoRef.current.replaceWith(videoElement);
        }

        if (videoRef.current) {
          Quagga.init(
            {
              inputStream: {
                name: "Live",
                type: "LiveStream",
                target: videoRef.current,
              },
              decoder: {
                readers: ["ean_reader", "code_128_reader", "code_39_reader"],
              },
            },
            (err) => {
              if (err) {
                console.error("Error initializing Quagga:", err);
                return;
              }
              Quagga.start();
            }
          );
        }

        Quagga.onDetected((data) => {
          setUserCode(data.codeResult.code);
        });
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => {
      Quagga.stop();
    };
  }, []);

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="w-[80%] mx-auto flex mb-36 mt-16">
      <div className="w-1/2">
        <video ref={videoRef} />
      </div>
      <div className="w-1/2">
        {userCode && (
          <div>
            <p className="text-center font-semibold text-3xl">Result</p>
            <p className="text-center text-2xl mt-20 bg-gray-100 rounded-md w-fit px-6 mx-auto py-2 font-semibold">
              {userCode}
            </p>
            <div className="flex justify-center my-20">
              <button
                onClick={handleReset}
                className="text-md py-2 px-12 border-[1px] mt-24 border-slate-400 rounded-md"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
