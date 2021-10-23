import _ from "lodash";
import { useState } from "react";
import { getBuilding, getFloor, getLocation } from "../api/mapApi";
import {
  convertFloorAndBuildingToFloorExtended,
  convertFloorRawToFloor,
  convertLocationRawToLocation,
  Floor,
  FloorExtended,
  FloorRaw,
  Location,
  LocationExtended,
  LocationRaw,
} from "../types/mapTypes";

// FIXME: everytime updated
const useLocation = (
  userId: number
): [LocationExtended, () => Promise<void>] => {
  const initialData = { userId: userId };
  const [locationExtended, setLocation] =
    useState<LocationExtended>(initialData);

  const updateLocation = async () => {
    let _locationExtended = { ...locationExtended };
    const _locationRaw: LocationRaw = await getLocation(
      _locationExtended.userId
    );
    const _location: Location = convertLocationRawToLocation(_locationRaw);

    const _setFloor = async () => {
      const _level: number | undefined =
        _locationExtended.building!.floorHeightInfo.find(
          (info) =>
            info.heightLow <= _location.z && info.heightHigh > _location.z
        )?.level;
      if (_level) {
        const _floorRaw: FloorRaw = await getFloor(
          _locationExtended.building!.id,
          _level
        );
        const _floor: Floor = convertFloorRawToFloor(_floorRaw);
        const _floorExtended: FloorExtended =
          convertFloorAndBuildingToFloorExtended(
            _floor,
            _locationExtended.building!
          );
        _locationExtended.floor = _floorExtended;
      }
    };

    const _setBuilding = async () => {
      _locationExtended.building = await getBuilding(_location.buildingId);
    };

    _locationExtended.x = _location.x;
    _locationExtended.y = _location.y;
    _locationExtended.updated = new Date(_location.updated);

    // 건물이 같음
    if (
      _locationExtended.building &&
      _locationExtended.building.id === _location.buildingId
    ) {
      if (
        _locationExtended.floor &&
        _locationExtended.floor.heightLow <= _location.z &&
        _locationExtended.floor.heightHigh >= _location.z
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

    if (!_.isEqual(_locationExtended, locationExtended))
      setLocation(_locationExtended);
  };

  return [locationExtended, updateLocation];
};

export default useLocation;
