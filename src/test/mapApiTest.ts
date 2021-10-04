import { getAbnormalStates } from "../api/dashboardApi";
import { getMap } from "../api/mapApi";

(async () => {
  let res;
  res = await getMap(1);
  console.dir(res, { depth: 5 });
})();

(async () => {
  let res;
  res = await getAbnormalStates();
  console.dir(res, { depth: 5 });
})();
