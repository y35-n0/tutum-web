const user = {
  userName: "관리자",
};

const isLogined = true;

export const Header: React.FC = () => {
  return (
    <HeaderBox>
      <NavBox>
        <Title title="실시간 건설 현장 안전 모니터링" />
        <AuthBox isLogined={isLogined} user={user} />
      </NavBox>
    </HeaderBox>
  );
};

const HeaderBox: React.FC = ({ children }) => {
  return <div className="headerBox">{children}</div>;
};

const NavBox: React.FC = ({ children }) => {
  return <div className="navBox">{children}</div>;
};

type TitleProps = {
  title: string;
};
const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="titleName">
      <img src="/assets/title.svg" />
      {title}
    </div>
  );
};

type User = {
  userName: string;
};
type AuthBoxProps = {
  isLogined: boolean;
  user?: User;
};
const AuthBox: React.FC<AuthBoxProps> = ({ isLogined, user }) => {
  return (
    <div className="authBox">
      {isLogined ? (
        <>
          <div className="user">
            <img src="/assets/user.svg" />
            <p className="userName">
              {user!.userName}
              <span className="userSpan">님 환영합니다</span>
            </p>
          </div>
          <button className="signOut">로그아웃</button>
        </>
      ) : (
        <button className="signIn">로그인</button>
      )}
    </div>
  );
};

export default Header;
