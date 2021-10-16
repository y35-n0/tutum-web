import { useState } from "react";
import { AuthUser } from "../../../@types/authTypes";
import HeaderAuthBox from "./HeaderAuthBox";
import HeaderAuthLoginContent from "./HeaderAuthLoginContent";
import HeaderAuthLogoutContent from "./HeaderAuthLogoutContent";
import HeaderBox from "./HeaderBox";

import { HeaderTitle } from "./HeaderTitle";

const tempUser = {
  userId: "admin",
  userName: "관리자",
};

// FIXME:
// - user 쿠키로 가져오기
const Header: React.FC = () => {
  const [user, setUser] = useState<AuthUser>(tempUser);

  return (
    <HeaderBox>
      <HeaderTitle title="안전 관리 시스템" />
      <HeaderAuthBox>
        {user ? (
          <HeaderAuthLogoutContent user={user} />
        ) : (
          <HeaderAuthLoginContent />
        )}
      </HeaderAuthBox>
    </HeaderBox>
  );
};
export default Header;
