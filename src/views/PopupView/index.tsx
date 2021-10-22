import { MouseEventHandler, useState } from "react";
import {
  DANGER_LEVEL,
  PROCESSING_STATUS,
} from "../../constants/statusConstants";
import {
  EMPLOYEE_TYPE,
  WORKING_CONDITION,
  WORKING_CONDITION_CONTENT,
} from "../../constants/workingConditionContants";
import { AbnormalState } from "../../types/dashboardTypes";
import { formattingDate } from "../common/GlobalStyle";
import PopupBox from "./PopupBox";
import PopupButton from "./PopupButton";
import PopupHeader from "./PopupHeader";
import PopupSide from "./PopupSide";
import PopupTableBody from "./PopupTableBody";
import PopupTableRow from "./PopupTableRow";

const tmpStates: AbnormalState[] = [
  {
    id: 0,
    timestamp: new Date(),
    state: {
      content: "심박수 이상",
      level: DANGER_LEVEL.DANGER,
    },
    user: {
      id: 0,
      name: "홍길동",
      title: EMPLOYEE_TYPE.WORKER,
      workingCondition: WORKING_CONDITION.WORKING,
    },
    actionStatus: PROCESSING_STATUS.UNCHECKED,
  },
  {
    id: 0,
    timestamp: new Date(),
    state: {
      content: "심박수 이상",
      level: DANGER_LEVEL.DANGER,
    },
    user: {
      id: 0,
      name: "홍길동",
      title: EMPLOYEE_TYPE.WORKER,
      workingCondition: WORKING_CONDITION.WORKING,
    },
    actionStatus: PROCESSING_STATUS.UNCHECKED,
  },
];

// TODO: state to props
const PopupView: React.FC = (props) => {
  const [states, setStates] = useState<AbnormalState[]>(tmpStates);

  // TODO: 확인 및 popup 닫기
  const handleClick: MouseEventHandler = (e) => {};
  return (
    <PopupSide>
      {states.map((state) => (
        <PopupBox>
          <PopupHeader level={state.state.level} />
          <PopupTableBody>
            <PopupTableRow
              content="발생시간"
              value={formattingDate(state.timestamp)}
            />
            <PopupTableRow content="내용" value={state.state.content} />
            <PopupTableRow content="이름" value={state.user.name} />
            <PopupTableRow
              content="근무 상태"
              value={WORKING_CONDITION_CONTENT[state.user.workingCondition]}
            />
          </PopupTableBody>
          <PopupButton handleClick={handleClick}> 확인</PopupButton>
        </PopupBox>
      ))}
    </PopupSide>
  );
};

export default PopupView;
