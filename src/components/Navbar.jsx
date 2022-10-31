import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "score", to: "/score" },
];

function Navbar() {
  return (
    <header className="flex justify-between px-7 py-5 h-[10%]">
      <h1>Where is?</h1>
      <nav className="flex gap-1">
        {navItems.map(({ name, to }) => (
          <NavLink key={name} to={to} end>
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
