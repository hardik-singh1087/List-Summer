import { atom, selector } from "recoil";

const listAtom = atom({
  key: "listAtom",
  default: [10, 20, 30],
});

export const sumSelector = selector({
  key: "sumSelector",
  get: ({ get }) => {
    const numbers = get(listAtom);
    return numbers.reduce((sum, num) => sum + num, 0);
  },
});

export default listAtom;
