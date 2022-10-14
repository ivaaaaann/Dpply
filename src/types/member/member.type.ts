export interface Member {
  email: string;
  grade: number;
  name: string;
  number: number;
  profileImage: string;
  role: MemberRole;
  room: number;
  uniqueId: string;
}

export type MemberRole = "ADMIN" | "STUDENT";

export interface myMemberResponse extends Response {
  data: Member;
}
