import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateComment } from "../services/comment-service/commentService.js";
export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateComment,

    onSuccess: (updatedComment, variables) => {
      queryClient.setQueryData(
        ["comments", variables.videoId, variables.page ?? 1],
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...oldData,

            docs: oldData.docs.map((comment) =>
              comment._id === updatedComment._id
                ? {
                    ...comment,
                    text: updatedComment.text,
                  }
                : comment,
            ),
          };
        },
      );
    },
  });
};
