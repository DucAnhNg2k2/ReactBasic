import React, { createContext } from 'react';
import { ApiServiceInterface } from '../services/api/ApiService.interface';
import { AxiosApiService } from '../services/api/AxiosApiService';

export const ApiServiceContext = createContext<ApiServiceInterface | null>(null);
export const ApiServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ApiServiceContext.Provider value={new AxiosApiService()}>
      {children}
    </ApiServiceContext.Provider>
  );
};

