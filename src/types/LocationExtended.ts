import { getBuilding, getFloor, getLocation } from "../api/mapApi";
import FloorExtended from "./FloorExtended";
import { Building } from "./mapTypes";

export interface TLocationExtended {
  _userId?: number;
  _x?: number; // x
  _y?: number; // y
  _building?: Building; // 빌딩 Id
  _floor?: FloorExtended; // 층 정보
  _updated?: Date; // 업데이트 시간
  _forTest: boolean;
}

type Props = {
  userId?: number;
  prev?: LocationExtended;
};
export default class LocationExtended {
  private _userId?: number;
  private _x?: number; // x
  private _y?: number; // y
  private _building?: Building; // 빌딩 Id
  private _floor?: FloorExtended; // 층 정보
  private _updated?: Date; // 업데이트 시간
  private _forTest: boolean = false;

  get userId(): number | undefined {
    return this._userId;
  }
  get x(): number | undefined {
    return this._x;
  }
  get y(): number | undefined {
    return this._y;
  }
  get building(): Building | undefined {
    return this._building;
  }
  get floor(): FloorExtended | undefined {
    return this._floor;
  }
  get updated(): Date | undefined {
    return this._updated;
  }

  constructor(props: Props) {
    if (!!props.prev) {
      this._userId = props.prev.userId;
      this._x = props.prev.x;
      this._y = props.prev.y;
      this._building = props.prev.building;
      this._floor = props.prev.floor;
      this._updated = props.prev.updated;
    } else if (!!props.userId) {
      this._userId = props.userId;
    } else {
      return;
    }
    this.setLocation();
  }

  public setLocation = async () => {
    const location = await getLocation(this._userId!, +this._forTest);
    this._forTest = !this._forTest;
    this._x = location.x;
    this._y = location.y;
    this._updated = new Date(location.updated);
    await this._calculate(location.z, location.buildingId);
  };

  private _calculate = async (z: number, buildingId: number) => {
    // 건물이 같음
    if (this._building && this._building.id === buildingId) {
      if (
        this._floor &&
        this._floor.heightLow <= z &&
        this._floor.heightHigh >= z
      ) {
        // 층수가 같음
        return;
      } else {
        // 층수가 다름
        await this._setFloor(z);
      }
    }
    // 건물이 다름
    else {
      await this._setBuilding(buildingId);
      await this._setFloor(z);
    }
  };

  private _setFloor = async (z: number) => {
    const level = this._building!.floorHeightInfo.find(
      (info) => info.heightLow <= z && info.heightHigh > z
    )?.level;
    if (level) {
      const floor = await getFloor(this._building!.id, level);
      this._floor = new FloorExtended(floor, this._building!);
    }
  };

  private _setBuilding = async (bulidingId: number) => {
    this._building = await getBuilding(bulidingId);
  };
}
