export const building_info_json = {
  name: "타임 스퀘어",
  size: { width: 340, height: 178 },
};

export const floor_info_json = {
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

export const user_position_json = {
  x: 200,
  y: 100,
  floor: floor_info_json,
  building: building_info_json,
  updated: "2021-09-30 19:44",
};

export const abnormal_states_json = [
  {
    name: "김예슬",
    id: 1,
  },
  {
    name: "양진우",
    id: 2,
  },
  {
    name: "유한길",
    id: 3,
  },
];
