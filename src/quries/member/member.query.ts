import { useQuery, UseQueryResult } from "react-query";
import memberRepository from "../../repository/member/member.repository";
import { myMemberResponse } from "../../types/member/member.type";

export const useGetMyMemberQuery = (): UseQueryResult<myMemberResponse> =>
  useQuery("member/getMyMember", () => memberRepository.getMyMember(), {
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 30 * 30,
    retry: 2,
  });
