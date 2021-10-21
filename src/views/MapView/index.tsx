import React, { useState, useEffect } from "react";
import useLocation from "../../hooks/useLocation";
import { formattingDate } from "../common/GlobalStyle";
import Map from "./Map";
import MapFooter from "./MapFooter";
import MapHeader from "./MapHeader";
import MapViewBox from "./MapViewBox";

const REFETCH_INTERVAL_MS = 1000;

type MapViewProps = {
  userId: string;
};

const MapView: React.FC<MapViewProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    return false;
  });
  const [location, updateLocation] = useLocation(props.userId);

  useEffect(() => {
    const timer = setInterval(async () => {
      await updateLocation();
    }, REFETCH_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [updateLocation]);

  if (isLoading) return null;

  return (
    <MapViewBox>
      <MapHeader buildingName={location.building?.name} />
      <Map location={location} />
      <MapFooter
        floorName={location.floor?.name}
        timestamp={formattingDate(location.updated ?? new Date())}
      />
    </MapViewBox>
  );
};

export default MapView;
