import React from "react";
import { AbnormalState } from "../../../@types/dashboardAPITypes";
import AbnormalStateListItem from "./AbnormalStateListItem";

type Props = {
  abnormalStates: AbnormalState[];
  handleClick: Function;
};

const AbnormalStateList: React.FC<Props> = ({
  abnormalStates,
  handleClick,
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>발생일시</th>
            <th>위험 수준</th>
            <th>이상상태 내용</th>
            <th>이름</th>
          </tr>
        </thead>
        <tbody>
          {abnormalStates.map((abnormalState) => (
            // FIXME: key 관련 warning 발생 중
            <AbnormalStateListItem
              key={abnormalState.id}
              abnormalState={abnormalState}
              handleClick={handleClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AbnormalStateList;
