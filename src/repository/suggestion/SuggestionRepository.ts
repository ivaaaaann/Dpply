import { Response } from "../../types/util/response.type";
import {
  SuggestionPreview,
  Suggestion,
  SuggestionStatus,
  SuggestionDetail,
  SuggestionComment,
  SuggestionTag,
} from "../../types/suggestion/suggestion.type";

export interface SuggestionRepository {
  getSuggestions({
    type,
  }: getSuggestionsParam): Promise<getSuggestionsResponse>;

  getSuggestion({ id }: getSuggestionParam): Promise<getSuggestionResponse>;

  getSuggestionComments({
    id,
  }: getSuggestionCommentsParam): Promise<getSuggestionCommentsResponse>;

  postSuggestionComment({
    comment,
    id,
  }: postSuggestionCommentParam): Promise<void>;

  postSuggestion({
    title,
    text,
    tag,
    imageUrl,
  }: postSuggestionParam): Promise<void>;

  deleteSuggestion({ id }: deleteSuggestionParam): Promise<void>;

  postLikeSuggestion({ id }: postLikeSuggestionParam): Promise<void>;

  postUnLikeSuggestion({ id }: postUnLikeSuggestionParam): Promise<void>;

  getMySuggestions({
    type,
    tag,
  }: getMySuggestionsParam): Promise<getMySuggestionsResponse>;

  getSuggestionsByPage({
    page,
  }: getSuggestionsByPageParam): Promise<getSuggestionsByPageResponse>;

  postSolveSuggestion({ id }: postSolveSuggestionParam): Promise<void>;

  postRefuseSuggestion({ id }: postRefuseSuggestionParam): Promise<void>;
}

export interface getSuggestionsParam {
  type: SuggestionStatus;
}

export interface getSuggestionsResponse extends Response {
  data: SuggestionPreview[];
}

export interface getSuggestionParam {
  id: number;
}

export interface getSuggestionResponse {
  data: SuggestionDetail;
}

export interface postLikeSuggestionParam {
  id: number;
}

export interface postUnLikeSuggestionParam {
  id: number;
}

export interface getSuggestionCommentsParam {
  id: number;
}

export interface getSuggestionCommentsResponse {
  data: SuggestionComment[];
}

export interface postSuggestionCommentParam {
  comment: string;
  id: number;
}

export interface postSuggestionParam extends Suggestion {}

export interface deleteSuggestionParam {
  id: number;
}

export interface getMySuggestionsParam {
  type: SuggestionStatus;
  tag?: SuggestionTag | "전체조회";
}

export interface getMySuggestionsResponse extends Response {
  data: SuggestionPreview[];
}

export interface getSuggestionsByPageParam {
  page: number;
}

export interface getSuggestionsByPageResponse extends Response {
  data: {
    pageCount: number;
    posting: SuggestionPreview[];
  };
}

export interface postSolveSuggestionParam {
  id: number;
}

export interface postRefuseSuggestionParam {
  id: number;
}
