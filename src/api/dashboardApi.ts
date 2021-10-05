import { abnormalStatesJson } from "../test/jsonData";

// TODO: Real data load
export const getAbnormalStates = async () => {
  let res = null;
  await setTimeout(() => {}, 1000);
  res = abnormalStatesJson;
  return res;
};
