import { abnormalStatesJson } from "../test/jsonData";

export const getAbnormalStates = async () => {
  let res = null;
  await setTimeout(() => {}, 1000);
  res = abnormalStatesJson;
  return res;
};
