import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getPosition } from "../../api/workerApi";
import { Position } from "../Position";
import * as _ from "lodash";

const REFETCH_INTERVAL_MS = 1000;
const RESIZE_DELAY_MS = 300;

type Props = {
  targetId: number;
};

// Map container
const Map: React.FC<Props> = ({ targetId }) => {
  const [map, setMap] = useState<any>(null);
  const [position, setPosition] = useState<Position>(new Position());

  // TODO: 데이터 패치 로직 분리하기
  // Fetch user position data
  const { isLoading, data, error, isFetching } = useQuery(
    "position",
    () => getPosition(targetId),
    {
      refetchInterval: REFETCH_INTERVAL_MS,
      refetchOnWindowFocus: false,
    }
  );

  // Set position
  // FIXME: 정상적인 데이터가 입력되면 확인
  useEffect(() => {
    if (!isFetching) {
      let _position = new Position();
      // data.latitude,
      // data.longitude,
      // data.altitude,
      // new Date(data.recent_upload)

      setPosition(_position);
    }
  }, [isFetching]);

  // Initialize map
  useEffect(() => {
    if (isLoading === false) {
      let center = new window.kakao.maps.LatLng(position.lat, position.lng);

      const container = document.getElementById("map");
      const options = {
        center: center,
        level: 3,
      };

      setMap(new window.kakao.maps.Map(container, options));

      // Relayout map when window resized using debounce
      const onResize = () => map.relayout();

      document.addEventListener(
        "resize",
        _.debounce(onResize, RESIZE_DELAY_MS)
      );
    }
  }, [isLoading]);

  // TODO: 스타일 적용
  // Draw marker and infoWindow
  useEffect(() => {
    if (isLoading === false) {
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
    }
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
