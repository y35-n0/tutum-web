import { JsonProperty, Serializable } from "typescript-json-serializer";
import { DANGER_LEVEL } from "../constants/statusConstants";

@Serializable()
export class State {
  constructor(
    @JsonProperty()
    public readonly content: string,
    @JsonProperty()
    public readonly level: DANGER_LEVEL
  ) {}
}

@Serializable()
export class User {
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

@Serializable()
export class AbnormalState {
  constructor(
    @JsonProperty()
    public readonly id: number,
    @JsonProperty()
    public readonly timestamp: Date,
    @JsonProperty()
    public readonly state: State,
    @JsonProperty()
    public readonly user: User,
    @JsonProperty()
    public readonly actionStatus: string
  ) {}
}
