import { selector } from "recoil";
import { abnormalStatesAtom } from "../atoms/abnormalStatesAtoms";
import {
  DANGER_LEVEL,
  PROCESSING_STATUS,
  STATE_GROUP,
  STATE_GROUP_CONTENT,
} from "../constants/stateConstants";
import { AbnormalState } from "../types/dashboardTypes";
import { BoardCountStateCardItem } from "../views/DashboardView/components/BoardCount/components/BoardCountState/BoardCountStateCard";
import {
  BoardTableItem,
  convertAbnormalStateToBoardTableItem,
} from "../views/DashboardView/components/BoardTable/BoardTableRow";

// 신규 이상상태 for popup
export const newAbnormalStatesSelector = selector<AbnormalState[]>({
  key: "newAbnormalStates",
  get: ({ get }) => {
    const states = get(abnormalStatesAtom);

    return states.filter(
      (state) => state.processingStatus === PROCESSING_STATUS.UNCHECKED
    );
  },
});

// 필터링 된 이상상태 for table
export const filteredBoardTableItemsSelector = selector<BoardTableItem[]>({
  key: "filteredBoardTableItems",
  get: ({ get }) => {
    const states = get(abnormalStatesAtom);
    // TODO: Filter
    return states
      .filter((state) => state.state.level !== DANGER_LEVEL.GOOD)
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .map((state) => convertAbnormalStateToBoardTableItem(state));
  },
});

// 그룹별 이상상태 수 for count state
export const countGroupbyStateTypeItemsSelector = selector<
  BoardCountStateCardItem[]
>({
  key: "countGroupbyStateTypeItems",
  get: ({ get }) => {
    let states = get(abnormalStatesAtom);
    states = states.filter((state) => state.state.level !== DANGER_LEVEL.GOOD);

    let items = Array.from(
      { length: 6 },
      (_, i: number) =>
        ({
          id: STATE_GROUP[i],
          value: STATE_GROUP[i],
          content: STATE_GROUP_CONTENT[i as STATE_GROUP],
          count: 0,
        } as BoardCountStateCardItem)
    );

    items[STATE_GROUP.COMPREHENSIVE].count = states.length;
    items[STATE_GROUP.DANGER].count = states.filter(
      (state) => state.state.level === DANGER_LEVEL.DANGER
    ).length;
    items[STATE_GROUP.UNCHECKED].count = states.filter(
      (state) => state.processingStatus === PROCESSING_STATUS.UNCHECKED
    ).length;
    // TODO: count states
    items[STATE_GROUP.COMMUNICATION].count = states.filter(
      (state) =>
        state.state.content.startsWith("LTE") ||
        state.state.content.startsWith("블루투스")
    ).length;
    items[STATE_GROUP.HEALTH].count = 0;
    items[STATE_GROUP.NATURE].count = states.filter(
      (state) =>
        state.state.content.startsWith("산소") ||
        state.state.content.startsWith("온도")
    ).length;
    return items;
  },
});
