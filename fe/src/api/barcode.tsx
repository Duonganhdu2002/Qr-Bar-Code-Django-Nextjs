import axios, { AxiosResponse } from "axios";

type ApiResponse = {
  image: string;
};

export const generateBarcode = async (
  numberString: string
): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(
      "http://localhost:8000/barcode/generate/",
      { user_code: numberString }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};