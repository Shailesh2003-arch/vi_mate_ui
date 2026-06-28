import axiosInstance from "../../api/axios.js";

export const toggleVideoReaction = async ({ videoId, type }) => {
  const response = await axiosInstance.post(`/likes/${videoId}/reaction`, {
    type,
  });

  return response.data.data;
};
