import { customAxios } from "../../lib/axios/axios";
import { myMemberResponse } from "../../types/member/member.type";

class MemberRepository {
  public async getMyMember(): Promise<myMemberResponse> {
    const { data } = await customAxios.get("/auth/my");
    return data;
  }
}

export default new MemberRepository();
