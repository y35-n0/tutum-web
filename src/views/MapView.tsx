import React, { useState, useEffect } from "react";
import Map from "./Map";

type MapViewProps = {
  targetId: number;
};

// 지도 페이지
const MapView: React.FC<MapViewProps> = ({ targetId }) => {
  // script loading
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 동적으로 kakap.maps 라이브러리 불러오기
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

  // script loading이 끝나면 Map 표시
  return <>{isLoading ? null : <Map targetId={targetId} />}</>;
};

export default MapView;
