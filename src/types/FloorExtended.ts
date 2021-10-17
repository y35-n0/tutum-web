import { Building, Floor, Image } from "./mapTypes";

export default class FloorExtended {
  public readonly level: number; // 층수
  public readonly name: string; // 명칭
  public readonly img: Image; // 평면도 img src
  public readonly heightLow: number; // 층 바닥 높이
  public readonly heightHigh: number; // 층 천장 높이

  constructor(floor: Floor, building: Building) {
    this.level = floor.level;
    this.name = floor.name;
    this.img = floor.img;
    const floorHeightInfo = building.floorHeightInfo.find(
      (info) => info.level === this.level
    )!;
    this.heightLow = floorHeightInfo.heightLow;
    this.heightHigh = floorHeightInfo.heightHigh;
  }
}
