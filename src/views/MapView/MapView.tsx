import React, { useState, useEffect } from "react";
import Map from "./Map";

type MapViewProps = {
  userId: number;
};

const MapView: React.FC<MapViewProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    // FIXME: true;
    return false;
  });

  useEffect(() => {
    // TODO: 최초 화면 설정
    // - isLoading
  }, []);

  return <>{isLoading ? null : <Map userId={props.userId} />}</>;
};

export default MapView;
