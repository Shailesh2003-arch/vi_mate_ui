import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "../services/comment-service/commentService.js";
export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,

    onSuccess: (_, variables) => {
      queryClient.setQueryData(
        ["comments", variables.videoId, variables.page ?? 1],
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...oldData,

            docs: oldData.docs.filter(
              (comment) => comment._id !== variables.commentId,
            ),

            totalDocs: oldData.totalDocs - 1,
          };
        },
      );
    },
  });
};
