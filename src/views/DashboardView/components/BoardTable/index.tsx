import { useCallback, useState } from "react";
import BoardTableBody from "./BoardTableBody";
import BoardTableBox from "./BoardTableBox";
import BoardTableHeader, {
  BoardTableHeaderItemContent,
} from "./BoardTableHeader";
import BoardTableRow, {
  BoardTableItem,
  convertAbnormalStateToBoardTableItem,
} from "./BoardTableRow";
import BoardTableTitle from "./BoardTableTitle";
import BoardTableInTable from "./BoardTableInTable";
import { formattingDate } from "../../../common/GlobalStyle";
import {
  EMPLOYEE_TYPE,
  WORKING_CONDITION,
} from "../../../../constants/workingConditionContants";
import { PROCESSING_STATUS } from "../../../../constants/statusConstants";
import PopoutView, { PopoutItem } from "../../../PopoutView";
import { useRecoilValue } from "recoil";
import { filteredAbnormalStatesSelector } from "../../../../selectors/abnormalStatesSelectors";
import { AbnormalState } from "../../../../types/dashboardTypes";

// const tmpStateItems: BoardTableItem[] = [
//   {
//     id: 1,
//     timestamp: formattingDate(new Date()),
//     level: 3,
//     content: "심박수 이상",
//     userId: 1,
//     userName: "홍길동",
//     userType: EMPLOYEE_TYPE.WORKER,
//     workingCondition: WORKING_CONDITION.WORKING,
//     processingStatus: PROCESSING_STATUS.UNCHECKED,
//   },
//   {
//     id: 2,
//     timestamp: formattingDate(new Date()),
//     level: 2,
//     content: "심박수 이상",
//     userId: 2,
//     userName: "홍길동",
//     userType: EMPLOYEE_TYPE.WORKER,
//     workingCondition: WORKING_CONDITION.WORKING,
//     processingStatus: PROCESSING_STATUS.UNCHECKED,
//   },
//   {
//     id: 3,
//     timestamp: formattingDate(new Date()),
//     level: 1,
//     content: "심박수 이상",
//     userId: 3,
//     userName: "홍길동",
//     userType: EMPLOYEE_TYPE.WORKER,
//     workingCondition: WORKING_CONDITION.WORKING,
//     processingStatus: PROCESSING_STATUS.IN_PROGRESS,
//   },
// ];

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
  const [headerItems, setHeaderItems] =
    useState<BoardTableHeaderItemContent[]>(tmpHeaderItems);
  // TODO: get filtered state selector
  // const [stateItems, setStatusItems] = useState<BoardTableItem[]>(() => {
  //   return tmpStateItems;
  // });

  const filteredAbnormalStates: AbnormalState[] = useRecoilValue(
    filteredAbnormalStatesSelector
  );

  // TODO: get popout item atom
  const [popoutItem, setPopoutItem] = useState<PopoutItem | null>(null);

  // TODO: set popout item atom
  const handleClick = useCallback((item: BoardTableItem) => {
    setPopoutItem({
      name: item.userName,
      id: item.userId,
    });
  }, []);

  const handleCloseWindow = useCallback((item: PopoutItem | null) => {
    setPopoutItem(item);
  }, []);

  return (
    <>
      <BoardTableBox>
        <BoardTableTitle />
        <BoardTableInTable>
          <BoardTableHeader items={headerItems} />
          <BoardTableBody>
            {filteredAbnormalStates.map((state) => {
              const item = convertAbnormalStateToBoardTableItem(state);
              return (
                <BoardTableRow
                  key={item.id}
                  item={item}
                  handleClick={() => {}}
                />
              );
            })}
          </BoardTableBody>
        </BoardTableInTable>
      </BoardTableBox>
    </>
  );
};
export default BoardTable;
