import { JsonProperty, Serializable } from "typescript-json-serializer";

@Serializable()
export class Position {
  constructor(
    @JsonProperty()
    public readonly x: number, // x
    @JsonProperty()
    public readonly y: number, // y
    @JsonProperty()
    public readonly floor: number, // 층수
    @JsonProperty()
    public readonly updated: string // 업데이트 시간
  ) {}
}

// 층별 정보
@Serializable()
export class Floor {
  constructor(
    @JsonProperty()
    public readonly floor: number, // 층수
    @JsonProperty()
    public readonly name: string, // 명칭
    @JsonProperty()
    public readonly img_src: string // 평면도 img src
  ) {}
}
