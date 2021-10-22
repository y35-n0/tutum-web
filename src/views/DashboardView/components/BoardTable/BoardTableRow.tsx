/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MouseEventHandler } from "react";
import {
  DANGER_LEVEL,
  DANGER_LEVEL_COLOR,
  DANGER_LEVEL_CONTENT,
  PROCESSING_STATUS,
  PROCESSING_STATUS_COLOR,
  PROCESSING_STATUS_CONTENT,
} from "../../../../constants/statusConstants";
import {
  EMPLOYEE_TYPE,
  EMPLOYEE_TYPE_CONTENT,
  WORKING_CONDITION,
  WORKING_CONDITION_CONTENT,
} from "../../../../constants/workingConditionContants";

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
  level: DANGER_LEVEL;
  content: string;
  userId: string;
  userName: string;
  userType: EMPLOYEE_TYPE;
  workingCondition: WORKING_CONDITION;
  processingStatus: PROCESSING_STATUS;
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
          color: ${DANGER_LEVEL_COLOR[props.item.level]};
          font-weight: 500;
        `}
      >
        {DANGER_LEVEL_CONTENT[props.item.level]}
      </td>
      <td>{props.item.content}</td>
      <td>{props.item.userName}</td>
      <td>{EMPLOYEE_TYPE_CONTENT[props.item.userType]}</td>
      <td>{WORKING_CONDITION_CONTENT[props.item.workingCondition]}</td>
      <td
        css={css`
          background-color: ${PROCESSING_STATUS_COLOR[
            props.item.processingStatus
          ]};
        `}
      >
        {PROCESSING_STATUS_CONTENT[props.item.processingStatus]}
      </td>
    </tr>
  );
};

export default BoardTableRow;
