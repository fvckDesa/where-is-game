// hooks
import { useUserContext } from "@src/contexts/UserProvider";
import { useLocation } from "react-router-dom";
// components
import { Navigate } from "react-router-dom";

function withAuth(Component) {
  return function (props) {
    const location = useLocation();
    const { isUserSignedIn } = useUserContext();

    if (!isUserSignedIn()) {
      return <Navigate to="/signIn" state={{ next: location.pathname }} />;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
