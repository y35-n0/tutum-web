import { AuthUser } from "../../../../@types/authTypes";
import userImg from "../../../../assets/user.svg";

type Props = {
  user: AuthUser;
};

export const HeaderAuthLoggedOut: React.FC<Props> = ({ user }) => {
  return (
    <div className="authBox">
      <div className="user">
        <img src={userImg} alt="user icon" />
        <p className="userName">
          {user!.userName}
          <span className="userSpan">님 환영합니다</span>
        </p>
      </div>
      <button className="signOut">로그아웃</button>
    </div>
  );
};
