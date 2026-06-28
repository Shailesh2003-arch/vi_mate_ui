import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleVideoReaction } from "../services/like-service/LikeService.js";
export const useToggleReaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleVideoReaction,

    onSuccess: (data, variables) => {
      queryClient.setQueryData(["video", variables.videoId], (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,

          video: {
            ...oldData.video,

            likes: data.likes,
            dislikes: data.dislikes,
            userReaction: data.userReaction,
          },
        };
      });
    },
  });
};
