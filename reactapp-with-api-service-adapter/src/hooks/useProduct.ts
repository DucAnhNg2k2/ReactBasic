import { useEffect, useState } from "react";
import { useApiService } from "./useApiService";
import { Product } from "../types/Product";

export const useProducts = () => {
  const api = useApiService();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.get<Product[]>("/products");
        setProducts(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [api]);

  return { products, loading, error };
};
