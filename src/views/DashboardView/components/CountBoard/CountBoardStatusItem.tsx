/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEventHandler } from "react";

// FIXME: add danger styling

const itemBoxStyle = css`
  height: 180px;
`;

const itemCheckboxStyle = css`
  display: none;
`;

const itemInnerDivStyle = css`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 180px;

  input[type="checkbox"]:checked + & {
    background: #0b4ca3;
    color: #fff;
  }
`;

const itemTitleStyle = css`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const itemValueStyle = css`
  font-size: 46px;
  font-weight: 600;
`;

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
    <label className="countBoardStatusItem" css={itemBoxStyle}>
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
        <span css={itemTitleStyle}>{props.item.content}</span>
        <span css={itemValueStyle}>{props.item.count}</span>
      </div>
    </label>
  );
};

export default CountBoardStatusItem;
