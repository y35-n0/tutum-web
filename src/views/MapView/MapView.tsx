import React, { useState, useEffect } from "react";
import Map from "./Map";

type MapViewProps = {
  targetId: number;
};

// User current location page
const MapView: React.FC<MapViewProps> = ({ targetId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load kakao map script library dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.onload = () => {
      window.kakao.maps.load(() => {
        setIsLoading(false);
      });
    };
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  // Present map when script loaded
  return <>{isLoading ? null : <Map targetId={targetId} />}</>;
};

export default MapView;
