/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const authBoxStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const authButtonStyle = css`
  background: transparent;
  font-size: 14px;
  color: #fff;
  outline: none;
  border-radius: 100px;
  border: 1px solid #fff;
  padding: 7px 17px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: var(--title-color);
    font-weight: Medium;
  }
`;

export const HeaderAuthLoggedIn: React.FC = () => {
  return (
    <div className="authBox" css={authBoxStyle}>
      <button className="authButton" css={authButtonStyle}>
        로그인
      </button>
    </div>
  );
};
