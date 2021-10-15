import { ChangeEventHandler } from "react";

export type CountBoardStatusItemContent = {
  id: string;
  value: string;
  content: string;
  count: number;
  isDanger: boolean;
};

type Props = {
  item: CountBoardStatusItemContent;
  checked: boolean;
  handleChange: ChangeEventHandler;
};

const CountBoardStatusItem: React.FC<Props> = (props) => {
  return (
    <label className="dataInput">
      <input
        type="checkbox"
        name="dataInput"
        value={props.item.value}
        checked={props.checked}
        onChange={props.handleChange}
      />
      <div>
        <span className="value-title">{props.item.content}</span>
        <p className="value">{props.item.count}</p>
      </div>
    </label>
  );
};

export default CountBoardStatusItem;
