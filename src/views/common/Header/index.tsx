import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { AuthUser } from "../../../@types/authTypes";
import { HeaderBottom } from "./components/HeaderBottom";
import { HeaderBox } from "./components/HeaderBox";
import { HeaderAuthLoggedIn } from "./components/HeaderLogin";
import { HeaderAuthLoggedOut } from "./components/HeaderLogout";
import { HeaderNavigation } from "./components/HeaderNavigation";
import {
  HeaderNavigationItem,
  HeaderNavigationItemContent,
} from "./components/HeaderNavigationItem";
import { HeaderTime } from "./components/HeaderTime";
import { HeaderTitle } from "./components/HeaderTitle";
import { HeaderTop } from "./components/HeaderTop";

const tempItems = [
  { id: "dashboard", value: "dashboard", content: "대시보드" },
  {
    id: "management_employees",
    value: "management_employees",
    content: "근로자 관리",
  },
  { id: "customizing", value: "customizing", content: "이상상태 커스터마이징" },
];

// FIXME:
// - user 쿠키로 가져오기
// - items
// - time format -> moment
const Header: React.FC = () => {
  const [naviagationChecked, setNavigationChecked] = useState<string>("");
  const [user, setUser] = useState<AuthUser>();
  const [items, setItems] = useState<HeaderNavigationItemContent[]>(tempItems);
  const [time, setTimes] = useState<string>(Date());

  const handleNavigationChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (naviagationChecked !== e.currentTarget.value) {
      setNavigationChecked(e.currentTarget.value);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setTimes(Date());
    });
  }, []);

  return (
    <HeaderBox>
      <HeaderTop>
        <HeaderTitle title="실시간 안전 관리 모니터링 시스템" />
        {user ? <HeaderAuthLoggedOut user={user} /> : <HeaderAuthLoggedIn />}
      </HeaderTop>
      <HeaderBottom>
        <HeaderNavigation>
          {items.map((item) => (
            <HeaderNavigationItem
              item={item}
              checked={item.id === naviagationChecked}
              handleChange={handleNavigationChange}
            />
          ))}
        </HeaderNavigation>
        <HeaderTime time={time} />
      </HeaderBottom>
    </HeaderBox>
  );
};
export default Header;