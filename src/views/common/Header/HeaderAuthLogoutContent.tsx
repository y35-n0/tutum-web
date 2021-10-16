/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AuthUser } from "../../../@types/authTypes";
import userImg from "../../../assets/user.svg";
import HeaderAuthButton from "./HeaderAuthButton";

const style = css`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 14px;
`;

type Props = {
  user: AuthUser;
};

const HeaderAuthLogoutContent: React.FC<Props> = (props) => {
  return (
    <>
      <div css={style}>
        <img src={userImg} alt="user icon" />
        <span>{props.user.userName} 님</span>
      </div>
      <HeaderAuthButton>로그아웃</HeaderAuthButton>
    </>
  );
};

export default HeaderAuthLogoutContent;
