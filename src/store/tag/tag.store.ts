import { atom } from "recoil";

export const tagClassificationKeyword = atom<
  "전체" | "급식실" | "기숙사" | "학교"
>({
  key: "tag/tagClassificationKeyword",
  default: "전체",
});
