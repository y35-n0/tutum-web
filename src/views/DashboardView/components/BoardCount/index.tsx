import { ChangeEvent, useState } from "react";
import BoardCountStatusBox from "./BoardCountStatusBox";
import BoardCountStatusCard, {
  BoardCountStatusCardContent,
} from "./BoardCountStatusCard";
import BoardCountBox from "./BoardCountBox";
import BoardCountEmployeeBox from "./BoardCountEmployeeBox";
import BoardCountEmployeeHeader from "./BoardCountEmployeeHeader";
import CountBoardEmployeeGraph from "./BoardCountEmployeeGraph";
import CountBoardEmployeeLegendBox from "./BoardCountEmployeeLegendBox";
import BoardCountEmployeeLegendItem, {
  BoardCountEmployeeLegendItemContent,
} from "./BoardCountEmployeeLegendItem";
import _ from "lodash";

// FIXME: setData
const tmpStatusItems: BoardCountStatusCardContent[] = [
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
    id: "health",
    value: "health",
    content: "건강 이상",
    count: 2,
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

const tmpEmployeeItems: BoardCountEmployeeLegendItemContent[] = [
  {
    id: "working",
    value: "working",
    content: "업무 중",
    count: 15,
  },
  {
    id: "rest",
    value: "rest",
    content: "휴식 중",
    count: 5,
  },
  {
    id: "visitor",
    value: "visitor",
    content: "방문객",
    count: 5,
  },
  {
    id: "off",
    value: "off",
    content: "퇴근",
    count: 2,
  },
  {
    id: "undefined",
    value: "undefined",
    content: "알 수 없음",
    count: 2,
  },
];

const CountBoard: React.FC = () => {
  const [statusItems, setStatusItems] =
    useState<BoardCountStatusCardContent[]>(tmpStatusItems);
  const [employeeItems, setEmployeeItems] =
    useState<BoardCountEmployeeLegendItemContent[]>(tmpEmployeeItems);
  const [checkedStatusItems, setCheckedStatusItems] = useState<Set<string>>(
    new Set()
  );
  const [checkedEmployeeItems, setCheckedEmployeeItems] = useState<Set<string>>(
    new Set()
  );
  const [employeeTotal, setEmployeeTotal] = useState<number>(22);

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.currentTarget.value;
    if (newVal === "comprehensive") {
      setCheckedEmployeeItems(new Set());
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

  const handleEmployeeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.currentTarget.value;
    if (checkedEmployeeItems.has(newVal)) {
      setCheckedEmployeeItems((prev) => {
        prev.delete(newVal);
        return new Set(prev);
      });
    } else {
      setCheckedEmployeeItems((prev) => {
        prev.add(newVal);
        return new Set(prev);
      });
    }
  };

  // FIXME: legend row
  return (
    <BoardCountBox>
      <BoardCountStatusBox>
        {statusItems.map((item) => (
          <BoardCountStatusCard
            key={item.id}
            item={item}
            checked={checkedStatusItems.has(item.value)}
            handleChange={handleStatusChange}
          />
        ))}
      </BoardCountStatusBox>
      <BoardCountEmployeeBox>
        <BoardCountEmployeeHeader count={employeeTotal} />
        <CountBoardEmployeeGraph />
        <CountBoardEmployeeLegendBox>
          {employeeItems.map((item) => (
            <BoardCountEmployeeLegendItem
              key={item.id}
              item={item}
              checked={checkedEmployeeItems.has(item.value)}
              handleChange={handleEmployeeChange}
            />
          ))}
        </CountBoardEmployeeLegendBox>
      </BoardCountEmployeeBox>
    </BoardCountBox>
  );
};

export default CountBoard;
