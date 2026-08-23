import { useQuery } from "@tanstack/react-query";
import { getChannelDetails } from "../services/channel-service/ChannelService.js";

export const useChannel = (channelId) => {
  return useQuery({
    queryKey: ["channel", channelId],

    queryFn: () => getChannelDetails(channelId),

    enabled: !!channelId,

    staleTime: 1000 * 60 * 5,
  });
};
