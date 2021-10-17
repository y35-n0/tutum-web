import { JsonProperty, Serializable } from "typescript-json-serializer";

// 가로세로 크기
@Serializable()
export class Size {
  constructor(
    @JsonProperty()
    public readonly width: number,
    @JsonProperty()
    public readonly height: number
  ) {}
}

// 상하좌우 크기
@Serializable()
export class Box {
  constructor(
    @JsonProperty()
    public readonly top: number,
    @JsonProperty()
    public readonly right: number,
    @JsonProperty()
    public readonly bottom: number,
    @JsonProperty()
    public readonly left: number
  ) {}
}

@Serializable()
export class Image {
  constructor(
    @JsonProperty()
    public readonly url: string,
    @JsonProperty()
    public readonly size: Size,
    @JsonProperty()
    public readonly padding: Box
  ) {}
}

// 층별 정보
@Serializable()
export class Floor {
  constructor(
    @JsonProperty()
    public readonly floor: number, // 층수
    @JsonProperty()
    public readonly img: Image // 평면도 img src
  ) {}
}

// 층별 높이 정보
@Serializable()
export class FloorHeigh {
  constructor(
    @JsonProperty()
    public readonly level: number, // 층수
    @JsonProperty()
    public readonly content: string, // 명칭
    @JsonProperty()
    public readonly heightLow: number, // 층 바닥 높이
    @JsonProperty()
    public readonly heightHigh: number // 층 천장 높이
  ) {}
}

// 건물 정보
@Serializable()
export class Building {
  constructor(
    @JsonProperty()
    public readonly id: number,
    @JsonProperty()
    public readonly name: string,
    @JsonProperty()
    public readonly size: Size,
    @JsonProperty()
    public readonly floorHeightInfo: FloorHeigh[]
  ) {}
}

// 위치 정보
@Serializable()
export class Location {
  constructor(
    @JsonProperty()
    public readonly x: number, // x
    @JsonProperty()
    public readonly y: number, // y
    @JsonProperty()
    public readonly z: number, // z
    @JsonProperty()
    public readonly buildingId: number, // 빌딩 Id
    @JsonProperty()
    public readonly updated: Date, // 업데이트 시간

    public floor?: Floor, // 층수 정보
    public building?: Building // 빌딩 정보
  ) {}
}
