import { atom } from "recoil";
import { AbnormalState } from "../types/dashboardTypes";

export const abnormalStatesAtom = atom<AbnormalState[]>({
  key: "abnormalStates",
  default: [],
});

// TODO: filter
// export const abnormalStatesFilterAtom = atom<Set<string>>({
//   key: "abnormalStatesFilter",
//   default: new Set(),
// });
