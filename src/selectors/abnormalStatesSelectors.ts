import { selector } from "recoil";
import { abnormalStatesAtom } from "../atoms/abnormalStatesAtoms";
import { DANGER_LEVEL, PROCESSING_STATUS } from "../constants/statusConstants";
import { AbnormalState } from "../types/dashboardTypes";

export const newAbnormalStatesSelector = selector<AbnormalState[]>({
  key: "newAbnormalStates",
  get: ({ get }) => {
    const states = get(abnormalStatesAtom);

    return states.filter(
      (state) => state.processingStatus === PROCESSING_STATUS.UNCHECKED
    );
  },
});

export const filteredAbnormalStatesSelector = selector<AbnormalState[]>({
  key: "filteredAbnormalStates",
  get: ({ get }) => {
    const states = get(abnormalStatesAtom);
    // TODO: Filter
    return states.filter((state) => state.state.level !== DANGER_LEVEL.GOOD);
  },
});
