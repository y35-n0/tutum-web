/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEventHandler } from "react";

const checkboxStyle = css`
  display: none;
`;

const innerDivStyle = css`
  display: flex;
  margin-right: 20px;
  align-items: center;
  cursor: pointer;
  color: #000;
`;

// TODO: color
const colorDivStyle = css`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  margin-right: 6px;
  background: #000;
`;

export type BoardCountEmployeeLegendItemContent = {
  id: string;
  value: string;
  content: string;
  count: number;
};

type Props = {
  item: BoardCountEmployeeLegendItemContent;
  checked: boolean;
  handleChange: ChangeEventHandler;
};

const BoardCountEmployeeLegendItem: React.FC<Props> = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        name="boardCountEmployee"
        id={props.item.id}
        value={props.item.value}
        checked={props.checked}
        onChange={props.handleChange}
        css={checkboxStyle}
      />
      <div css={innerDivStyle}>
        <div css={colorDivStyle} />
        <span className="graphTitle-value">
          {props.item.content} : {props.item.count}
        </span>
      </div>
    </label>
  );
};

export default BoardCountEmployeeLegendItem;
