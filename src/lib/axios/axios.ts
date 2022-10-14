import axios, { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import config from "../../config/config.json";
import token from "../token/token";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    [REFRESH_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)!}`,
  },
});

const customAxiosErrorHandler = (config: AxiosError) => {};

customAxios.interceptors.response.use(
  (response) => response,
  customAxiosErrorHandler
);
