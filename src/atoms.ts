import { atom } from "recoil";

export const isAboutOpenAtom = atom<boolean>({
  key: "isAboutOpen",
  default: false,
});

export const isCardStopAtom = atom<boolean>({
  key: "isCardStop",
  default: false,
});