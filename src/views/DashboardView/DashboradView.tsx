import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { deserialize } from "typescript-json-serializer";
import { AbnormalState } from "../../@types/dashboardAPITypes";
import { getAbnormalStates } from "../../api/dashboardApi";
import AbnormalStateTable from "./components/AbnormalStateTable";

// useQuery prarms
const REFETCH_INTERVAL_MS = 1000;

/// [userPopout] : Popout을 띄우기 위한 user 정보
/// [abnormalStates] : 이상상태 목록
const DashboradView: React.FC = () => {
  // TODO: to useQuery
  const { error } = useQuery("abnormalState", () => getAbnormalStates(), {
    refetchInterval: REFETCH_INTERVAL_MS,
    onSuccess: (data) => {
      const _abnormalStates = data.map((datum) =>
        deserialize<AbnormalState>(datum, AbnormalState)
      );
      if (!_.isEqual(_abnormalStates, abnormalStates))
        setAbnormalStates(_abnormalStates);
    },
  });

  const [abnormalStates, setAbnormalStates] = useState<AbnormalState[] | null>(
    null
  );

  // When error occurs or loading data
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <div>
      <h1>DASHBOARD</h1>
      {/* 현재 이상상태 목록 표시 */}
      {abnormalStates && <AbnormalStateTable abnormalStates={abnormalStates} />}
    </div>
  );
};

export default DashboradView;
