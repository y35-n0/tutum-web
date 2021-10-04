import React from "react";
import { AbnormalState } from "../../../@types/dashboardAPITypes";

type Props = {
  abnormalState: AbnormalState;
  handleClick: Function;
};
const AbnormalStateListItem: React.FC<Props> = ({
  abnormalState,
  handleClick,
}) => {
  return (
    <>
      <tr onClick={handleClick(abnormalState.user)}>
        <td>{abnormalState.datetime.toLocaleString()}</td>
        <td>{abnormalState.state.level}</td>
        <td>{abnormalState.state.content}</td>
        <td>{abnormalState.user.name}</td>
      </tr>
    </>
  );
};
export default AbnormalStateListItem;
