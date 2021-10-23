import { selector } from "recoil";
import { abnormalStatesAtom } from "../atoms/abnormalStatesAtoms";
import {
  PROCESSING_STATUS,
  PROCESSING_STATUS_CONTENT,
} from "../constants/statusConstants";

export const newAbnormalStatesSelector = selector({
  key: "newAbnormalStates",
  get: ({ get }) => {
    const states = get(abnormalStatesAtom);

    return states.filter((state) => {
      return (
        state.actionStatus ===
        PROCESSING_STATUS_CONTENT[PROCESSING_STATUS.UNCHECKED]
      );
    });
  },
});

// TODO: Filter
// export const filteredAbnormalStatesSelector = selector({
//   key: "filteredAbnormalStates",
//   get: ({ get }) => {},
// });
