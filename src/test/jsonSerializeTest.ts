import { deserialize, serialize } from "typescript-json-serializer";
import {
  locationJson,
  abnormalStatesJson,
  buildingJson,
  floorJson,
} from "./jsonData";
import { Building, Floor, Location } from "../types/mapTypes";
import { AbnormalState } from "../types/dashboardTypes";

let object: any;
let data: string;
/// Map
object = deserialize<Location>(locationJson, Location);
data = serialize(object);
console.dir(data);

object = deserialize<Building>(buildingJson, Building);
data = serialize(object);
console.dir(data);

object = deserialize<Floor>(floorJson, Floor);
data = serialize(object);
console.dir(data);

/// Abnormal State
object = abnormalStatesJson.map((state) =>
  deserialize<AbnormalState>(state, AbnormalState)
);
data = object.map((state: any) => serialize(state));
console.dir(data);
