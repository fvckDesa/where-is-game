// components
import { NavLink } from "react-router-dom";
// hooks
import { useNavigate, useLocation } from "react-router-dom";
import { useUserContext } from "@src/contexts/UserProvider";
// assets
import EmptyCharacter from "@src/assets/EmptyCharacter.svg";

const navItems = [
  { name: "Home", to: "/", end: true },
  { name: "Create", to: "/create", end: true },
  { name: "Leaderboard", to: "/leaderboard", end: false },
];

function Navbar() {
  const { user, signOutUser } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();
  async function signOut() {
    try {
      await signOutUser();
      navigate("/auth/signIn", { state: { next: location.pathname } });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <header className="flex justify-between px-7 py-5 h-[10%]">
      <h1 className="text-lg font-bold">Where is?</h1>
      <nav className="flex items-center gap-1">
        {navItems.map(({ name, to, end }) => (
          <NavLink key={name} to={to} end={end}>
            {({ isActive }) => (
              <div className="group px-3 py-1">
                <span>{name}</span>
                <div
                  className={`group-hover:w-full ${
                    isActive ? "w-full" : "w-0"
                  } h-[2px] bg-tiber-500 transition-all duration-200 ease-in`}
                />
              </div>
            )}
          </NavLink>
        ))}
        {user ? (
          <>
            <button
              className="px-4 py-2 rounded-lg mr-3 bg-tiber-500 text-white hover:bg-tiber-600"
              type="button"
              onClick={signOut}
            >
              Sign Out
            </button>
            <NavLink className="rounded-full" to="/settings" end>
              {({ isActive }) => (
                <img
                  className={`w-10 h-10 object-cover ${
                    isActive ? "ring ring-offset-2 ring-tiber-500" : "ring-0"
                  } rounded-full hover:ring hover:ring-offset-2 hover:ring-tiber-500 transition-all duration-200 ease-in`}
                  src={user.profilePicture || EmptyCharacter}
                  alt="User profile picture"
                  referrerPolicy="no-referrer"
                />
              )}
            </NavLink>
          </>
        ) : (
          <NavLink to="/auth/signIn" end>
            {({ isActive }) => (
              <div className="group px-3 py-1">
                <span>Sign In</span>
                <div
                  className={`group-hover:w-full ${
                    isActive ? "w-full" : "w-0"
                  } h-[2px] bg-tiber-500 transition-all duration-200 ease-in`}
                />
              </div>
            )}
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
