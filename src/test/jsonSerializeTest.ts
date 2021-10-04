import { deserialize, serialize } from "typescript-json-serializer";
import { user_position_json, abnormal_states_json } from "./jsonData";
import { Position } from "../@types/mapAPITypes";
import { AbnormalState } from "../@types/dashboardAPITypes";

/// Map
const position = deserialize<Position>(user_position_json, Position);
const data1 = serialize(position);
console.dir(data1);

/// Abnormal State
const abnormalStates = abnormal_states_json.map((state) =>
  deserialize<AbnormalState>(state, AbnormalState)
);
const data2 = abnormalStates.map((state) => serialize(state));
console.dir(data2);
