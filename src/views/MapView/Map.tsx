import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getPosition } from "../../api/workerApi";
import { Position } from "../Position";
import * as _ from "lodash";

const REFETCH_INTERVAL_MS = 1000;
const RESIZE_DELAY_MS = 300;

// TODO: 스타일 적용
const contentTemplate = (position: Position) =>
  `고도<br>` +
  `${position.lat}<br>` +
  `<br>` +
  `업데이트 시각<br>` +
  `${position.dt.toLocaleDateString()}<br>` +
  `${position.dt.toLocaleTimeString()}`;

type Props = {
  targetId: number;
};

// Map container
const Map: React.FC<Props> = ({ targetId }) => {
  const [map, setMap] = useState<any>();
  const [position, setPosition] = useState<Position | null>();

  // TODO: 데이터 패치 및 적용 로직 분리하기
  // Fetch user position data
  const { data, error, isFetching } = useQuery(
    "position",
    () => getPosition(targetId),
    {
      refetchInterval: REFETCH_INTERVAL_MS,
      refetchOnWindowFocus: false,
    }
  );

  // Set position every fetch
  useEffect(() => {
    if (!isFetching) {
      // TODO: 정상 데이터가 들어올 때 주석 해제
      let _position = new Position();
      // data.latitude,
      // data.longitude,
      // data.altitude,
      // new Date()

      setPosition(_position);
    }
  }, [isFetching]);

  // Initialize map when fetched and empty map
  useEffect(() => {
    if (!map && position) {
      let _center = new window.kakao.maps.LatLng(position.lat, position.lng);

      const _container = document.getElementById("map");
      const _options = {
        center: _center,
        level: 3,
      };

      let _map = new window.kakao.maps.Map(_container, _options);

      // Relayout map when window resized using debounce
      const _onResize = () => _map.relayout();

      document.addEventListener(
        "resize",
        _.debounce(_onResize, RESIZE_DELAY_MS)
      );

      setMap(_map);
    }
  }, [position]);

  // Draw marker and infoWindow
  useEffect(() => {
    if (map && position) {
      let _markerPosition = new window.kakao.maps.LatLng(
        position.lat,
        position.lng
      );

      let _marker = new window.kakao.maps.Marker({ position: _markerPosition });
      let _infoWindow = new window.kakao.maps.InfoWindow({
        position: _markerPosition,
        content: contentTemplate(position),
      });

      _marker.setMap(map);
      _infoWindow.open(map, _marker);

      return () => {
        _marker.setMap(null);
        _infoWindow.setMap(null);
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
