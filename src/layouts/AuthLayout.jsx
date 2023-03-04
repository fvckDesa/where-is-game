import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="w-full h-[90%]">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
