import axios from "axios";

export const getPosition = async (id: number) => {
  const res = await axios.get(`/api/worker/get/loc/${id}`);
  return res.data;
};
