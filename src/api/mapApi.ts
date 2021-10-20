// import axios from "axios";
import axios from "axios";

// FIXME: CROS
const instance = axios.create({
  baseURL: "http://3.34.236.155:8000",
});

export const getLocation = async (userId: string, forTest: number = 0) => {
  let data;
  try {
    data = instance.get(`worker/get/loc&${userId}`);
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const getBuilding = async (buildingId: number) => {
  let data;
  try {
    data = instance.get(`building/getBuilding&${buildingId}`);
  } catch (error) {
    console.error(error);
  }
  return data;
};

export const getFloor = async (buildingId: number, floorLevel: number) => {
  let data;
  try {
    data = instance.get(`building/getFloor&${buildingId}&${floorLevel}`);
  } catch (error) {
    console.error(error);
  }
  return data;
};
