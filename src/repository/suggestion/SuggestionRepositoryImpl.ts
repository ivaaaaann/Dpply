import { customAxios } from "../../lib/axios/axios";
import {
  deleteSuggestionParam,
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
  postRefuseSuggestionParam,
  postSolveSuggestionParam,
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

  public async deleteSuggestion({ id }: deleteSuggestionParam): Promise<void> {
    await customAxios.delete(`/posting/${id}`);
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
    tag,
  }: getMySuggestionsParam): Promise<getMySuggestionsResponse> {
    const { data } = await customAxios.get(
      `/posting/my?type=${type}&tag=${tag === "전체조회" ? "" : tag || ""}`
    );
    return data;
  }

  public async getSuggestionsByPage({
    page,
  }: getSuggestionsByPageParam): Promise<getSuggestionsByPageResponse> {
    const { data } = await customAxios.get(`/posting/page?page=${page}`);
    return data;
  }

  public async postSolveSuggestion({
    id,
  }: postSolveSuggestionParam): Promise<void> {
    await customAxios.post(`/posting/solve/${id}`);
  }

  public async postRefuseSuggestion({
    id,
  }: postRefuseSuggestionParam): Promise<void> {
    await customAxios.post(`/posting/refuse/${id}`);
  }
}

export default new SuggestionRepositoryImpl();
