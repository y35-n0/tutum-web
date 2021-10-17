import { useState } from "react";
import TableBoardTableBody from "./BoardTableBody";
import BoardTableBox from "./BoardTableBox";
import TableBoardTableHeader, {
  BoardTableHeaderItemContent,
} from "./BoardTableHeader";
import TableBoardTableRow, { TableBoardItem } from "./BoardTableRow";
import BoardTableTitle from "./BoardTableTitle";
import BoardTableInTable from "./BoardTableInTable";
import { formattingDate } from "../../../common/GlobalStyle";

const tmpStatusItems: TableBoardItem[] = [
  {
    id: 1,
    timestamp: formattingDate(new Date()),
    dangerLevel: "위험",
    content: "심박수 이상",
    userName: "홍길동",
    userType: "근로자",
    workingCondition: "업무 중",
    processingStatus: "미확인",
  },
  {
    id: 2,
    timestamp: formattingDate(new Date()),
    dangerLevel: "경고",
    content: "심박수 이상",
    userName: "홍길동",
    userType: "근로자",
    workingCondition: "업무 중",
    processingStatus: "미확인",
  },
  {
    id: 3,
    timestamp: formattingDate(new Date()),
    dangerLevel: "주의",
    content: "심박수 이상",
    userName: "홍길동",
    userType: "근로자",
    workingCondition: "업무 중",
    processingStatus: "조치 중",
  },
];

const tmpHeaderItems: BoardTableHeaderItemContent[] = [
  {
    id: "timestamp",
    name: "발생시간",
    widthPercentage: 18,
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
