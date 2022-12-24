import { SuggestionStatus } from "../../types/suggestion/suggestion.type";

export interface getSuggestionsParam {
  type: SuggestionStatus;
}

export interface getMySuggestionsParam {
  type: SuggestionStatus;
}

export interface getSuggestionsByPageParam {
  page: number;
  limit: number;
}
