import { ChangeEvent, useState } from "react";
import CountBoardStatusBox from "./CountBoardStatusBox";
import CountBoardStatusItem, {
  CountBoardStatusItemContent,
} from "./CountBoardStatusItem";
import CountBoardBox from "./CountBoardBox";

const tmpItems = [
  {
    id: "comprehensive",
    value: "comprehensive",
    content: "종합",
    count: 6,
    isDanger: false,
  },
  {
    id: "danger",
    value: "danger",
    content: "위험",
    count: 2,
    isDanger: true,
  },
  {
    id: "unidentified",
    value: "unidentified",
    content: "미확인",
    count: 3,
    isDanger: false,
  },
  {
    id: "communication",
    value: "communication",
    content: "통신 이상",
    count: 1,
    isDanger: false,
  },
  {
    id: "nature",
    value: "nature",
    content: "환경 이상",
    count: 6,
    isDanger: false,
  },
];

const CountBoard: React.FC = () => {
  const [items, setItems] = useState<CountBoardStatusItemContent[]>(tmpItems);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.currentTarget.value;
    if (newVal === "comprehensive") {
      setCheckedItems(new Set());
    } else if (checkedItems.has(newVal)) {
      setCheckedItems((prev) => {
        prev.delete(newVal);
        return new Set(prev);
      });
    } else {
      setCheckedItems((prev) => {
        prev.add(newVal);
        return new Set(prev);
      });
    }
  };

  return (
    <CountBoardBox>
      <CountBoardStatusBox>
        {items.map((item) => (
          <CountBoardStatusItem
            key={item.id}
            item={item}
            checked={checkedItems.has(item.value)}
            handleChange={handleChange}
          />
        ))}
      </CountBoardStatusBox>
    </CountBoardBox>
  );
};

export default CountBoard;
