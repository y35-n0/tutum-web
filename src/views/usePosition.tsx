import React, { useState, useEffect, SetStateAction } from "react";
import { Position } from "./Position";

// fetch를 반복할 횟수
const INTERVAL_MS = 1000;

type usePositionProps = { targetId: number };
type usePositionReturns = Position;

export const usePosition = (props: usePositionProps): usePositionReturns => {
  const { targetId: id } = props;
  const [position, setPosition] = useState<Position>(new Position());

  // 초기화
  useEffect(() => {
    // interval 설정
    let interval = setInterval(() => {
      fetch();
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  // 사용자 id에 따른 Position fetch
  // FIXME: API fetch
  const fetch = () => {
    setPosition(new Position());
  };

  return position;
};
