// 지도
// 사용자 위치 가져오기

import { DANGER_LEVEL, PROCESSING_STATUS } from "../constants/statusConstants";
import {
  EMPLOYEE_TYPE,
  WORKING_CONDITION,
} from "../constants/workingConditionContants";
import { AbnormalState } from "../types/dashboardTypes";

// Input: userID
export const locationJson = [
  {
    x: 200,
    y: 100,
    z: -100,
    buildingId: 0,
    updated: "2021-09-30 19:44",
  },
  {
    x: 200,
    y: 101,
    z: -102,
    buildingId: 0,
    updated: "2021-09-30 19:45",
  },
];

// 빌딩 정보 가져오기
// Input : buidingId
export const buildingJson = {
  id: 0,
  name: "타임 스퀘어",
  size: { width: 340, height: 178 },
  floorHeightInfo: [
    // 여러 개
    {
      level: -1,
      content: "지하 1층",
      heightLow: -300, // cm
      heightHigh: 0, // cm
    },
    // ...
  ],
};

// 층수 이미지 정보 가져오기
// Input : buildingId, floorLevel
export const floorJson = {
  buildingId: 0,
  level: -1,
  name: "지하 1층",
  img: {
    url: "http://www.timessquare.co.kr/images/map/shop_1f.png",
    size: {
      width: 858,
      height: 570,
    },
    padding: {
      top: 150,
      right: 8,
      bottom: 50,
      left: 8,
    },
  },
};

// 대시보드
// 이상상태 현황 리스트
// Input : ..
export const abnormalStatesJson: AbnormalState[] = [
  // 여러개 씩
  {
    id: 1, // 이상상태 번호
    timestamp: new Date("2021-06-03 18:02"),
    state: { content: "상태내용1", level: DANGER_LEVEL.WARNING },
    user: {
      name: "방문객0",
      id: 0, // 사용자 번호
      title: EMPLOYEE_TYPE.VISITOR,
      workingCondition: WORKING_CONDITION.VISITOR,
    },
    actionStatus: PROCESSING_STATUS.IN_PROGRESS,
  },
  {
    id: 2,
    timestamp: new Date("2021-06-03 18:03"),
    state: { content: "상태내용2", level: DANGER_LEVEL.DANGER },
    user: {
      name: "근로자0",
      id: 1,
      title: EMPLOYEE_TYPE.WORKER,
      workingCondition: WORKING_CONDITION.WORKING,
    },
    actionStatus: PROCESSING_STATUS.UNCHECKED,
  },
  {
    id: 0,
    timestamp: new Date("2021-06-03 18:01"),
    state: { content: "상태내용0", level: DANGER_LEVEL.CAUTION },
    user: {
      name: "근로자1",
      id: 2,
      title: EMPLOYEE_TYPE.WORKER,
      workingCondition: WORKING_CONDITION.REST,
    },
    actionStatus: PROCESSING_STATUS.IN_PROGRESS,
  },
];

// 데이터 통신
// 사용자 센서 값 업데이트
export const updateUserSensorDataJson = {
  id: 0,
  sensorData: [
    // 여러개 가능하도록. (1초에 데이터가 200개 이상이므로)
    // IMU
    {
      type: "imu",
      timestamp: "2021/10/10 18:32:33.323",
      values: [
        // accel_x, accel_y, accel_z, gyro_x, gyro_y, gyro_z
        0, 0, 0, 0, 0, 0,
      ],
    },
    // 비콘
    {
      type: "pass_beacon",
      timestamp: "2021/10/10 18:32:33.323",
      value: 0,
      // 사전에 정의된 비콘 번호
    },
    // 온도
    {
      type: "temperature",
      timestamp: "2021/10/10 18:32:33.502",
      value: 0, // 온도
    },
    // 산소
    {
      type: "oxygen",
      timestamp: "2021/10/10 18:32:33.702",
      value: 0, // 산소 값
    },
    // 정전
    {
      type: "capacity",
      timestamp: "2021/10/10 18:33:33.205",
      value: 0, // 정전 값
    },
  ],
};

// 사용자 상태 업데이트
export const updateUserStateJson = {
  id: 0,
  state: [
    // 여러 개
    // 온도
    {
      type: "temperature",
      timestamp: "2021/10/10 18:33:33",
      state: 0, // 온도에서 정의된 상태 번호,
      // 0: 양호(양호),  관심(양호), 주의(주의), 경계(경고), 심각(위험)
    },
    // 산소
    {
      type: "oxygen",
      timestamp: "2021/10/10 18:32:33",
      state: 0, // 산소에서 정의된 상태 번호,
      // 0: 양호(양호), 산소 부족(위험)
    },
    // 안전모 착용 상태
    {
      type: "helmet",
      timestamp: "2021/10/10 18:33:33",
      state: 0, // 정전에서 정의된 상태 번호
      // 0: 안전모 착용 중(양호), 1: 안전모 미착용 (경고?)
    },
    // 블루투스 연결 상태
    {
      type: "bluetooth",
      timestamp: "2021/10/10 18:33:33",
      state: 0, // 통신 상태에서 정의된 상태 번호
      // 0: 양호(양호), 1: 미연결(경고)
    },
    // 근무 상태
    {
      type: "working",
      timestamp: "2021/10/10 18:33:33",
      state: 0, // 근무상태에서 정의된 상태 번호
      // 0: 근무 중, 1: 휴식 중, 2: 퇴근, 3: 방문객
    },
  ],
};
