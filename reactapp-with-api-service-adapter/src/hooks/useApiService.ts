import { useContext } from "react";
import { ApiServiceContext } from "../contexts/ApiServiceContext";

export const useApiService = () => {
  const context = useContext(ApiServiceContext);
  if (!context)
    throw new Error("useApiService must be used within an ApiServiceProvider");
  return context;
};
