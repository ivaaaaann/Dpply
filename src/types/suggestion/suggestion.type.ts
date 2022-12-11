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
  status: "REFUSE" | "SOLVED";
  user: Member;
}

export type SuggestionTag = "SCHOOL" | "DORMITORY" | "CAFETERIA";

export type SuggestionPreview = Omit<
  SuggestionDetail,
  "text" | "updateAt" | "sympathyCount" | "sympathyList" | "status"
>;

export interface suggestionsResponse extends Response {
  isLast: boolean;
  data: SuggestionPreview[];
}
