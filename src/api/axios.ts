import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { QueryClient } from "@tanstack/react-query";
// 추후 로그인 처리 시 주석 해제
// import { useCookies } from 'react-cookie';

axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.xsrfCookieName = "XSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";
axios.defaults.withCredentials = true;

const baseURL = import.meta.env.BASE_URL;

// Common Error Handler
const CommonErrorHandler = (error: Error) => {
  // status code 분기처리
  return error;
};

export const HttpClient = axios.create({
  baseURL: baseURL,
});

HttpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // 추후 로그인 처리 시 주석 해제
    // // todo1. cookie에서 access token을 가져온다.
    // const [loginCookies] = useCookies(['accessToken']);

    // // todo2. 토근이 있으면 Authorization 헤더 추가
    // if (loginCookies.accessToken) {
    //   config.headers['Authorization'] = `Bearer ${loginCookies.accessToken}`;
    // }

    return config;
  },
  CommonErrorHandler
);

HttpClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  }
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

export const CancelToken = axios.CancelToken;
export default HttpClient;
