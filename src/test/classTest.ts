import useLocation from "../hooks/useLocation";

(async () => {
  let [locationExtended, updateLocation] = useLocation("1");
  await updateLocation();
  console.dir(locationExtended, { depth: 5 });
})();
