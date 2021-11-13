import React, { useEffect } from "react";
import useLocation from "../../../hooks/useLocation";
import { formattingDate } from "../../common/GlobalStyle";
import MapContent from "./MapContent";
import MapFooter from "./MapFooter";
import MapHeader from "./MapHeader";
import MapBox from "./MapBox";

const REFETCH_INTERVAL_MS = 1000;

type Props = {
  userId: number;
};

const MapView: React.FC<Props> = (props) => {
  // TODO: get popout item selector
  const [location, updateLocation] = useLocation(props.userId);

  useEffect(() => {
    const timer = setInterval(async () => {
      await updateLocation();
    }, REFETCH_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [updateLocation]);

  return (
    <MapBox>
      <MapHeader buildingName={location.building?.name} />
      <MapContent location={location} />
      <MapFooter
        floorName={location.floor?.name}
        timestamp={formattingDate(location.updated ?? new Date())}
      />
    </MapBox>
  );
};

export default MapView;
