import { getMap } from "../api/workerApi";

(async () => {
  let res;
  res = await getMap(1);
  console.dir(res);
})();
