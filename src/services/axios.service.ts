import axios from "axios";
import { IErrorResponse } from "../interfaces/api.interfaces";

const defaultHeaders = {
  "Content-Type": "application/json",
};

const baseUrl = "http://api.waqi.info/feed/";

export async function get<T>(url: string): Promise<T> {
  const headers = { ...defaultHeaders };

  try {
    const response = await axios.get<T>(`${baseUrl}${url}`, { headers });
    return response.data;
  } catch (error) {
    if (error) {
      const errorResponse = error as IErrorResponse;
      if (errorResponse.status === "error") {
        throw new Error("Cidade não encontrada");
      }
    }

    throw new Error("Oops! Houve algum problema com sua requisição");
  }
}
