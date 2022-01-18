// 가로세로 크기
interface Size {
  width: number;
  height: number;
}

// 상하좌우 크기
interface Box {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface Image {
  url: string;
  size: Size;
  padding: Box;
}

// 층별 정보
export interface FloorRaw {
  id: number; // 빌딩 번호
  level: number; // 층수
  name: string; // 층수명
  top: number; // 층수명
  right: number; // 층수명
  bottom: number; // 층수명
  left: number; // 층수명
  height: number; // 층수명
  width: number; // 층수명
  url: string; // 층수명
}
export interface Floor {
  buildingId: number; // 빌딩 번호
  level: number; // 층수
  name: string; // 층수명
  img: Image; // 평면도 img src
}

export const convertFloorRawToFloor = (raw: FloorRaw): Floor => {
  return {
    buildingId: raw.id,
    level: raw.level,
    name: raw.name,
    img: {
      url: raw.url,
      size: {
        width: raw.width,
        height: raw.height,
      },
      padding: {
        top: raw.top,
        right: raw.right,
        bottom: raw.bottom,
        left: raw.left,
      },
    },
  };
};

// 층별 높이 정보
export interface FloorHeight {
  level: number; // 층수
  content: string; // 명칭
  heightLow: number; // 층 바닥 높이
  heightHigh: number; // 층 천장 높이
}

// 건물 정보
export interface Building {
  id: number;
  name: string;
  size: Size;
  floorHeightInfo: FloorHeight[];
}

// 위치 정보
export interface LocationRaw {
  x: number; // x
  y: number; // y
  z: number; // z
  buildingId: number; // 빌딩 Id
  recent_upload: string; // 업데이트 시간
}
export interface Location {
  x: number; // x
  y: number; // y
  z: number; // z
  buildingId: number; // 빌딩 Id
  updated: Date;
}

export const convertLocationRawToLocation = (raw: LocationRaw): Location => {
  return {
    x: raw.x,
    y: raw.y,
    z: raw.z,
    buildingId: raw.buildingId,
    updated: new Date(raw.recent_upload),
  };
};

export interface FloorExtended {
  level: number; // 층수
  name: string; // 명칭
  img: Image; // 평면도 img src
  heightLow: number; // 층 바닥 높이
  heightHigh: number; // 층 천장 높이
}

export const convertFloorAndBuildingToFloorExtended = (
  floor: Floor,
  building: Building
): FloorExtended => {
  const floorHeightInfo = building.floorHeightInfo.find(
    (info) => info.level === floor.level
  )!;
  return {
    level: floor.level,
    name: floor.name,
    img: floor.img,
    heightLow: floorHeightInfo.heightLow,
    heightHigh: floorHeightInfo.heightHigh,
  };
};

export interface LocationExtended {
  userId: number;
  x?: number; // x
  y?: number; // y
  building?: Building; // 빌딩 Id
  floor?: FloorExtended; // 층 정보
  updated?: Date;
}
