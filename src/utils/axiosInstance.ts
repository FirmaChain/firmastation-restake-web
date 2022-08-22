import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const AxiosInstance = (urlPath: string) => {
  const axiosInstance = axios.create({
    baseURL: urlPath,
    headers: {
      Accept: "application/json",
    },
    timeout: 15000
  });

  const onFulfilled = (response: AxiosResponse) => response;

  const retry = (errorConfig: AxiosRequestConfig) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(axiosInstance.request(errorConfig));
      }, 5000);
    });
  };

  const onRejected = (error: AxiosResponse) => {
    if (error.config) {
      return retry(error.config);
    }

    return Promise.reject(error);
  };

  axiosInstance.interceptors.response.use(
    onFulfilled,
    onRejected,
  );

  return axiosInstance;
};