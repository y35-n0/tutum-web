import axios from "axios";
import {
  AbnormalStateRaw,
  AbnormalStatesProcessingStatus,
} from "../types/dashboardTypes";

const instance = axios.create({});

// 이상상태 현황 목록 가져오기
export const getAbnormalStates = async (): Promise<AbnormalStateRaw[]> => {
  let res;
  try {
    res = await instance.get("api/worker/get/AbnormalState");
    // console.log(res.data.data);
  } catch (error) {
    console.error(error);
  }
  return res?.data.data;
};

// 이상상태 미확인 수정
export const updateAbnormalStateProcessingStatus = async (
  status: AbnormalStatesProcessingStatus
) => {
  let res;
  try {
    res = await instance.post("api/worker/update/abnormalState", {
      id: status.id,
      actionStatus: status.processingStatus,
    });
    // console.log(res?.data.data);
  } catch (error) {
    console.error(error);
  }
};
