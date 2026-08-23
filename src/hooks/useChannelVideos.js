import { useQuery } from "@tanstack/react-query";
import { getChannelVideos } from "../services/channel-service/ChannelService.js";

export const useChannelVideos = (channelId, page = 1) => {
  return useQuery({
    queryKey: ["channelVideos", channelId, page],

    queryFn: () => getChannelVideos(channelId, page),

    enabled: !!channelId,

    staleTime: 1000 * 60 * 5,
  });
};
