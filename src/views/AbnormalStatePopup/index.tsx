import { useRecoilValue } from "recoil";
import { WORKING_CONDITION_CONTENT } from "../../constants/employeeContants";
import { newAbnormalStatesSelector } from "../../selectors/stateSelectors";
import { AbnormalState } from "../../types/dashboardTypes";
import { formattingDate } from "../common/GlobalStyle";
import AbnormalStatePopupItemBox from "./AbnormalStatePopupItemBox";
import AbnormalStatePopupButton from "./AbnormalStatePopupButton";
import AbnormalStatePopupHeader from "./AbnormalStatePopupHeader";
import AbnormalStatePopupBox from "./AbnormalStatePopupBox";
import AbnormalStatePopupTableBody from "./AbnormalStatePopupTableBody";
import AbnormalStatePopupTableRow from "./AbnormalStatePopupTableRow";
import { updateAbnormalStateProcessingStatus } from "../../api/dashboardApi";
import {
  PROCESSING_STATUS,
  PROCESSING_STATUS_CONTENT,
} from "../../constants/stateConstants";

const AbnormalStatePopup: React.FC = () => {
  const newAbnormalStates: AbnormalState[] = useRecoilValue(
    newAbnormalStatesSelector
  );

  const checkedAbnormalStateProcessingStatus = async (id: number) => {
    updateAbnormalStateProcessingStatus({
      id: id,
      processingStatus:
        PROCESSING_STATUS_CONTENT[PROCESSING_STATUS.IN_PROGRESS],
    });
  };

  return (
    <AbnormalStatePopupBox>
      {newAbnormalStates.map((state) => {
        return (
          <AbnormalStatePopupItemBox>
            <AbnormalStatePopupHeader level={state.state.level} />
            <AbnormalStatePopupTableBody>
              <AbnormalStatePopupTableRow
                content="발생시간"
                value={formattingDate(state.timestamp)}
              />
              <AbnormalStatePopupTableRow
                content="내용"
                value={state.state.content}
              />
              <AbnormalStatePopupTableRow
                content="이름"
                value={state.user.name}
              />
              <AbnormalStatePopupTableRow
                content="근무 상태"
                value={WORKING_CONDITION_CONTENT[state.user.workingCondition]}
              />
            </AbnormalStatePopupTableBody>
            <AbnormalStatePopupButton
              handleClick={(e) => {
                checkedAbnormalStateProcessingStatus(state.id);
              }}
            >
              확인
            </AbnormalStatePopupButton>
          </AbnormalStatePopupItemBox>
        );
      })}
    </AbnormalStatePopupBox>
  );
};

export default AbnormalStatePopup;
