// imageUpload.ts
import axios, { AxiosResponse } from "axios";

type ApiResponse = {
  image_filename: string;
};

export const imageUpload = async (
  selectedImage: File | null
): Promise<ApiResponse> => {
  try {
    if (!selectedImage) {
      throw new Error("No image selected");
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    const response: AxiosResponse<ApiResponse> = await axios.post(
      "http://127.0.0.1:8000/upload/barcode/",
      formData
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
