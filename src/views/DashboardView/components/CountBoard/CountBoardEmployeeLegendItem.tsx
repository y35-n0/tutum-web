/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ChangeEventHandler } from "react";

// FIXME: color
const itemCheckboxStyle = css`
  display: none;
`;

const itemInnerDivStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const itemColorDivStyle = css`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  margin-right: 6px;
`;

export type CountBoardEmployeeLegendItemContent = {
  id: string;
  value: string;
  content: string;
  count: number;
};

type Props = {
  item: CountBoardEmployeeLegendItemContent;
  checked: boolean;
  handleChange: ChangeEventHandler;
};

const CountBoardEmployeeLegendItem: React.FC<Props> = (props) => {
  return (
    <label className="input-graphTitle">
      <input
        type="checkbox"
        name="countBoardStatus"
        id={props.item.id}
        value={props.item.value}
        checked={props.checked}
        onChange={props.handleChange}
        css={itemCheckboxStyle}
      />
      <div css={itemInnerDivStyle}>
        <div css={itemColorDivStyle} />
        <span className="graphTitle-value">
          {props.item.content} : {props.item.count}
        </span>
      </div>
    </label>
  );
};

export default CountBoardEmployeeLegendItem;
