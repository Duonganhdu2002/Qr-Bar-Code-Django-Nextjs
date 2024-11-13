import axios, { AxiosResponse } from "axios";

type ApiResponse = {
    image_path: string;
};

export const generateQrcode = async (
  numberString: string
): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(
      "http://localhost:8000/qrcode/generate/",
      { user_link: numberString }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};