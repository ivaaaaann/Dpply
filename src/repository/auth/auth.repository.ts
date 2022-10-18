import { customAxios } from "../../lib/axios/axios";
import {
  authLoginResponse,
  authRefreshResponse,
} from "../../types/auth/auth.type";
import { postAuthLoginParam, postAuthRefreshParam } from "./auth.param";

class AuthRepository {
  public async postAuthLogin({
    code,
  }: postAuthLoginParam): Promise<authLoginResponse> {
    const { data } = await customAxios.post("/auth/login", { code });
    return data;
  }

  public async postAuthRefresh({
    refreshToken,
  }: postAuthRefreshParam): Promise<authRefreshResponse> {
    const { data } = await customAxios.post("/token/refresh", { refreshToken });
    return data;
  }
}

export default new AuthRepository();
