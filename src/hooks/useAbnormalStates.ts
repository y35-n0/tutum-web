import _ from "lodash";
import { useCallback, useState } from "react";
import { getAbnormalStates } from "../api/dashboardApi";
import {
  AbnormalState,
  AbnormalStateRaw,
  convertAbnormalStateRawToAbnormalState,
} from "../types/dashboardTypes";

// TODO: 전역에서 쓸수 있도록 고치기
const useAbnormalStates = (): [AbnormalState[], () => Promise<void>] => {
  const [abnormalStates, setAbnormalStates] = useState<AbnormalState[]>([]);

  const updateAbnormalStates = useCallback(async () => {
    const _abnormalStatesRaw: AbnormalStateRaw[] = await getAbnormalStates();
    const _abnormalStates: AbnormalState[] = _abnormalStatesRaw.map((state) =>
      convertAbnormalStateRawToAbnormalState(state)
    );

    if (!_.isEqual(_abnormalStates, abnormalStates))
      setAbnormalStates(_abnormalStates);
  }, [abnormalStates]);

  return [abnormalStates, updateAbnormalStates];
};

export default useAbnormalStates;
