import { useState } from "react";
import TableBoardTableBody from "./BoardTableBody";
import BoardTableBox from "./BoardTableBox";
import TableBoardTableHeader, {
  BoardTableHeaderItemContent,
} from "./BoardTableHeader";
import TableBoardTableRow, { TableBoardItem } from "./BoardTableRow";
import BoardTableTitle from "./BoardTableTitle";
import BoardTableInTable from "./BoardTableInTable";

const tmpStatusItems: TableBoardItem[] = [
  {
    id: 1,
    timestamp: Date(),
    dangerLevel: "주의",
    dangerLevelColor: "#666",
    content: "심박수 이상",
    userName: "홍길동",
    userType: "근로자",
    workingCondition: "업무 중",
    isUndefined: true,
  },
  {
    id: 2,
    timestamp: Date(),
    dangerLevel: "주의",
    dangerLevelColor: "#666",
    content: "심박수 이상",
    userName: "홍길동",
    userType: "근로자",
    workingCondition: "업무 중",
    isUndefined: true,
  },
  {
    id: 3,
    timestamp: Date(),
    dangerLevel: "주의",
    dangerLevelColor: "#666",
    content: "심박수 이상",
    userName: "홍길동",
    userType: "근로자",
    workingCondition: "업무 중",
    isUndefined: true,
  },
];

const tmpHeaderItems: BoardTableHeaderItemContent[] = [
  {
    id: "timestamp",
    name: "발생시간",
  },
  {
    id: "dangerLevel",
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

const TableBoard: React.FC = () => {
  const [headerItems, setHeaderItems] =
    useState<BoardTableHeaderItemContent[]>(tmpHeaderItems);
  const [statusItems, setStatusItems] =
    useState<TableBoardItem[]>(tmpStatusItems);

  return (
    <BoardTableBox>
      <BoardTableTitle />
      <BoardTableInTable>
        <TableBoardTableHeader items={headerItems} />
        <TableBoardTableBody>
          {statusItems.map((item) => (
            <TableBoardTableRow key={item.id} item={item} />
          ))}
        </TableBoardTableBody>
      </BoardTableInTable>
    </BoardTableBox>
  );
};
export default TableBoard;
