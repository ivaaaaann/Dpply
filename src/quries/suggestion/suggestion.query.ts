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
  deleteSuggestionParam,
  postSolveSuggestionParam,
  postRefuseSuggestionParam,
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

export const useGetMySuggestionQuery = ({ type, tag }: getMySuggestionsParam) =>
  useQuery(
    ["suggestion/getMySuggestions", type, tag],
    () => SuggestionRepositoryImpl.getMySuggestions({ type, tag }),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetSuggestionsByPage = ({ page }: getSuggestionsByPageParam) =>
  useQuery(
    ["suggestion/getSuggestionByPage", page],
    () => SuggestionRepositoryImpl.getSuggestionsByPage({ page }),
    { keepPreviousData: true }
  );

export const usePostSuggestionMutation = () => {
  const mutation = useMutation(
    ({ title, text, tag, imageUrl }: postSuggestionParam) =>
      SuggestionRepositoryImpl.postSuggestion({ title, text, tag, imageUrl })
  );

  return mutation;
};

export const useDeleteSuggestionMutation = () => {
  const mutation = useMutation(({ id }: deleteSuggestionParam) =>
    SuggestionRepositoryImpl.deleteSuggestion({ id })
  );

  return mutation;
};

export const usePostSolveSuggestionMutation = () => {
  const mutation = useMutation(({ id }: postSolveSuggestionParam) =>
    SuggestionRepositoryImpl.postSolveSuggestion({ id })
  );

  return mutation;
};

export const usePostRefuseSuggestionMutation = () => {
  const mutation = useMutation(({ id }: postRefuseSuggestionParam) =>
    SuggestionRepositoryImpl.postRefuseSuggestion({ id })
  );

  return mutation;
};
