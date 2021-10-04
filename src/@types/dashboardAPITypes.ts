import { JsonProperty, Serializable } from "typescript-json-serializer";

@Serializable()
export class AbnormalState {
  constructor(
    @JsonProperty()
    public readonly name: string,
    @JsonProperty()
    public readonly id: number
  ) {}
}
