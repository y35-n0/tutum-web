import { ChangeEventHandler, useState } from "react";
import BoardCountEmployeeBox from "./BoardCountEmployeeBox";
import BoardCountEmployeeHeader from "./BoardCountEmployeeHeader";
import BoardCountEmployeeGraph from "./BoardCountEmployeeGraph";
import BoardCountEmployeeLegendBox from "./BoardCountEmployeeLegendBox";
import BoardCountEmployeeLegendItem, {
  BoardCountEmployeeLegendItemContent,
} from "./BoardCountEmployeeLegendItem";
import { WORKING_CONDITION } from "../../../../../../constants/employeeContants";

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

const BoardCountEmployee: React.FC = () => {
  // TODO: get employee selector
  const [employeeItems, setEmployeeItems] =
    useState<BoardCountEmployeeLegendItemContent[]>(tmpEmployeeItems);

  // TODO: get filter atom
  const [checkedEmployeeItems, setCheckedEmployeeItems] = useState<
    Set<WORKING_CONDITION>
  >(new Set());

  // TODO: get total selector
  const [employeeTotal, setEmployeeTotal] = useState<number>(22);

  // TODO: set filter atom
  const handleEmployeeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
    <BoardCountEmployeeBox>
      <BoardCountEmployeeHeader count={employeeTotal} />
      <BoardCountEmployeeGraph />
      <BoardCountEmployeeLegendBox>
        {employeeItems.map((item) => (
          <BoardCountEmployeeLegendItem
            key={item.id.toString()}
            item={item}
            checked={checkedEmployeeItems.has(item.id)}
            handleChange={handleEmployeeChange}
          />
        ))}
      </BoardCountEmployeeLegendBox>
    </BoardCountEmployeeBox>
  );
};

export default BoardCountEmployee;
