import axios from "axios";
import {
  authLoginResponse,
  authRefreshResponse,
} from "../../types/auth/auth.type";
import { postAuthLoginParam, postAuthRefreshParam } from "./auth.param";
import config from "../../config/config.json";

class AuthRepository {
  public async postAuthLogin({
    code,
  }: postAuthLoginParam): Promise<authLoginResponse> {
    const { data } = await axios.post(`${config.SERVER}/auth/login`, { code });
    return data;
  }

  public async postAuthRefresh({
    refreshToken,
  }: postAuthRefreshParam): Promise<authRefreshResponse> {
    const { data } = await axios.post(`${config.SERVER}/token/refresh`, {
      refreshToken,
    });
    return data;
  }
}

export default new AuthRepository();
