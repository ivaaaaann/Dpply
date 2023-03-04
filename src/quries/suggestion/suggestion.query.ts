import { useMutation, useQuery } from "react-query";
import {
  getMySuggestionsParam,
  getSuggestionCommentsParam,
  getSuggestionParam,
  getSuggestionsByPageParam,
  getSuggestionsParam,
  postLikeSuggestionParam,
  postSuggestionCommentParam,
  postSuggestionParam,
  postUnLikeSuggestionParam,
} from "../../repository/suggestion/SuggestionRepository";

import SuggestionRepositoryImpl from "../../repository/suggestion/SuggestionRepositoryImpl";

export const useGetSuggestionsQuery = ({ type }: getSuggestionsParam) =>
  useQuery(
    ["suggestion/getSuggestions", type],
    () => SuggestionRepositoryImpl.getSuggestions({ type }),
    { staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 60 }
  );

export const useGetSuggestionQuery = ({ id }: getSuggestionParam) =>
  useQuery(
    ["suggestion/getSuggestion", id],
    () => SuggestionRepositoryImpl.getSuggestion({ id }),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 60,
      enabled: !!id,
    }
  );

export const useGetSuggestionCommentsQuery = ({
  id,
}: getSuggestionCommentsParam) =>
  useQuery(
    "suggestion/getSuggestionComments",
    () => SuggestionRepositoryImpl.getSuggestionComments({ id }),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 60,
      enabled: !!id,
    }
  );

export const usePostLikeSuggestionMutation = () => {
  const mutation = useMutation(({ id }: postLikeSuggestionParam) =>
    SuggestionRepositoryImpl.postLikeSuggestion({ id })
  );

  return mutation;
};

export const usePostUnLikeSuggestionMutation = () => {
  const mutation = useMutation(({ id }: postUnLikeSuggestionParam) =>
    SuggestionRepositoryImpl.postUnLikeSuggestion({ id })
  );

  return mutation;
};

export const usePostSuggestionCommentMutation = () => {
  const mutation = useMutation(({ comment, id }: postSuggestionCommentParam) =>
    SuggestionRepositoryImpl.postSuggestionComment({ comment, id })
  );

  return mutation;
};

export const useGetMySuggestionQuery = ({
  type,
  tag,
}: getMySuggestionsParam) => {
  console.log(tag);

  return useQuery(
    ["suggestion/getMySuggestions", type, tag],
    () => SuggestionRepositoryImpl.getMySuggestions({ type, tag }),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 60,
    }
  );
};

export const useGetSuggestionsByPage = ({
  page,
  limit,
}: getSuggestionsByPageParam) =>
  useQuery(
    "suggestion/getSuggestionByPage",
    () => SuggestionRepositoryImpl.getSuggestionsByPage({ page, limit }),
    { keepPreviousData: true, enabled: !!page }
  );

export const usePostSuggestionMutation = () => {
  const mutation = useMutation(
    ({ title, text, tag, imageUrl }: postSuggestionParam) =>
      SuggestionRepositoryImpl.postSuggestion({ title, text, tag, imageUrl })
  );

  return mutation;
};
