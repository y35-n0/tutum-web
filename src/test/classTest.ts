import LocationExtended from "../types/LocationExtended";

(() => {
  let locationExtended = new LocationExtended({ userId: 1 });
  console.dir(locationExtended, { depth: 5 });
})();
