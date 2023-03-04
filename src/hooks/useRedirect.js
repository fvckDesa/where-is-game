// hooks
import { useLocation, useNavigate } from "react-router-dom";

export function useRedirect() {
  const { next = "/", ...rest } = useLocation().state ?? {};
  const navigate = useNavigate();

  function redirect() {
    navigate(next, { replace: true });
  }

  return {
    redirect,
    next,
    ...rest,
  };
}
