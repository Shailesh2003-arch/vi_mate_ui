import axiosInstance from "../../api/axios";

export const getFeedVideos = async (page = 1, limit = 12) => {
  const response = await axiosInstance.get(
    `/videos?page=${page}&limit=${limit}`,
  );

  return response.data;
};

export const getVideoById = async (videoId) => {
  const response = await axiosInstance.get(`videos/vid/${videoId}`);

  return response.data.data;
};

export const watchVideo = async (videoId) => {
  const response = await axiosInstance.post(`/videos/${videoId}/view`);

  return response.data.data;
};
