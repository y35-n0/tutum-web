import { abnormal_states_json } from "../test/jsonData";

export const getAbnormalStates = async () => {
  let res = null;
  await setTimeout(() => {}, 1000);
  res = abnormal_states_json;
  return res;
};
