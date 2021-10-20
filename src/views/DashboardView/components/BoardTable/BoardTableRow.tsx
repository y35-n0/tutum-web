/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MouseEventHandler } from "react";
import { DANGER_LEVEL_COLOR } from "../../../common/GlobalStyle";

const trStyle = css`
  height: 40px;
  color: #555;
  text-align: center;
  font-size: 16px;
  font-weight: 300;

  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
`;

export type BoardTableItem = {
  id: number;
  timestamp: string;
  dangerLevel: string;
  content: string;
  userId: string;
  userName: string;
  userType: string;
  workingCondition: string;
  processingStatus: string;
};

type Props = {
  item: BoardTableItem;
  handleClick: MouseEventHandler;
};

const BoardTableRow: React.FC<Props> = (props) => {
  return (
    <tr className="tbody-tr" css={trStyle} onClick={props.handleClick}>
      <td>{props.item.timestamp}</td>
      <td
        css={css`
          color: ${DANGER_LEVEL_COLOR[props.item.dangerLevel]};
          font-weight: 500;
        `}
      >
        {props.item.dangerLevel}
      </td>
      <td>{props.item.content}</td>
      <td>{props.item.userName}</td>
      <td>{props.item.userType}</td>
      <td>{props.item.workingCondition}</td>
      <td
        css={css`
          ${props.item.processingStatus === "미확인"
            ? "background-color: #ffefd4"
            : ""}
        `}
      >
        {props.item.processingStatus}
      </td>
    </tr>
  );
};

export default BoardTableRow;
