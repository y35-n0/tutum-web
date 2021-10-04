// import axios from "axios";
import { userPositionJson } from "../test/jsonData";

// export const getPosition = async (id: number) => {
//   const res = await axios.get(`/api/worker/get/loc/${id}`);
//   return res.data;
// };

export const getMap = async (id: number) => {
  let res = null;
  await setTimeout(() => {}, 1000);
  res = userPositionJson;
  return res;
};
