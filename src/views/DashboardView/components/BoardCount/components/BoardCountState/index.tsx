import { ChangeEventHandler, useState } from "react";
import BoardCountStateBox from "./BoardCountStateBox";
import BoardCountStateCard, {
  BoardCountStateCardContent,
} from "./BoardCountStateCard";

const tmpStatusItems: BoardCountStateCardContent[] = [
  {
    id: "comprehensive",
    value: "comprehensive",
    content: "종합",
    count: 6,
  },
  {
    id: "danger",
    value: "danger",
    content: "위험",
    count: 2,
  },
  {
    id: "unidentified",
    value: "unidentified",
    content: "미확인",
    count: 3,
  },
  {
    id: "communication",
    value: "communication",
    content: "통신 이상",
    count: 1,
  },
  {
    id: "health",
    value: "health",
    content: "건강 이상",
    count: 2,
  },
  {
    id: "nature",
    value: "nature",
    content: "환경 이상",
    count: 6,
  },
];

const BoardCountState: React.FC = () => {
  // TODO: get state selector
  const [stateItems, setStatusItems] = useState<BoardCountStateCardContent[]>(
    () => {
      // props.states
      return tmpStatusItems;
    }
  );

  // TODO: get filter atom
  const [checkedStatusItems, setCheckedStatusItems] = useState<Set<string>>(
    new Set()
  );

  // TODO: set filter atom
  const handleStatusChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newVal = e.currentTarget.value;
    if (newVal === "comprehensive") {
      setCheckedStatusItems(new Set());
    } else if (checkedStatusItems.has(newVal)) {
      setCheckedStatusItems((prev) => {
        prev.delete(newVal);
        return new Set(prev);
      });
    } else {
      setCheckedStatusItems((prev) => {
        prev.add(newVal);
        return new Set(prev);
      });
    }
  };

  return (
    <BoardCountStateBox>
      {stateItems.map((item) => (
        <BoardCountStateCard
          key={item.id.toString()}
          item={item}
          checked={checkedStatusItems.has(item.value)}
          handleChange={handleStatusChange}
        />
      ))}
    </BoardCountStateBox>
  );
};

export default BoardCountState;
