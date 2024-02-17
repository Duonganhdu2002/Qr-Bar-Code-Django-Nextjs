"use client";

import React, { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";

const Page: React.FC = () => {
  // Sử dụng useRef để tham chiếu đến phần tử <video>
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userCode, setUserCode] = useState<string>("");

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

        // Sự kiện xảy ra khi thông tin video đã được tải
        videoElement.addEventListener("loadedmetadata", () => {
          // Tạo canvas để vẽ hình ảnh từ video
          const canvasElement = document.createElement("canvas");
          const canvasContext = canvasElement.getContext("2d");

          // Kiểm tra xem có thể lấy context 2D từ canvas hay không
          if (!canvasContext) {
            console.error("Could not get 2D context");
            return;
          }

          // Cấu hình kích thước canvas dựa trên kích thước video
          canvasElement.width = videoElement.videoWidth;
          canvasElement.height = videoElement.videoHeight;

          // Hàm tick để thực hiện quá trình nhận diện QR code và hiển thị
          const tick = () => {
            // Vẽ hình ảnh từ video lên canvas
            canvasContext.drawImage(
              videoElement,
              0,
              0,
              canvasElement.width,
              canvasElement.height
            );

            // Lấy dữ liệu hình ảnh từ canvas
            const imageData = canvasContext.getImageData(
              0,
              0,
              canvasElement.width,
              canvasElement.height
            );

            // Nhận diện QR code từ dữ liệu hình ảnh
            const code = jsQR(
              imageData.data,
              imageData.width,
              imageData.height
            );

            // Nếu có QR code được nhận diện, dừng stream và hiển thị kết quả
            if (code) {
              stream.getTracks().forEach((track) => track.stop());
              setUserCode(code.data);
            }

            // Thực hiện đệ quy để tiếp tục quá trình nhận diện
            requestAnimationFrame(tick);
          };

          // Bắt đầu quá trình nhận diện
          tick();
        });
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    // Gọi hàm để bắt đầu camera khi component được mount
    startCamera();

    return () => {
      const videoElement = videoRef.current;

      if (videoElement) {
        const stream = videoElement.srcObject as MediaStream | null;
        const tracks = stream?.getTracks() || [];
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const handleReset = () => {   
    window.location.reload(); 
  };

  return (
    <div className=" w-[80%] mx-auto flex mb-36 mt-16">
      <div className=" w-1/2">
        <video ref={videoRef} />
      </div>
      <div className=" w-1/2">
        {userCode && (
          <div>
            <p className=" text-center font-semibold text-3xl">Result</p>
            <p className=" text-center text-2xl mt-20 bg-gray-100 rounded-md w-fit px-6 mx-auto py-2 font-semibold">
              {userCode}
            </p>
            <div className=" flex justify-center my-20">
              <button onClick={handleReset} className="text-md py-2 px-12 border-[1px] mt-24 border-slate-400 rounded-md">
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
