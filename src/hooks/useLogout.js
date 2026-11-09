import {logoutUser} from "../api/auth.api.js";
import {useMutation , useQueryClient} from "@tanstack/react-query";

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,

    onSuccess: () => {
      // Clear all cached user data
      queryClient.clear();

      // Redirect to login page
      window.location.replace("/login");
    },
  });
};