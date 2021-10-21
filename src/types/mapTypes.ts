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
export class FloorRaw {
  constructor(
    @JsonProperty()
    public readonly buildingId: number, // 빌딩 번호
    @JsonProperty()
    public readonly level: number, // 층수
    @JsonProperty()
    public readonly name: string, // 층수명
    @JsonProperty()
    public readonly top: number, // 층수명
    @JsonProperty()
    public readonly right: number, // 층수명
    @JsonProperty()
    public readonly bottom: number, // 층수명
    @JsonProperty()
    public readonly left: number, // 층수명
    @JsonProperty()
    public readonly height: number, // 층수명
    @JsonProperty()
    public readonly width: number, // 층수명
    @JsonProperty()
    public readonly url: string // 층수명
  ) {}
}
export class Floor {
  public readonly buildingId: number; // 빌딩 번호
  public readonly level: number; // 층수
  public readonly name: string; // 층수명
  public readonly img: Image; // 평면도 img src
  constructor(raw: FloorRaw) {
    this.buildingId = raw.buildingId;
    this.level = raw.level;
    this.name = raw.name;
    this.img = {
      url: raw.url,
      size: {
        width: raw.width,
        height: raw.height,
      },
      padding: {
        top: raw.top,
        right: raw.right,
        bottom: raw.bottom,
        left: raw.left,
      },
    };
  }
}

// 층별 높이 정보
@Serializable()
export class FloorHeight {
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
    public readonly floorHeightInfo: FloorHeight[]
  ) {}
}

// 위치 정보
@Serializable()
export class LocationRaw {
  public updated: Date;
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
    public readonly recent_upload: Date // 업데이트 시간
  ) {
    this.updated = recent_upload;
  }
}
@Serializable()
export class Location {
  public readonly x: number; // x
  public readonly y: number; // y
  public readonly z: number; // z
  public readonly buildingId: number; // 빌딩 Id
  public readonly updated: Date;
  constructor(raw: LocationRaw) {
    this.x = raw.x;
    this.y = raw.y;
    this.z = raw.z;
    this.buildingId = raw.buildingId;
    this.updated = raw.recent_upload;
  }
}

export class FloorExtended {
  public level: number; // 층수
  public name: string; // 명칭
  public img: Image; // 평면도 img src
  public heightLow: number; // 층 바닥 높이
  public heightHigh: number; // 층 천장 높이

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
