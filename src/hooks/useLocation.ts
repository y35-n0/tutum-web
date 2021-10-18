import _ from "lodash";
import { useState } from "react";
import { getBuilding, getFloor, getLocation } from "../api/mapApi";
import { Building, FloorExtended } from "../types/mapTypes";

export type TLocationExtended = {
  userId: number;
  x?: number; // x
  y?: number; // y
  building?: Building; // 빌딩 Id
  floor?: FloorExtended; // 층 정보
  updated?: Date;
};

// FIXME: everytime updated
const useLocation = (
  userId: number
): [TLocationExtended, () => Promise<void>] => {
  const InitialData = { userId: userId };
  const [location, setLocation] = useState<TLocationExtended>(InitialData);

  const updateLocation = async () => {
    let _location = { ...location };
    const _rawLocation = await getLocation(_location.userId);

    const _setFloor = async () => {
      const level = _location.building!.floorHeightInfo.find(
        (info) =>
          info.heightLow <= _rawLocation.z && info.heightHigh > _rawLocation.z
      )?.level;
      if (level) {
        const floor = await getFloor(_location.building!.id, level);
        _location.floor = new FloorExtended(floor, _location.building!);
      }
    };

    const _setBuilding = async () => {
      _location.building = await getBuilding(_rawLocation.buildingId);
    };

    _location.x = _rawLocation.x;
    _location.y = _rawLocation.y;
    _location.updated = new Date(_rawLocation.updated);

    // 건물이 같음
    if (
      _location.building &&
      _location.building.id === _rawLocation.buildingId
    ) {
      if (
        _location.floor &&
        _location.floor.heightLow <= _rawLocation.z &&
        _location.floor.heightHigh >= _rawLocation.z
      ) {
      } else {
        // 층수가 다름
        await _setFloor();
      }
    }
    // 건물이 다름
    else {
      await _setBuilding();
      await _setFloor();
    }

    if (!_.isEqual(_location, location)) setLocation(_location);
  };

  return [location, updateLocation];
};

export default useLocation;
