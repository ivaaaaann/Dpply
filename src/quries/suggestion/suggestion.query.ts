import { useQuery } from "react-query";
import { getSuggestionsByPageParam } from "../../repository/suggestion/suggestioin.param";
import suggestioinRepository from "../../repository/suggestion/suggestioin.repository";

export const useGetSuggestionsByPage = ({
  page,
  limit,
}: getSuggestionsByPageParam) =>
  useQuery(
    ["suggestion/getSuggestionByPage"],
    () => suggestioinRepository.getSuggestionsByPage({ page, limit }),
    { keepPreviousData: true, enabled: !!page }
  );
