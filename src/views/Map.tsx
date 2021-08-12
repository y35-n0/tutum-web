import React, { useState, useEffect } from "react";
import { usePosition } from "./usePosition";

type MapProps = {
  targetId: number;
};

// 지도
const Map: React.FC<MapProps> = ({ targetId }) => {
  const [map, setMap] = useState<any>(null);
  const position = usePosition({ targetId: targetId });

  // 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(position.lat, position.lng),
      level: 3,
    };

    setMap(new window.kakao.maps.Map(container, options));

    // 창 크기가 변경되면 relayout()
    window.onresize = (event) => {
      if (map) map!.relayout();
    };
  }, []);

  // FIXME: 스타일 적용
  // 마커 및 그리기
  useEffect(() => {
    let markerPosition = new window.kakao.maps.LatLng(
      position.lat,
      position.lng
    );
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    let infoWindow = new window.kakao.maps.InfoWindow({
      position: markerPosition,
      content:
        `고도<br>` +
        `${position.alt}<br>` +
        `<br>` +
        `업데이트 시각<br>` +
        `${position.dt.toLocaleDateString()}<br>` +
        `${position.dt.toLocaleTimeString()}`,
    });

    marker.setMap(map);
    infoWindow.open(map, marker);

    return () => {
      marker.setMap(null);
      infoWindow.setMap(null);
    };
  }, [position]);

  return (
    <>
      <div
        id="map"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      ></div>
    </>
  );
};

export default Map;
