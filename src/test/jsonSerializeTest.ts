import { deserialize, serialize } from "typescript-json-serializer";
import {
  user_position_json,
  floor_info_json,
  building_info_json,
} from "./jsonData";
import { Position, Floor, Building } from "../@types/MapAPITypes";

const position = deserialize<Position>(user_position_json, Position);
const data1 = serialize(position);
console.dir(data1);

const floor = deserialize<Floor>(floor_info_json, Floor);
const data2 = serialize(floor);
console.dir(data2);

const building = deserialize<Building>(building_info_json, Building);
const data3 = serialize(building);
console.dir(data3);
