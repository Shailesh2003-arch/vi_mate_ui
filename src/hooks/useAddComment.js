import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../services/comment-service/commentService.js";

export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["comments", variables.videoId],
      });
    },
  });
};
