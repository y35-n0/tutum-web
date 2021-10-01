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

// 건물 정보
@Serializable()
export class Building {
  constructor(
    @JsonProperty()
    public readonly name: string,
    @JsonProperty()
    public readonly size: Size
  ) {}
}

// 위치 정보
@Serializable()
export class Position {
  constructor(
    @JsonProperty()
    public readonly x: number, // x
    @JsonProperty()
    public readonly y: number, // y
    @JsonProperty()
    public readonly floor: Floor, // 층수
    @JsonProperty()
    public readonly building: Building, // 건물명
    @JsonProperty()
    public readonly updated: Date // 업데이트 시간
  ) {}
}
