// hooks
import { useLocation, useNavigate } from "react-router-dom";

export function useRedirect() {
  const { next = "/", ...rest } = useLocation().state ?? {};
  const navigate = useNavigate();

  function redirect(state) {
    navigate(next, { replace: true, state });
  }

  return {
    redirect,
    next,
    ...rest,
  };
}
