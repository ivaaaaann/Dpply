import { atom } from "recoil";

export const suggestionPostImage = atom<string>({
  key: "suggestion/suggestionPostImage",
  default: "",
});
