import { customAxios } from "../../lib/axios/axios";
import { authLoginResponse } from "../../types/auth/auth.type";
import { postAuthLoginParam } from "./auth.param";

class AuthRepository {
  public async postAuthLogin({
    code,
  }: postAuthLoginParam): Promise<authLoginResponse> {
    const { data } = await customAxios.post("/auth/login", { code });
    return data;
  }
}

export default new AuthRepository();
