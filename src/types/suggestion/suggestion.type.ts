import { Member } from "../member/member.type";
import { Response } from "../util/response.type";

export interface Suggestion {
  title: string;
  text: string;
  tag: SuggestionTag[];
  imageUrl: string;
}

export interface SuggestionDetail extends Suggestion {
  id: number;
  createAt: string;
  updateAt: string;
  sympathyCount: number;
  status: SuggestionStatus;
  user: Member;
}

export type SuggestionStatus = "REFUSE" | "SOLVED" | "WAITING";

export type SuggestionTag = "SCHOOL" | "DORMITORY" | "CAFETERIA";

export type SuggestionPreview = Omit<
  SuggestionDetail,
  "text" | "updateAt" | "sympathyCount" | "sympathyList" | "status"
>;

export interface suggestionsResponse extends Response {
  data: SuggestionPreview[];
}

export interface mySuggestionsResponse extends Response {
  data: SuggestionPreview[];
}

export interface suggestionsByPageResponse extends Response {
  isLast: boolean;
  data: SuggestionPreview[];
}
