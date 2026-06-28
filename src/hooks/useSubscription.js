import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toggleSubscription } from "../services/subscription-service/SubscriptionService.js";

export const useToggleSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleSubscription,

    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        ["video", variables.videoId],

        (oldData) => {
          console.log("Old Data:", oldData);
          if (!oldData) return oldData;

          return {
            ...oldData,

            channel: {
              ...oldData.channel,

              subscribersCount: data.subscribersCount,

              isSubscribed: data.isSubscribed,
            },
          };
        },
      );
    },
  });
};
