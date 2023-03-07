import { atom } from "recoil";

export const adminPageAtom = atom({
  key: "admin/adminPageAtom",
  default: 1,
});

export const adminPageHasMoreAtom = atom({
  key: "admin/adminPageHasMoreAtom",
  default: false,
});
