import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(); // Clear cache
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
};
