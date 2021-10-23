import _ from "lodash";

// 위험 단계
export enum DANGER_LEVEL {
  DANGER = 3,
  WARNING = 2,
  CAUTION = 1,
  GOOD = 0,
}

export const DANGER_LEVEL_CONTENT: { [key in DANGER_LEVEL]: string } = {
  [DANGER_LEVEL.DANGER]: "위험",
  [DANGER_LEVEL.WARNING]: "경고",
  [DANGER_LEVEL.CAUTION]: "주의",
  [DANGER_LEVEL.GOOD]: "양호",
};

export const DANGER_LEVEL_COLOR: { [key in DANGER_LEVEL]: string } = {
  [DANGER_LEVEL.DANGER]: "#FF0000",
  [DANGER_LEVEL.WARNING]: "#FF9100",
  [DANGER_LEVEL.CAUTION]: "#555",
  [DANGER_LEVEL.GOOD]: "#000000",
};

// 처리 상태
export enum PROCESSING_STATUS {
  UNCHECKED = 0,
  IN_PROGRESS = 1,
}

export const PROCESSING_STATUS_CONTENT: { [key in PROCESSING_STATUS]: string } =
  {
    [PROCESSING_STATUS.UNCHECKED]: "미확인",
    [PROCESSING_STATUS.IN_PROGRESS]: "조치 중",
  };

export const CONTENT_PROCESSING_STATUS = _.invert(PROCESSING_STATUS_CONTENT);

export const PROCESSING_STATUS_COLOR: {
  [key in PROCESSING_STATUS]: string;
} = {
  [PROCESSING_STATUS.UNCHECKED]: "#ffefd4",
  [PROCESSING_STATUS.IN_PROGRESS]: "transparent",
};

// 분류
export enum STATE_GROUP {
  COMPREHENSIVE = 0,
  DANGER = 1,
  UNCHECKED = 2,
  COMMUNICATION = 3,
  HEALTH = 4,
  NATURE = 5,
}

export const STATE_GROUP_CONTENT: { [key in STATE_GROUP]: string } = {
  [STATE_GROUP.COMPREHENSIVE]: "종합",
  [STATE_GROUP.DANGER]: "위험",
  [STATE_GROUP.UNCHECKED]: "미확인",
  [STATE_GROUP.COMMUNICATION]: "통신 이상",
  [STATE_GROUP.HEALTH]: "건강 이상",
  [STATE_GROUP.NATURE]: "환경 이상",
};
