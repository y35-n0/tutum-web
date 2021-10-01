import axios from "axios";
import {
  building_info_json,
  floor_info_json,
  user_position_json,
} from "../test/jsonData";

// export const getPosition = async (id: number) => {
//   const res = await axios.get(`/api/worker/get/loc/${id}`);
//   return res.data;
// };

export const getMap = async (id: number) => {
  let res = null;
  await setTimeout(() => {}, 1000);
  res = user_position_json;
  return res;
};
