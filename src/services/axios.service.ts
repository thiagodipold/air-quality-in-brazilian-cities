import axios from "axios";
import { IErrorResponse } from "../interfaces/api.interfaces";

const defaultHeaders = {
  "Content-Type": "application/json",
};

const baseUrl = "https://api.waqi.info/feed/";
const token = "/?token=10c0ff97d9b6ff761a17b39f969bc87459f4ad02";

export async function getApi<T>(url: string): Promise<T> {
  const headers = { ...defaultHeaders };

  try {
    const response = await axios.get<T>(`${baseUrl}${url}${token}`, {
      headers,
    });
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
