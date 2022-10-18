import axios, { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import config from "../../config/config.json";
import token from "../token/token";
import authRepository from "../../repository/auth/auth.repository";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)!}`,
  },
});

const customAxiosErrorHandler = async (config: AxiosError) => {
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);
  const refreshToken = token.getToken(REFRESH_TOKEN_KEY);

  if (accessToken && refreshToken && config.response?.status === 401) {
    try {
      const { data } = await authRepository.postAuthRefresh({ refreshToken });

      token.setToken(ACCESS_TOKEN_KEY, data);
      customAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = data;
    } catch (error) {
      window.alert("세션만료");
      token.clearToken();
      window.location.href = "http://localhost:3000/";
    }
  }
};

customAxios.interceptors.response.use(
  (response) => response,
  customAxiosErrorHandler
);
