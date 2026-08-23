import axiosInstance from "../../api/axios.js";
export const getComments = async ({ videoId, page = 1, limit = 10 }) => {
  const response = await axiosInstance.get(`/comments/video/${videoId}`, {
    params: {
      page,
      limit,
    },
  });

  return response.data.data;
};

export const createComment = async ({ videoId, text }) => {
  const response = await axiosInstance.post(`/comments/video/${videoId}`, {
    text,
  });

  return response.data.data;
};

export const updateComment = async ({ commentId, text }) => {
  const response = await axiosInstance.patch(`/comments/${commentId}`, {
    text,
  });

  return response.data.data;
};

export const deleteComment = async ({ commentId }) => {
  console.log("Service received:", commentId);
  const response = await axiosInstance.delete(`/comments/${commentId}`);

  return response.data.data;
};
