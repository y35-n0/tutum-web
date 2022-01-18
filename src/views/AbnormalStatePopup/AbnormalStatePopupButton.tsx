/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { MouseEventHandler } from "react";

const style = css`
  width: 300px;
  padding: 12px;
  background-color: var(--title-color);
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
`;
type Props = {
  handleClick: MouseEventHandler;
  id: number;
};

const AbnormalStatePopupButton: React.FC<Props> = (props) => {
  return (
    <button data-id={props.id} onClick={props.handleClick} css={style}>
      {props.children}
    </button>
  );
};

export default AbnormalStatePopupButton;
