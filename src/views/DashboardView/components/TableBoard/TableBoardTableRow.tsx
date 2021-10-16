/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const trStyle = css`
  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
`;

const tdStyle = css`
  font-weight: 300;
  color: #555;
  text-align: center;
  height: 48px;
  font-size: 15px;
`;

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
    <tr className="tbody-tr" css={trStyle}>
      <td className="th-one" css={tdStyle}>
        {props.item.timestamp}
      </td>
      <td className="th-two" color={props.item.dangerLevelColor} css={tdStyle}>
        {props.item.dangerLevel}
      </td>
      <td className="th-three" css={tdStyle}>
        {props.item.content}
      </td>
      <td className="th-four" css={tdStyle}>
        {props.item.userName}
      </td>
      <td className="th-five" css={tdStyle}>
        {props.item.userType}
      </td>
      <td className="th-six" css={tdStyle}>
        {props.item.workingCondition}
      </td>
      <td className="th-seven" css={tdStyle}>
        {props.item.isUndefined ? "미확인" : "조치 중"}
      </td>
    </tr>
  );
};

export default TableBoardRow;
