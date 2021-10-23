import { MouseEventHandler, useState } from "react";
import { WORKING_CONDITION_CONTENT } from "../../constants/workingConditionContants";
import { abnormalStatesJson } from "../../test/jsonData";
import {
  AbnormalState,
  convertAbnormalStateRawToAbnormalState,
} from "../../types/dashboardTypes";
import { formattingDate } from "../common/GlobalStyle";
import PopupBox from "./PopupBox";
import PopupButton from "./PopupButton";
import PopupHeader from "./PopupHeader";
import PopupSide from "./PopupSide";
import PopupTableBody from "./PopupTableBody";
import PopupTableRow from "./PopupTableRow";

const tmpStates: AbnormalState[] = abnormalStatesJson.map((state) =>
  convertAbnormalStateRawToAbnormalState(state)
);

const PopupView: React.FC = () => {
  // TODO: get new state selector
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
