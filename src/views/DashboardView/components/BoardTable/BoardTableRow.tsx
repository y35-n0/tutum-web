/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MouseEventHandler } from "react";
import {
  DANGER_LEVEL_COLOR,
  DANGER_LEVEL_CONTENT,
  PROCESSING_STATUS_COLOR,
  PROCESSING_STATUS_CONTENT,
} from "../../../../constants/statusConstants";
import {
  EMPLOYEE_TYPE_CONTENT,
  WORKING_CONDITION_CONTENT,
} from "../../../../constants/workingConditionContants";
import { AbnormalState } from "../../../../types/dashboardTypes";
import { formattingDate } from "../../../common/GlobalStyle";

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

const EmployeeTypeToType = Object.values(EMPLOYEE_TYPE_CONTENT);
const ProcessingStatusToType = Object.values(PROCESSING_STATUS_CONTENT);

export interface BoardTableItem {
  id: number;
  timestamp: string;
  levelColor: string;
  levelContent: string;
  content: string;
  userId: number;
  userName: string;
  userType: typeof EmployeeTypeToType[number];
  workingCondition: string;
  processingStatusContent: typeof ProcessingStatusToType[number];
  processingStatusColor: string;
}

export const convertAbnormalStateToBoardTableItem = (
  state: AbnormalState
): BoardTableItem => ({
  id: state.id,
  timestamp: formattingDate(state.timestamp),
  levelColor: DANGER_LEVEL_COLOR[state.state.level],
  levelContent: DANGER_LEVEL_CONTENT[state.state.level],
  content: state.state.content,
  userId: state.user.id,
  userName: state.user.name,
  userType: EMPLOYEE_TYPE_CONTENT[state.user.type],
  workingCondition: WORKING_CONDITION_CONTENT[state.user.workingCondition],
  processingStatusContent: PROCESSING_STATUS_CONTENT[state.processingStatus],
  processingStatusColor: PROCESSING_STATUS_COLOR[state.processingStatus],
});

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
          color: ${props.item.levelColor};
          font-weight: 500;
        `}
      >
        {props.item.levelContent}
      </td>
      <td>{props.item.content}</td>
      <td>{props.item.userName}</td>
      <td>{props.item.userType}</td>
      <td>{props.item.workingCondition}</td>
      <td
        css={css`
          background-color: ${props.item.processingStatusColor};
        `}
      >
        {props.item.processingStatusContent}
      </td>
    </tr>
  );
};

export default BoardTableRow;
