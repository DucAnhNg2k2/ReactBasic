import axiosInstance from "../../utils/axiosInstance";
import { ApiServiceInterface } from "./ApiService.interface";

export class AxiosApiService implements ApiServiceInterface {
  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    console.log("[Call Api with Axios adapter]");
    const response = await axiosInstance.get<T>(url, { params });
    return response.data;
  }

  async post<T>(url: string, data?: any): Promise<T> {
    const response = await axiosInstance.post<T>(url, data);
    return response.data;
  }

  async put<T>(url: string, data?: any): Promise<T> {
    const response = await axiosInstance.put<T>(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await axiosInstance.delete<T>(url);
    return response.data;
  }
}
