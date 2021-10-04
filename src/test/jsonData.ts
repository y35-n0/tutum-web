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
    datetime: "2021-06-03 18:02",
    stateName: "상태명1",
    stateLevel: "주의",
    userName: "방문객",
    uesrId: 0,
  },
  {
    datetime: "2021-06-03 18:03",
    stateName: "상태명2",
    stateLevel: "경고",
    userName: "근로자",
    uesrId: 1,
  },
  {
    datetime: "2021-06-03 18:01",
    stateName: "상태명0",
    stateLevel: "위험",
    userName: "근로자",
    uesrId: 2,
  },
];
