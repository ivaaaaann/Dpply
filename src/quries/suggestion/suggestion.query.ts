import { useQuery } from "react-query";
import {
  getMySuggestionsParam,
  getSuggestionsByPageParam,
  getSuggestionsParam,
} from "../../repository/suggestion/suggestioin.param";
import suggestioinRepository from "../../repository/suggestion/suggestioin.repository";

export const useGetSuggestions = ({ type }: getSuggestionsParam) =>
  useQuery(
    ["suggestion/getSuggestions", type],
    () => suggestioinRepository.getSuggestions({ type }),
    { staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 60 }
  );

export const useGetMySuggestion = ({ type }: getMySuggestionsParam) =>
  useQuery(
    ["suggestion/getMySuggestions", type],
    () => suggestioinRepository.getMySuggestions({ type }),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetSuggestionsByPage = ({
  page,
  limit,
}: getSuggestionsByPageParam) =>
  useQuery(
    ["suggestion/getSuggestionByPage"],
    () => suggestioinRepository.getSuggestionsByPage({ page, limit }),
    { keepPreviousData: true, enabled: !!page }
  );
