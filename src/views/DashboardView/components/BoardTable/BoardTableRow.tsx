/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const trStyle = css`
  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
`;

const tdStyle = css`
  height: 40px;
  color: #555;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
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

const BoardTableRow: React.FC<Props> = (props) => {
  return (
    <tr className="tbody-tr" css={trStyle}>
      <td css={tdStyle}>{props.item.timestamp}</td>
      <td color={props.item.dangerLevelColor} css={tdStyle}>
        {props.item.dangerLevel}
      </td>
      <td css={tdStyle}>{props.item.content}</td>
      <td css={tdStyle}>{props.item.userName}</td>
      <td css={tdStyle}>{props.item.userType}</td>
      <td css={tdStyle}>{props.item.workingCondition}</td>
      <td css={tdStyle}>{props.item.isUndefined ? "미확인" : "조치 중"}</td>
    </tr>
  );
};

export default BoardTableRow;
