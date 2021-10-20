import { getAbnormalStates } from "../api/dashboardApi";
import { getBuilding, getFloor, getLocation } from "../api/mapApi";

(async () => {
  let res;
  res = await getLocation("1");
  console.dir(res, { depth: 5 });
})();

(async () => {
  let res;
  res = await getBuilding(1);
  console.dir(res, { depth: 5 });
})();
(async () => {
  let res;
  res = await getFloor(1, 1);
  console.dir(res, { depth: 5 });
})();

(async () => {
  let res;
  res = await getAbnormalStates();
  console.dir(res, { depth: 5 });
})();
