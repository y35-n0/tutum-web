/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEventHandler } from "react";
import { DANGER_LEVEL } from "../../../../../../constants/stateConstants";

const checkboxStyle = css`
  display: none;
`;

const boxStyle = css`
  width: 275px;
  height: 180px;
  display: flex;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  input[type="checkbox"]:checked + & {
    background: var(--title-color);
    color: #fff;
  }
`;

const boxDangerStyle = css`
  border: 2px solid var(--danger-color);
  color: var(--danger-color);

  input[type="checkbox"]:checked + & {
    background: var(--danger-color);
  }
`;

const titleStyle = css`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const valueStyle = css`
  font-size: 40px;
  font-weight: 600;
`;

export type BoardCountStateCardItem = {
  id: string;
  value: string;
  content: string;
  count: number;
};

type Props = {
  item: BoardCountStateCardItem;
  checked: boolean;
  handleChange: ChangeEventHandler;
};

const BoardCountStateCard: React.FC<Props> = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        name="boardCountStatus"
        id={props.item.id}
        value={props.item.value}
        checked={props.checked}
        onChange={props.handleChange}
        css={checkboxStyle}
      />
      <div
        css={
          props.item.id === DANGER_LEVEL[DANGER_LEVEL.DANGER]
            ? [boxStyle, boxDangerStyle]
            : boxStyle
        }
      >
        <span css={titleStyle}>{props.item.content}</span>
        <span css={valueStyle}>{props.item.count}</span>
      </div>
    </label>
  );
};

export default BoardCountStateCard;
