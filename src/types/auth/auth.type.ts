import { Member } from "../member/member.type";
import { Response } from "../util/response.type";

export interface authLoginResponse extends Response {
  data: { auth: Member; refreshToken: string; token: string };
}

export interface authRefreshResponse extends Response {
  data: string;
}
