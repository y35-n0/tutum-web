// import axios from "axios";
import axios from "axios";
import { Building, FloorRaw, LocationRaw } from "../types/mapTypes";

const instance = axios.create({});

export const getLocation = async (userId: number): Promise<LocationRaw> => {
  let res;
  try {
    // FIXME: 1 -> userId로 수정
    res = await instance.get(`/api/worker/get/loc&${1}`);
    // FIXME: z 수정 지우기
    res.data.data.z = -1;
  } catch (error) {
    console.error(error);
  }
  return res?.data.data;
};

export const getBuilding = async (buildingId: number): Promise<Building> => {
  let res;
  try {
    res = await instance.get(`/api/building/getBuilding&${buildingId}`);
    // FIXME: level 수정 지우기
    res.data.data.floorHeightInfo[1].level = -1;
  } catch (error) {
    console.error(error);
  }
  return res?.data.data;
};

export const getFloor = async (
  buildingId: number,
  floorLevel: number
): Promise<FloorRaw> => {
  let res;
  try {
    res = await instance.get(
      `/api/building/getFloor&${buildingId}&${floorLevel}`
    );
  } catch (error) {
    console.error(error);
  }
  return res?.data.data;
};
