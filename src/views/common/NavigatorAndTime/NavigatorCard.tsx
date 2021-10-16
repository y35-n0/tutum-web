/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEventHandler } from "react";

const radioStyle = css`
  display: none;
`;

const labelStyle = css`
  display: inline-block;
  background: #eaecf5;
  color: #6a7193;
  border-radius: 100px;
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  margin-right: 10px;

  input[type="radio"]:checked + & {
    background: #6a7193;
    color: #fff;
  }
`;

export type HeaderNavigationItemContent = {
  id: string;
  value: string;
  content: string;
};

type Props = {
  item: HeaderNavigationItemContent;
  checked: boolean;
  handleChange: ChangeEventHandler;
};

export const HeaderNavigationItem: React.FC<Props> = (props) => {
  return (
    <label>
      <input
        type="radio"
        id={props.item.id}
        name="navigation"
        value={props.item.value}
        checked={props.checked}
        onChange={props.handleChange}
        css={radioStyle}
      />
      <span css={labelStyle}>{props.item.content}</span>
    </label>
  );
};
