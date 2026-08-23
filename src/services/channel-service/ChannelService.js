import axiosInstance from "../../api/axios.js";

export const getChannelDetails = async (channelId) => {
  const response = await axiosInstance.get(`/channels/${channelId}`);
  return response.data.data;
};

export const getChannelVideos = async (channelId, page = 1) => {
  const response = await axiosInstance.get(
    `/channels/${channelId}/videos?page=${page}`,
  );

  return response.data.data;
};
