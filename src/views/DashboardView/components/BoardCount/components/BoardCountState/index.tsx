import { ChangeEventHandler, useState } from "react";
import { useRecoilValue } from "recoil";
import { STATE_GROUP } from "../../../../../../constants/stateConstants";
import { countGroupbyStateTypeItemsSelector } from "../../../../../../selectors/stateSelectors";
import BoardCountStateBox from "./BoardCountStateBox";
import BoardCountStateCard, {
  BoardCountStateCardItem,
} from "./BoardCountStateCard";

const BoardCountState: React.FC = () => {
  const countGroupbyStateTypeItems: BoardCountStateCardItem[] = useRecoilValue(
    countGroupbyStateTypeItemsSelector
  );

  // TODO: get filter atom
  const [checkedStatusItems, setCheckedStatusItems] = useState<Set<string>>(
    new Set()
  );

  // TODO: set filter atom
  const handleStatusChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newVal = e.currentTarget.value;
    if (newVal === STATE_GROUP[STATE_GROUP.COMPREHENSIVE]) {
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

  // console.log(countGroupbyStateTypeItems);
  return (
    <BoardCountStateBox>
      {countGroupbyStateTypeItems.map((item) => (
        <BoardCountStateCard
          key={item.id}
          item={item}
          checked={checkedStatusItems.has(item.value)}
          handleChange={handleStatusChange}
        />
      ))}
    </BoardCountStateBox>
  );
};

export default BoardCountState;
