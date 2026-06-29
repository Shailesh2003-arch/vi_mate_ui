import { useQuery } from "@tanstack/react-query";
import { getComments } from "../services/comment-service/commentService.js";

export const useComments = (videoId, page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["comments", videoId, page],

    queryFn: () =>
      getComments({
        videoId,
        page,
        limit,
      }),

    enabled: !!videoId,
  });
};
