// hoc
import withAuth from "@src/hoc/withAuth";
// components
import { Outlet, NavLink } from "react-router-dom";
// data
import { SETTINGS } from "@src/data/settings";

function SettingsLayout() {
  return (
    <div className="flex gap-12 w-full h-[90%] px-8 py-14 overflow-y-auto">
      <aside className="flex-[0.2] flex flex-col gap-4">
        {SETTINGS.map(({ name, icon, to }) => (
          <NavLink key={name} to={to} end>
            {({ isActive }) => (
              <div className="flex items-center gap-4 p-2 rounded-lg transition-colors hover:bg-tiber-100 group">
                <img className="w-8 h-8" src={icon} alt={`${name} icon`} />
                <span
                  className={`${isActive ? "text-tiber-500 font-bold" : ""}`}
                >
                  {name}
                  <div
                    className={`group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    } h-[3px] bg-tiber-500 transition-all duration-200 ease-in`}
                  />
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </aside>
      <div className="flex-[0.8]">
        <Outlet />
      </div>
    </div>
  );
}

export default withAuth(SettingsLayout);
