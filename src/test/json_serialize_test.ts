import { deserialize, serialize } from "typescript-json-serializer";
import { user_position_json, floor_info_json } from "./json_data";
import { Position, Floor } from "../@types/MapAPITypes";

const position = deserialize<Position>(user_position_json, Position);
const data1 = serialize(position);
console.log(data1);

const floor = deserialize<Floor>(floor_info_json, Floor);
const data2 = serialize(floor);
console.log(data2);
