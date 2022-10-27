import { Member } from "../member/member.type";
import { Response } from "../util/response.type";

export interface Suggestion {
  id: number;
  title: string;
  createAt: string;
  updateAt: string;
  tag: SuggestionTag[];
  text: string;
  sympathyCount: number;
  status: "REFUSE" | "SOLVED";
  user: Member;
  imageUrl: string;
}

export type SuggestionTag = "SCHOOL" | "DORMITORY" | "CAFETERIA";

export type SuggestionPreview = Omit<
  Suggestion,
  "text" | "updateAt" | "sympathyCount" | "sympathyList" | "status"
>;

export interface suggestionsResponse extends Response {
  isLast: boolean;
  data: SuggestionPreview[];
}
