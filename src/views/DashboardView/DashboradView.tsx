import React, { useState } from "react";
import Popout from "../../components/Popout";
import MapView from "../MapView/MapView";
import { AbnormalState } from "../../@types/dashboardAPITypes";
import { deserialize } from "typescript-json-serializer";
import { abnormal_states_json } from "../../test/jsonData";

type UserPopoutProps = {
  name: string;
  id: number;
};

/// [userPopout] : Popout을 띄우기 위한 user 정보
/// [abnormalStates] : 이상상태 목록
const DashboradView: React.FC = () => {
  const [userPopout, setUserPopout] = useState<UserPopoutProps | null>(null);
  const [abnormalStates, setAbnormalStates] = useState<AbnormalState[]>(() => {
    // TODO: API 연동
    return abnormal_states_json.map((state) =>
      deserialize<AbnormalState>(state, AbnormalState)
    );
  });

  return (
    <div>
      {/* userPopout 정보가 있을 때 현재 위치 popout 표시  */}
      {userPopout && (
        <Popout
          title={`${userPopout.name}의 현재 위치`}
          url=""
          name="location"
          closeWindow={() => {
            setUserPopout(null);
          }}
        >
          <MapView targetId={userPopout.id} />
        </Popout>
      )}
      <h1>DASHBOARD</h1>
      {/* 현재 이상상태 목록 표시 */}
      {/* TODO: 이상상태 목록으로 변경 */}
      {abnormalStates.map((state) => (
        <button
          key={state.id}
          onClick={() => {
            setUserPopout({ name: state.name, id: state.id });
          }}
        >
          {state.name}
        </button>
      ))}
    </div>
  );
};

export default DashboradView;
