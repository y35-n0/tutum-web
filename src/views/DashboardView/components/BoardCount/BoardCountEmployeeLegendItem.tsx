/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEventHandler } from "react";
import { EMPLOYEE_TYPE_COLOR } from "../../../common/GlobalStyle";

const checkboxStyle = css`
  display: none;
`;

const innerDivStyle = css`
  display: flex;
  margin-right: 20px;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
`;

const colorDivStyle = css`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  margin-right: 6px;
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
      <div
        css={css`
          ${innerDivStyle} color: ${EMPLOYEE_TYPE_COLOR[props.item.id]};
        `}
      >
        <div css={colorDivStyle} />
        <span>
          {props.item.content} : {props.item.count}
        </span>
      </div>
    </label>
  );
};

export default BoardCountEmployeeLegendItem;
