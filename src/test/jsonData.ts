export const buildingInfoJson = {
  name: "타임 스퀘어",
  size: { width: 340, height: 178 },
};

export const floorInfoJson = {
  floor: -1,
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

export const userPositionJson = {
  x: 200,
  y: 100,
  floor: floorInfoJson,
  building: buildingInfoJson,
  updated: "2021-09-30 19:44",
};

export const abnormalStatesJson = [
  {
    id: 1,
    datetime: "2021-06-03 18:02",
    state: { content: "상태명1", level: "주의" },
    user: {
      name: "방문객0",
      id: 0,
      title: "방문객",
      workingCondition: "방문객",
    },
    actionStatus: "조치 중",
  },
  {
    id: 2,
    datetime: "2021-06-03 18:03",
    state: { content: "상태명2", level: "위험" },
    user: {
      name: "근로자0",
      id: 1,
      title: "근로자",
      workingCondition: "업무 중",
    },
    actionStatus: "미확인",
  },
  {
    id: 0,
    datetime: "2021-06-03 18:01",
    state: { content: "상태명0", level: "경고" },
    user: {
      name: "근로자1",
      id: 2,
      title: "근로자",
      workingCondition: "휴식 중",
    },
    actionStatus: "조치중",
  },
];
