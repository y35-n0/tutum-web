import _ from "lodash";
import { useState } from "react";
import { getAbnormalStates } from "../api/dashboardApi";
import {
  AbnormalState,
  AbnormalStateRaw,
  convertAbnormalStateRawToAbnormalState,
} from "../types/dashboardTypes";

const useAbnormalStates = (): [AbnormalState[], () => Promise<void>] => {
  const [abnormalStates, setAbnormalStates] = useState<AbnormalState[]>([]);

  const updateAbnormalStates = async () => {
    const _abnormalStatesRaw: AbnormalStateRaw[] = await getAbnormalStates();
    const _abnormalStates: AbnormalState[] = _abnormalStatesRaw.map((state) =>
      convertAbnormalStateRawToAbnormalState(state)
    );

    if (!_.isEqual(_abnormalStates, abnormalStates))
      setAbnormalStates(_abnormalStates);
  };

  return [abnormalStates, updateAbnormalStates];
};

export default useAbnormalStates;
