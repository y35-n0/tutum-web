import { useState } from "react";
import TableBoardTableBody from "./TableBoardTableBody";
import TableBoardBox from "./TableBoardBox";
import TableBoardTableHeader, { HeaderNames } from "./TableBoardTableHeader";
import TableBoardTableRow, { TableBoardItem } from "./TableBoardTableRow";
import TableBoardTitle from "./TableBoardTitle";
import TableBoardTableBox from "./TableBoardTableBox";

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

const tmpHeaderItems: HeaderNames[] = [
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
  const [headerItems, setHeaderItems] = useState<HeaderNames[]>(tmpHeaderItems);
  const [statusItems, setStatusItems] =
    useState<TableBoardItem[]>(tmpStatusItems);

  return (
    <TableBoardBox>
      <TableBoardTitle />
      <TableBoardTableBox>
        <TableBoardTableHeader headerNames={headerItems} />
        <TableBoardTableBody>
          {statusItems.map((item) => (
            <TableBoardTableRow key={item.id} item={item} />
          ))}
        </TableBoardTableBody>
      </TableBoardTableBox>
    </TableBoardBox>
  );
};
export default TableBoard;
