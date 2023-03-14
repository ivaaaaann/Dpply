import { Member } from "../member/member.type";

export interface Suggestion {
  title: string;
  text: string;
  tag: SuggestionTag;
  imageUrl: string;
}

export interface SuggestionDetail extends Suggestion {
  id: number;
  createAt: string;
  updateAt: string;
  sympathyCount: number;
  sympathyUser: SuggestionSympathy[];
  status: SuggestionStatus;
  user: Member;
}

export interface SuggestionComment {
  comment: string;
  createAt: string;
  id: number;
  positing: SuggestionDetail;
  user: Member;
}

export interface SuggestionSympathy {
  id: number;
  status: "YES" | "NO";
  user: Member;
}

export type SuggestionStatus = "REFUSE" | "SOLVED" | "WAITING";

export type SuggestionTag = "SCHOOL" | "DORMITORY" | "CAFETERIA";

export type SuggestionPreview = Omit<
  SuggestionDetail,
  "text" | "updateAt" | "sympathyCount" | "sympathyList" | "status"
>;

export interface SuggestionAll {
  data: SuggestionDetail;
}
