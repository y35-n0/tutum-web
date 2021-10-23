import {
  DANGER_LEVEL,
  PROCESSING_STATUS_CONTENT,
} from "../constants/statusConstants";
import {
  EMPLOYEE_TYPE_CONTENT,
  WORKING_CONDITION,
} from "../constants/workingConditionContants";

export interface State {
  content: string;
  level: DANGER_LEVEL;
}

const titleToType = Object.values(EMPLOYEE_TYPE_CONTENT);
export interface User {
  name: string;
  id: number;
  title: typeof titleToType[number];
  workingCondition: WORKING_CONDITION;
}

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
  actionStatus: typeof actionStatusToType[number];
}

const actionStatusToType = Object.values(PROCESSING_STATUS_CONTENT);
export interface AbnormalState {
  id: number;
  timestamp: Date;
  state: State;
  user: User;
  actionStatus: typeof actionStatusToType[number];
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
      title: raw.user.title,
      workingCondition: raw.user.workingCondtition,
    },
    actionStatus: raw.actionStatus,
  };
};
