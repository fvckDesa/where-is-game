// hooks
import { useLocation, useNavigate } from "react-router-dom";

export function useSign() {
  const { next = "/" } = useLocation().state ?? {};
  const navigate = useNavigate();

  function redirect() {
    navigate(next);
  }

  return {
    redirect,
    next,
  };
}
