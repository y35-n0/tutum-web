import {
  CONTENT_PROCESSING_STATUS,
  DANGER_LEVEL,
  PROCESSING_STATUS,
  PROCESSING_STATUS_CONTENT,
} from "../constants/stateConstants";
import {
  CONTENT_EMPLOYEE_TYPE,
  EMPLOYEE_TYPE,
  EMPLOYEE_TYPE_CONTENT,
  WORKING_CONDITION,
} from "../constants/employeeContants";

export interface State {
  content: string;
  level: DANGER_LEVEL;
}

const titleToType = Object.values(EMPLOYEE_TYPE_CONTENT);
export interface User {
  name: string;
  id: number;
  type: EMPLOYEE_TYPE;
  workingCondition: WORKING_CONDITION;
}

const processingStatusToType = Object.values(PROCESSING_STATUS_CONTENT);
export interface AbnormalStateRaw {
  id: number;
  timestamp: string;
  state: State;
  user: {
    name: string;
    id: number;
    title: typeof titleToType[number];
    workingCondtition: number;
  };
  actionStatus: typeof processingStatusToType[number];
}

export interface AbnormalState {
  id: number;
  timestamp: Date;
  state: State;
  user: User;
  processingStatus: PROCESSING_STATUS;
}

export const convertAbnormalStateRawToAbnormalState = (
  raw: AbnormalStateRaw
): AbnormalState => {
  return {
    id: raw.id,
    timestamp: new Date(raw.timestamp),
    state: raw.state,
    user: {
      id: raw.user.id,
      name: raw.user.name,
      type: +CONTENT_EMPLOYEE_TYPE[raw.user.title],
      workingCondition: raw.user.workingCondtition,
    },
    processingStatus: +CONTENT_PROCESSING_STATUS[raw.actionStatus],
  };
};

export interface AbnormalStatesProcessingStatus {
  id: number;
  processingStatus: typeof processingStatusToType[number];
}
