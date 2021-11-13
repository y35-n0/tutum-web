import { atom } from "recoil";
import { MapPopoutState } from "../views/MapPopout";

export const MapPopoutStateAtom = atom<MapPopoutState | null>({
  key: "mapPopoutState",
  default: null,
});
