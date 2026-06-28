import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getVideoById } from "../services/video-service/VideoService.js";
import {
  watchVideo,
  getRecommendedVideos,
} from "../services/video-service/VideoService.js";

export const useVideo = (videoId) => {
  return useQuery({
    queryKey: ["video", videoId],

    queryFn: () => getVideoById(videoId),

    enabled: !!videoId,
    refetchOnWindowFocus: false,
  });
};

export const useWatchVideo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: watchVideo,
    onSuccess: (_, videoId) => {
      queryClient.setQueryData(["video", videoId], (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,

          video: {
            ...oldData.video,

            views: oldData.video.views + 1,
          },
        };
      });
    },
  });
};

export const useRecommendedVideos = (videoId) => {
  return useQuery({
    queryKey: ["recommendedVideos", videoId],

    queryFn: () => getRecommendedVideos(videoId),

    enabled: !!videoId,
  });
};
