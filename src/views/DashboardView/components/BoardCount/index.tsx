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
import { WORKING_CONDITION } from "../../../../constants/workingConditionContants";

// FIXME: setData
const tmpStatusItems: BoardCountStatusCardContent[] = [
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

const tmpEmployeeItems: BoardCountEmployeeLegendItemContent[] = [
  {
    id: WORKING_CONDITION.WORKING,
    count: 15,
  },
  {
    id: WORKING_CONDITION.REST,
    count: 5,
  },
  {
    id: WORKING_CONDITION.VISITOR,
    count: 5,
  },
  {
    id: WORKING_CONDITION.OFF,
    count: 2,
  },
  {
    id: WORKING_CONDITION.UNDEFINED,
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
  const [checkedEmployeeItems, setCheckedEmployeeItems] = useState<
    Set<WORKING_CONDITION>
  >(new Set());
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
    const newVal = +e.currentTarget.id;
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

  return (
    <BoardCountBox>
      <BoardCountStatusBox>
        {statusItems.map((item) => (
          <BoardCountStatusCard
            key={item.id.toString()}
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
              key={item.id.toString()}
              item={item}
              checked={checkedEmployeeItems.has(item.id)}
              handleChange={handleEmployeeChange}
            />
          ))}
        </CountBoardEmployeeLegendBox>
      </BoardCountEmployeeBox>
    </BoardCountBox>
  );
};

export default CountBoard;
