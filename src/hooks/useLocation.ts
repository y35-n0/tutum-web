import _ from "lodash";
import { useState } from "react";
import { deserialize } from "typescript-json-serializer";
import { getBuilding, getFloor, getLocation } from "../api/mapApi";
import { Building, Floor, FloorExtended, Location } from "../types/mapTypes";

export type TLocationExtended = {
  userId: string;
  x?: number; // x
  y?: number; // y
  building?: Building; // 빌딩 Id
  floor?: FloorExtended; // 층 정보
  updated?: Date;
};

// FIXME: everytime updated
const useLocation = (
  userId: string
): [TLocationExtended, () => Promise<void>] => {
  const InitialData = { userId: userId };
  const [location, setLocation] = useState<TLocationExtended>(InitialData);

  const updateLocation = async () => {
    let _newLocation = { ...location };
    const _rawLocation = await getLocation(_newLocation.userId);
    const _objectLocation = new Location(_rawLocation);

    const _setFloor = async () => {
      const level = _newLocation.building!.floorHeightInfo.find(
        (info) =>
          info.heightLow <= _objectLocation.z &&
          info.heightHigh > _objectLocation.z
      )?.level;
      if (level) {
        const floorRaw = await getFloor(_newLocation.building!.id, level);
        _newLocation.floor = new FloorExtended(
          new Floor(floorRaw),
          _newLocation.building!
        );
      }
    };

    const _setBuilding = async () => {
      _newLocation.building = await getBuilding(_objectLocation.buildingId);
    };

    _newLocation.x = _objectLocation.x;
    _newLocation.y = _objectLocation.y;
    _newLocation.updated = new Date(_objectLocation.updated);

    // 건물이 같음
    if (
      _newLocation.building &&
      _newLocation.building.id === _objectLocation.buildingId
    ) {
      if (
        _newLocation.floor &&
        _newLocation.floor.heightLow <= _objectLocation.z &&
        _newLocation.floor.heightHigh >= _objectLocation.z
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

    console.log(_newLocation);
    if (!_.isEqual(_newLocation, location)) setLocation(_newLocation);
  };

  return [location, updateLocation];
};

export default useLocation;
