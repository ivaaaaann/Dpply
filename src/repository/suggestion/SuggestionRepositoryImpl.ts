import { customAxios } from "../../lib/axios/axios";
import {
  getMySuggestionsParam,
  getMySuggestionsResponse,
  getSuggestionCommentsParam,
  getSuggestionCommentsResponse,
  getSuggestionParam,
  getSuggestionResponse,
  getSuggestionsByPageParam,
  getSuggestionsByPageResponse,
  getSuggestionsParam,
  getSuggestionsResponse,
  postLikeSuggestionParam,
  postSuggestionCommentParam,
  postSuggestionParam,
  postUnLikeSuggestionParam,
  SuggestionRepository,
} from "./SuggestionRepository";

class SuggestionRepositoryImpl implements SuggestionRepository {
  public async getSuggestions({
    type = "WAITING",
  }: getSuggestionsParam): Promise<getSuggestionsResponse> {
    const { data } = await customAxios.get(`/posting?type=${type}`);

    return data;
  }

  public async getSuggestion({
    id,
  }: getSuggestionParam): Promise<getSuggestionResponse> {
    const { data } = await customAxios.get(`/posting/${id}`);

    return data;
  }

  public async postSuggestion({
    title,
    text,
    tag,
    imageUrl,
  }: postSuggestionParam): Promise<void> {
    const { data } = await customAxios.post("/posting", {
      title,
      text,
      tag,
      imageUrl,
    });

    return data;
  }

  public async postLikeSuggestion({
    id,
  }: postLikeSuggestionParam): Promise<void> {
    await customAxios.post(`/posting/sympathy/${id}`);
  }

  public async postUnLikeSuggestion({
    id,
  }: postUnLikeSuggestionParam): Promise<void> {
    await customAxios.post(`/posting/sympathy-cancel/${id}`);
  }

  public async getSuggestionComments({
    id,
  }: getSuggestionCommentsParam): Promise<getSuggestionCommentsResponse> {
    const { data } = await customAxios.get(`/posting/comment/${id}`);
    return data;
  }

  public async postSuggestionComment({
    comment,
    id,
  }: postSuggestionCommentParam): Promise<void> {
    const { data } = await customAxios.post(`/posting/comment/${id}`, {
      comment,
    });

    return data;
  }

  public async getMySuggestions({
    type,
  }: getMySuggestionsParam): Promise<getMySuggestionsResponse> {
    const { data } = await customAxios.get(`/posting/my?type=${type}`);
    return data;
  }

  public async getSuggestionsByPage({
    page,
  }: getSuggestionsByPageParam): Promise<getSuggestionsByPageResponse> {
    const { data } = await customAxios.get(`/suggesion?page=${page}`);
    return data;
  }
}

export default new SuggestionRepositoryImpl();