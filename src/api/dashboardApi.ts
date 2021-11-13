import axios from "axios";
import { AbnormalStateRaw } from "../types/dashboardTypes";

const instance = axios.create({});

// TODO: Real data load
export const getAbnormalStates = async (): Promise<AbnormalStateRaw[]> => {
  let data;
  try {
    data = await instance.get("api/worker/get/AbnormalState");
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
  return data?.data.data;
};
