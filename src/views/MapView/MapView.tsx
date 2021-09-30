import React, { useState, useEffect } from "react";
import Map from "./Map";

type MapViewProps = {
  targetId: number;
};

const MapView: React.FC<MapViewProps> = ({ targetId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(() => {
    // FIXME: true;
    return false;
  });

  useEffect(() => {
    // TODO: 최초 화면 설정
    // - isLoading
  }, []);

  return <>{isLoading ? null : <Map targetId={targetId} />}</>;
};

export default MapView;
