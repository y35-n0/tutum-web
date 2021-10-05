import React from "react";
import AbnormalStateTable from "./components/AbnormalStateTable";

/// [userPopout] : Popout을 띄우기 위한 user 정보
/// [abnormalStates] : 이상상태 목록
const DashboradView: React.FC = () => {
  return (
    <div>
      <h1>DASHBOARD</h1>
      {/* 현재 이상상태 목록 표시 */}
      <AbnormalStateTable />
    </div>
  );
};

export default DashboradView;
