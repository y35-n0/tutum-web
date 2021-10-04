import { isConstructorDeclaration } from "typescript";
import { JsonProperty, Serializable } from "typescript-json-serializer";
import { UserInfo as User } from "./userAPITypes";

@Serializable()
export class State {
  constructor(
    @JsonProperty()
    public readonly content: string,
    @JsonProperty()
    public readonly level: string
  ) {}
}
@Serializable()
export class AbnormalState {
  constructor(
    @JsonProperty()
    public readonly id: number,
    @JsonProperty()
    public readonly datetime: Date,
    @JsonProperty()
    public readonly state: State,
    @JsonProperty()
    public readonly user: User
  ) {}
}
