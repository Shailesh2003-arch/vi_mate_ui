import axiosInstance from "../../api/axios.js";

export const getMySubscriptions = async () => {
  const response = await axiosInstance.get("/subscriptions");

  return response.data;
};
