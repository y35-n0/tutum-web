import { ChangeEvent, useState } from "react";
import CountBoardStatusBox from "./CountBoardStatusBox";
import CountBoardStatusItem, {
  CountBoardStatusItemContent,
} from "./CountBoardStatusItem";
import CountBoardBox from "./CountBoardBox";
import CountBoardEmployeeBox from "./CountBoardEmployeeBox";
import CountBoardEmployeeHeader from "./CountBoardEmployeeHeader";
import CountBoardEmployeeGraph from "./CountBoardEmployeeGraph";
import CountBoardEmployeeLegendBox from "./CountBoardEmployeeLegendBox";
import CountBoardEmployeeLegendRow from "./CountBoardEmployeeLegendRow";
import CountBoardEmployeeLegendItem, {
  CountBoardEmployeeLegendItemContent,
} from "./CountBoardEmployeeLegendItem";

const tmpStatusItems = [
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

const tmpEmployeeItems = [
  {
    content: "업무 중",
    count: 15,
  },
  {
    content: "휴식 중",
    count: 5,
  },
  {
    content: "방문객",
    count: 5,
  },
  {
    content: "퇴근",
    count: 2,
  },
  {
    content: "알 수 없음",
    count: 2,
  },
];

const CountBoard: React.FC = () => {
  const [statusItems, setStatusItems] =
    useState<CountBoardStatusItemContent[]>(tmpStatusItems);
  const [employeeItems, setEmployeeItems] =
    useState<CountBoardEmployeeLegendItemContent[]>(tmpEmployeeItems);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [employeeTotal, setEmployeeTotal] = useState<number>(22);

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

  // FIXME: legend row
  return (
    <CountBoardBox>
      <CountBoardStatusBox>
        {statusItems.map((item) => (
          <CountBoardStatusItem
            key={item.id}
            item={item}
            checked={checkedItems.has(item.value)}
            handleChange={handleChange}
          />
        ))}
      </CountBoardStatusBox>
      <CountBoardEmployeeBox>
        <CountBoardEmployeeHeader count={employeeTotal} />
        <CountBoardEmployeeGraph />
        <CountBoardEmployeeLegendBox>
          {employeeItems.map((item) => (
            <CountBoardEmployeeLegendItem key={item.content} item={item} />
          ))}
        </CountBoardEmployeeLegendBox>
      </CountBoardEmployeeBox>
    </CountBoardBox>
  );
};

export default CountBoard;
