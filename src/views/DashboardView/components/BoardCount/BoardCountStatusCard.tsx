/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEventHandler } from "react";
import { DANGER_LEVEL_COLOR } from "../../../common/GlobalStyle";

const checkboxStyle = css`
  display: none;
`;

// FIXME: add danger styling
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
  border: 2px solid ${DANGER_LEVEL_COLOR["위험"]};
  color: ${DANGER_LEVEL_COLOR["위험"]};

  input[type="checkbox"]:checked + & {
    border: none;
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

export type BoardCountStatusCardContent = {
  id: string;
  value: string;
  content: string;
  count: number;
};

type Props = {
  item: BoardCountStatusCardContent;
  checked: boolean;
  handleChange: ChangeEventHandler;
};

const BoardCountStatusCard: React.FC<Props> = (props) => {
  console.log();
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
          props.item.content === "위험" ? [boxStyle, boxDangerStyle] : boxStyle
        }
      >
        <span css={titleStyle}>{props.item.content}</span>
        <span css={valueStyle}>{props.item.count}</span>
      </div>
    </label>
  );
};

export default BoardCountStatusCard;
