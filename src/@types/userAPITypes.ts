import { JsonProperty, Serializable } from "typescript-json-serializer";

@Serializable()
export class UserInfo {
  constructor(
    @JsonProperty()
    public readonly name: string,
    @JsonProperty()
    public readonly id: number,
    @JsonProperty()
    public readonly type: string,
    @JsonProperty()
    public readonly workingCondition: string
  ) {}
}
