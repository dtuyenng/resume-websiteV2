import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const menuItems = ["Home", "Projects", "About Me", "Blog"];
  return (
    <nav className="menu">
      <NavLink className="menu-item" to="/">
        Home
      </NavLink>
      <NavLink className="menu-item" to="/projects">
        Projects
      </NavLink>
      <NavLink className="menu-item" to="/aboutme">
        About Me
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
