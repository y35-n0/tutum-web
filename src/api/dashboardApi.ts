import axios from "axios";
import { abnormalStatesJson } from "../test/jsonData";
import { AbnormalState } from "../types/dashboardTypes";

const instance = axios.create({});

// TODO: Real data load
export const getAbnormalStates = async (): Promise<AbnormalState[]> => {
  let data;
  try {
    data = await instance.get("api/worker/get/AbnormalState");
  } catch (error) {
    console.error(error);
  }
  return data?.data.data;
};
