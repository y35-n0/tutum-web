// import axios from "axios";
import axios from "axios";
import { Building, FloorRaw, LocationRaw } from "../types/mapTypes";

const instance = axios.create({
  // baseURL: `http:${process.env.REACT_APP_API_SERVER}:8000`,
});

export const getLocation = async (userId: number): Promise<LocationRaw> => {
  // console.log("getLocation");
  let res;
  try {
    res = await instance.get(`/api/worker/get/loc&${userId}`);
    // console.log(res.data.data);
    res.data.data.z = 4;
    // res.data.data.x = 30;
    // res.data.data.y = 20;
  } catch (error) {
    console.error(error);
  }
  return res?.data.data;
};

export const getBuilding = async (buildingId: number): Promise<Building> => {
  // console.log("getBuilding");

  let res;
  try {
    res = await instance.get(`/api/building/getBuilding&${buildingId}`);
    // FIXME: 수정 지우기
    // console.log(res.data.data);
    // res.data.data.size.height = 31.4;
    // res.data.data.size.width = 50.494;
    // res.data.data.floorHeightInfo = [
    //   {
    //     level: 7,
    //     content: "7층",
    //     heightLow: -10000,
    //     heightHigh: 10000,
    //   },
    // ];

    // console.log(res);
  } catch (error) {
    console.error(error);
  }
  return res?.data.data;
};

export const getFloor = async (
  buildingId: number,
  floorLevel: number
): Promise<FloorRaw> => {
  // console.log("getFloor");

  let res;
  try {
    res = await instance.get(
      `/api/building/getFloor&${buildingId}&${floorLevel}`
    );

    // console.log(res.data.data);
    // res.data.data.width = 650;
    // res.data.data.height = 500;
    // res.data.data.top = 100;
    // res.data.data.right = 85;
    // res.data.data.bottom = 100;
    // res.data.data.left = 85;
  } catch (error) {
    console.error(error);
  }
  return res?.data.data;
};
