import { deserialize, serialize } from "typescript-json-serializer";
import { userPositionJson, abnormalStatesJson } from "./jsonData";
import { Position } from "../@types/mapAPITypes";
import { AbnormalState } from "../@types/dashboardAPITypes";

/// Map
const position = deserialize<Position>(userPositionJson, Position);
const data1 = serialize(position);
console.dir(data1);

/// Abnormal State
const abnormalStates = abnormalStatesJson.map((state) =>
  deserialize<AbnormalState>(state, AbnormalState)
);
const data2 = abnormalStates.map((state) => serialize(state));
console.dir(data2);
