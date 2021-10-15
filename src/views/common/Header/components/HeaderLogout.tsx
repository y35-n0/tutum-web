/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AuthUser } from "../../../../@types/authTypes";
import userImg from "../../../../assets/user.svg";

type Props = {
  user: AuthUser;
};

const authBoxDivStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const imgStyle = css`
  margin-right: 10px;
`;

const userGreetingDivStyle = css`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

const authButtonStyle = css`
  background: transparent;
  font-size: 13px;
  color: #fff;
  outline: none;
  border-radius: 100px;
  border: 1px solid #fff;
  padding: 7px 17px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #0b4ca3;
    font-weight: Medium;
  }
`;

export const HeaderAuthLoggedOut: React.FC<Props> = (props) => {
  return (
    <div className="authBox" css={authBoxDivStyle}>
      <div className="userGreeting" css={userGreetingDivStyle}>
        <img src={userImg} alt="user icon" css={imgStyle} />
        <p>{props.user!.userName} 님</p>
      </div>
      <button className="authButton" css={authButtonStyle}>
        로그아웃
      </button>
    </div>
  );
};
