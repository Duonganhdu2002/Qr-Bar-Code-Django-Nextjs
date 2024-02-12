import axios, { AxiosResponse } from "axios";

type ApiResponse = {
  numberString: string;
};

export const decodeBarcode = async (
  selectedImage: string
): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(
      "http://localhost:8000/barcode/decode/",
      { user_image: selectedImage }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};