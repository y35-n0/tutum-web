/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const style = css`
  background: transparent;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 100px;
  cursor: pointer;
  padding: 5px 15px;

  &:hover {
    background-color: #fff;
    color: var(--title-color);
    font-weight: Medium;
  }
`;

export const HeaderAuthButton: React.FC = (props) => {
  return <button css={style}>{props.children}</button>;
};

export default HeaderAuthButton;
