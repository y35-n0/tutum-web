// import axios from "axios";
import { buildingJson, floorJson, locationJson } from "../test/jsonData";

export const getLocation = async (userId: number, forTest: number = 0) => {
  let res = null;
  await setTimeout(() => {}, 1000);
  res = locationJson[forTest];
  return res;
};

export const getBuilding = async (buildingId: number) => {
  let res = null;
  await setTimeout(() => {}, 1000);
  res = buildingJson;
  return res;
};

export const getFloor = async (buidingId: number, floorLevel: number) => {
  let res = null;
  await setTimeout(() => {}, 1000);
  res = floorJson;
  return res;
};
