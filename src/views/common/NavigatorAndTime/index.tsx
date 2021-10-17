import { ChangeEvent, useEffect, useState } from "react";
import { formattingDate } from "../GlobalStyle";
import NavigatorAndTimeBox from "./NavigatorAndTimeBox";
import NavigatorBox from "./NavigatorBox";
import {
  HeaderNavigationItem,
  HeaderNavigationItemContent,
} from "./NavigatorCard";
import { HeaderTime } from "./TimeBox";

const tmpNavigatorItems = [
  { id: "dashboard", value: "dashboard", content: "대시보드" },
  { id: "employees", value: "employees", content: "근로자 관리" },
  { id: "customizing", value: "customizing", content: "이상상태 커스터마이징" },
];

// FIXME:
// - items
const NavigatorAndTime: React.FC = () => {
  const [checked, setChecked] = useState<string>(tmpNavigatorItems[0].id);
  const [items, setItems] =
    useState<HeaderNavigationItemContent[]>(tmpNavigatorItems);
  const [time, setTimes] = useState<string>(formattingDate(new Date()));

  const handleNavigationChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (checked !== e.currentTarget.value) {
      setChecked(e.currentTarget.value);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setTimes(formattingDate(new Date()));
    });
  }, []);

  return (
    <NavigatorAndTimeBox>
      <NavigatorBox>
        {items.map((item) => (
          <HeaderNavigationItem
            key={item.id}
            item={item}
            checked={item.id === checked}
            handleChange={handleNavigationChange}
          />
        ))}
      </NavigatorBox>
      <HeaderTime time={time} />
    </NavigatorAndTimeBox>
  );
};
export default NavigatorAndTime;
