import { ApiServiceInterface } from "./ApiService.interface";

export class FetchApiService implements ApiServiceInterface {
  private baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl;
  }

  private buildUrl(url: string, params?: Record<string, any>): string {
    const query = params
      ? "?" + new URLSearchParams(params as Record<string, string>).toString()
      : "";
    return `${this.baseUrl}${url}${query}`;
  }

  private async request<T>(url: string, options: RequestInit): Promise<T> {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorText}`);
    }

    return res.json() as Promise<T>;
  }

  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    console.log("[Call Api with Fetch adapter]");
    const fullUrl = this.buildUrl(url, params);
    return this.request<T>(fullUrl, { method: "GET" });
  }

  async post<T>(url: string, data?: any): Promise<T> {
    const fullUrl = `${this.baseUrl}${url}`;
    return this.request<T>(fullUrl, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put<T>(url: string, data?: any): Promise<T> {
    const fullUrl = `${this.baseUrl}${url}`;
    return this.request<T>(fullUrl, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete<T>(url: string): Promise<T> {
    const fullUrl = `${this.baseUrl}${url}`;
    return this.request<T>(fullUrl, { method: "DELETE" });
  }
}
