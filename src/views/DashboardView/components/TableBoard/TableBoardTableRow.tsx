export type TableBoardItem = {
  id: number;
  timestamp: string;
  dangerLevel: string;
  dangerLevelColor: string;
  content: string;
  userName: string;
  userType: string;
  workingCondition: string;
  isUndefined: boolean;
};

type Props = {
  item: TableBoardItem;
};

const TableBoardRow: React.FC<Props> = (props) => {
  return (
    <tr className="tbody-tr">
      <td className="th-one">{props.item.timestamp}</td>
      <td className="th-two" color={props.item.dangerLevelColor}>
        {props.item.dangerLevel}
      </td>
      <td className="th-three">{props.item.content}</td>
      <td className="th-four">{props.item.userName}</td>
      <td className="th-five">{props.item.userType}</td>
      <td className="th-six">{props.item.workingCondition}</td>
      <td className="th-seven">
        {props.item.isUndefined ? "미확인" : "조치 중"}
      </td>
    </tr>
  );
};

export default TableBoardRow;
