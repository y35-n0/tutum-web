import { useCallback } from "react";
import BoardTableBody from "./BoardTableBody";
import BoardTableBox from "./BoardTableBox";
import BoardTableHeader, {
  BoardTableHeaderItemContent,
} from "./BoardTableHeader";
import BoardTableRow, { BoardTableItem } from "./BoardTableRow";
import BoardTableTitle from "./BoardTableTitle";
import BoardTableInTable from "./BoardTableInTable";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredBoardTableItemsSelector } from "../../../../selectors/abnormalStatesSelectors";
import { MapPopoutStateAtom } from "../../../../atoms/mapAtoms";

const tmpHeaderItems: BoardTableHeaderItemContent[] = [
  {
    id: "timestamp",
    name: "발생시간",
    widthPercentage: 18,
  },
  {
    id: "level",
    name: "위험수준",
  },
  {
    id: "content",
    name: "이상상태 내용",
  },
  {
    id: "userName",
    name: "이름",
  },
  {
    id: "userType",
    name: "분류",
  },
  {
    id: "workingCondition",
    name: "근무 상태",
  },
  {
    id: "isProcessing",
    name: "처리 상태",
  },
];

const BoardTable: React.FC = () => {
  const headerItems = tmpHeaderItems;

  const filteredBoardTableItems: BoardTableItem[] = useRecoilValue(
    filteredBoardTableItemsSelector
  );

  const setMapPopoutState = useSetRecoilState(MapPopoutStateAtom);

  // TODO: set popout item atom
  const handleClick = useCallback((item: BoardTableItem) => {
    setMapPopoutState({
      name: item.userName,
      id: item.userId,
    });
  }, []);

  return (
    <BoardTableBox>
      <BoardTableTitle />
      <BoardTableInTable>
        <BoardTableHeader items={headerItems} />
        <BoardTableBody>
          {filteredBoardTableItems.map((item) => (
            <BoardTableRow
              key={item.id}
              item={item}
              handleClick={() => handleClick(item)}
            />
          ))}
        </BoardTableBody>
      </BoardTableInTable>
    </BoardTableBox>
  );
};
export default BoardTable;
