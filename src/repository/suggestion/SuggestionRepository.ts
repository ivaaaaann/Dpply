import { Response } from "../../types/util/response.type";
import {
  SuggestionPreview,
  Suggestion,
  SuggestionStatus,
  SuggestionDetail,
  SuggestionComment,
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

  postLikeSuggestion({ id }: postLikeSuggestionParam): Promise<void>;

  postUnLikeSuggestion({ id }: postUnLikeSuggestionParam): Promise<void>;

  getMySuggestions({
    type,
  }: getMySuggestionsParam): Promise<getMySuggestionsResponse>;

  getSuggestionsByPage({
    page,
  }: getSuggestionsByPageParam): Promise<getSuggestionsByPageResponse>;
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

export interface getMySuggestionsParam {
  type: SuggestionStatus;
}

export interface getMySuggestionsResponse extends Response {
  data: SuggestionPreview[];
}

export interface getSuggestionsByPageParam {
  page: number;
  limit: number;
}

export interface getSuggestionsByPageResponse extends Response {
  isLast: boolean;
  data: SuggestionPreview[];
}
