import { atom } from "recoil";

export const suggestionPostImageAtom = atom<string>({
  key: "suggestion/suggestionPostImageAtom",
  default: "",
});
