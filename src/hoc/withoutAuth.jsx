// hooks
import { useUserContext } from "@src/contexts/UserProvider";
import { useRedirect } from "@src/hooks";
import { Navigate } from "react-router-dom";

function withoutAuth(Component) {
  return function (props) {
    const { next } = useRedirect();
    const { isUserSignedIn } = useUserContext();

    if (isUserSignedIn()) {
      return <Navigate to={next} />;
    }

    return <Component {...props} />;
  };
}

export default withoutAuth;
