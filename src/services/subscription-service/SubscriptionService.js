import axiosInstance from "../../api/axios.js";

export const getMySubscriptions = async () => {
  const response = await axiosInstance.get("/subscriptions");

  return response.data;
};

export const toggleSubscription = async ({ channelId }) => {
  const response = await axiosInstance.post(`/subscriptions/${channelId}`);

  return response.data.data;
};
