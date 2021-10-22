import { useState } from "react";
import BoardTableBody from "./BoardTableBody";
import BoardTableBox from "./BoardTableBox";
import BoardTableHeader, {
  BoardTableHeaderItemContent,
} from "./BoardTableHeader";
import BoardTableRow, { BoardTableItem } from "./BoardTableRow";
import BoardTableTitle from "./BoardTableTitle";
import BoardTableInTable from "./BoardTableInTable";
import { formattingDate } from "../../../common/GlobalStyle";
import Popout from "../../../common/Popout";
import MapView from "../../../MapView";
import {
  EMPLOYEE_TYPE,
  WORKING_CONDITION,
} from "../../../../constants/workingConditionContants";
import { PROCESSING_STATUS } from "../../../../constants/statusConstants";

const tmpStatusItems: BoardTableItem[] = [
  {
    id: 1,
    timestamp: formattingDate(new Date()),
    level: 3,
    content: "심박수 이상",
    userId: "1",
    userName: "홍길동",
    userType: EMPLOYEE_TYPE.WORKER,
    workingCondition: WORKING_CONDITION.WORKING,
    processingStatus: PROCESSING_STATUS.UNCHECKED,
  },
  {
    id: 2,
    timestamp: formattingDate(new Date()),
    level: 2,
    content: "심박수 이상",
    userId: "2",
    userName: "홍길동",
    userType: EMPLOYEE_TYPE.WORKER,
    workingCondition: WORKING_CONDITION.WORKING,
    processingStatus: PROCESSING_STATUS.UNCHECKED,
  },
  {
    id: 3,
    timestamp: formattingDate(new Date()),
    level: 1,
    content: "심박수 이상",
    userId: "3",
    userName: "홍길동",
    userType: EMPLOYEE_TYPE.WORKER,
    workingCondition: WORKING_CONDITION.WORKING,
    processingStatus: PROCESSING_STATUS.IN_PROGRESS,
  },
];

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

type PopoutItem = {
  name: string;
  id: string;
};

const TableBoard: React.FC = () => {
  const [headerItems, setHeaderItems] =
    useState<BoardTableHeaderItemContent[]>(tmpHeaderItems);
  const [statusItems, setStatusItems] =
    useState<BoardTableItem[]>(tmpStatusItems);

  const [popoutItem, setPopoutItem] = useState<PopoutItem | null>(null);
  const handleClick = (item: BoardTableItem) => {
    setPopoutItem({
      name: item.userName,
      id: item.userId,
    });
  };

  return (
    <>
      {popoutItem && (
        <Popout
          title={`${popoutItem.name}의 현재 위치`}
          url=""
          name="location"
          closeWindow={() => {
            setPopoutItem(null);
          }}
        >
          <MapView userId={popoutItem.id} />
        </Popout>
      )}
      <BoardTableBox>
        <BoardTableTitle />
        <BoardTableInTable>
          <BoardTableHeader items={headerItems} />
          <BoardTableBody>
            {statusItems.map((item) => (
              <BoardTableRow
                key={item.id}
                item={item}
                handleClick={() => {
                  handleClick(item);
                }}
              />
            ))}
          </BoardTableBody>
        </BoardTableInTable>
      </BoardTableBox>
    </>
  );
};
export default TableBoard;
