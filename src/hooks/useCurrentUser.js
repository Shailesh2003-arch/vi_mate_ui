import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/authService.js";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,

    select: (response) => response.data,

    staleTime: Infinity,
    gcTime: Infinity,

    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
