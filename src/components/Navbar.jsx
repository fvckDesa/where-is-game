import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/", end: true },
  { name: "Create", to: "/create", end: true },
  { name: "Leaderboard", to: "/leaderboard", end: false },
];

function Navbar() {
  return (
    <header className="flex justify-between px-7 py-5 h-[10%]">
      <h1>Where is?</h1>
      <nav className="flex gap-1">
        {navItems.map(({ name, to, end }) => (
          <NavLink key={name} to={to} end={end}>
            {({ isActive }) => (
              <div className="group px-3 py-1">
                <span>{name}</span>
                <div
                  className={`group-hover:w-full ${
                    isActive ? "w-full" : "w-0"
                  } h-[2px] bg-tiber transition-all duration-200 ease-in`}
                />
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
