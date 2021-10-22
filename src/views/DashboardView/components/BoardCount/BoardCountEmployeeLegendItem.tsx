/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEventHandler } from "react";
import {
  WORKING_CONDITION,
  WORKING_CONDITION_COLOR,
  WORKING_CONDITION_CONTENT,
} from "../../../../constants/workingConditionContants";

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
  id: WORKING_CONDITION;
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
        id={props.item.id.toString()}
        value={props.item.id}
        checked={props.checked}
        onChange={props.handleChange}
        css={checkboxStyle}
      />
      <div
        css={css`
          ${innerDivStyle} color: ${WORKING_CONDITION_COLOR[props.item.id]};
        `}
      >
        <div css={colorDivStyle} />
        <span>
          {WORKING_CONDITION_CONTENT[props.item.id]} : {props.item.count}
        </span>
      </div>
    </label>
  );
};

export default BoardCountEmployeeLegendItem;
