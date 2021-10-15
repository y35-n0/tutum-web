/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEventHandler } from "react";

const navigationItemRadioStyle = css`
  display: none;
`;

const navigationItemLabelStyle = css`
  display: inline-block;
  font-size: 18px;
  background: #6a7193;
  color: #fff;
  border-radius: 100px;
  padding: 10px 30px;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  margin-right: 10px;

  input[type="radio"]:checked + & {
    background-color: #eaecf5;
    color: #6a7193;
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
    <div className="navigationItem">
      <input
        className="navigationItem"
        type="radio"
        id={props.item.id}
        name="navigation"
        value={props.item.value}
        checked={props.checked}
        onChange={props.handleChange}
        css={navigationItemRadioStyle}
      />
      <label
        className="navigationItem"
        htmlFor={props.item.id}
        css={navigationItemLabelStyle}
      >
        {props.item.content}
      </label>
    </div>
  );
};
