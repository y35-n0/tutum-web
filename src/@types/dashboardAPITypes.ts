import { JsonProperty, Serializable } from "typescript-json-serializer";

@Serializable()
export class AbnormalState {
  constructor(
    @JsonProperty()
    public readonly datetime: Date,
    @JsonProperty()
    public readonly stateName: string,
    @JsonProperty()
    public readonly stateLevel: string,
    @JsonProperty()
    public readonly userName: string,
    @JsonProperty()
    public readonly userId: number
  ) {}
}
