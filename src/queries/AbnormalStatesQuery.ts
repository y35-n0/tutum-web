import _ from "lodash";
import { useEffect } from "react";
import { getAbnormalStates } from "../api/dashboardApi";
import {
  AbnormalState,
  convertAbnormalStateRawToAbnormalState,
} from "../types/dashboardTypes";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { abnormalStatesAtom } from "../atoms/abnormalStatesAtoms";

const REFETCH_INTERVAL_MS = 1000;

// Abnormal State 초기 설정
const AbnormalStatesQuery = () => {
  const [abnormalStates, setAbnormalStates] =
    useRecoilState(abnormalStatesAtom);
  const { data: abnormalStatesRaw } = useQuery(
    ["abnormalStates"],
    () => getAbnormalStates(),
    {
      refetchInterval: REFETCH_INTERVAL_MS,
      keepPreviousData: true,
      initialData: [],
    }
  );

  useEffect(() => {
    if (!abnormalStatesRaw) return;

    const _abnormalStates: AbnormalState[] = abnormalStatesRaw.map((state) =>
      convertAbnormalStateRawToAbnormalState(state)
    );

    if (!_.isEqual(_abnormalStates, abnormalStates))
      setAbnormalStates(_abnormalStates);
  }, [abnormalStatesRaw, abnormalStates, setAbnormalStates]);

  return null;
};

export default AbnormalStatesQuery;
