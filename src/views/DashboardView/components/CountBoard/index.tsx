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
import _ from "lodash";

// FIXME: setData
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
    useState<CountBoardStatusItemContent[]>(tmpStatusItems);
  const [employeeItems, setEmployeeItems] =
    useState<CountBoardEmployeeLegendItemContent[]>(tmpEmployeeItems);
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
    <CountBoardBox>
      <CountBoardStatusBox>
        {statusItems.map((item) => (
          <CountBoardStatusItem
            key={item.id}
            item={item}
            checked={checkedStatusItems.has(item.value)}
            handleChange={handleStatusChange}
          />
        ))}
      </CountBoardStatusBox>
      <CountBoardEmployeeBox>
        <CountBoardEmployeeHeader count={employeeTotal} />
        <CountBoardEmployeeGraph />
        <CountBoardEmployeeLegendBox>
          {_.chunk(employeeItems, 3).map((chunk) => (
            <CountBoardEmployeeLegendRow>
              {chunk.map((item) => (
                <CountBoardEmployeeLegendItem
                  key={item.id}
                  item={item}
                  checked={checkedEmployeeItems.has(item.value)}
                  handleChange={handleEmployeeChange}
                />
              ))}
            </CountBoardEmployeeLegendRow>
          ))}
        </CountBoardEmployeeLegendBox>
      </CountBoardEmployeeBox>
    </CountBoardBox>
  );
};

export default CountBoard;
