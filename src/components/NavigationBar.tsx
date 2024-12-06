import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const menuItems = ["Home", "Projects", "About Me", "Blog"];
  return (
    <nav className="menu">
      <NavLink className="menu-item" to="/">
        <span className="material-icons">home</span>
        <div className="menu-item-text">Home</div>
      </NavLink>
      <NavLink className="menu-item" to="/projects">
        <span className="material-icons">apps</span>
        <div className="menu-item-text">Projects</div>
      </NavLink>
      <NavLink className="menu-item" to="/aboutme">
        <span className="material-icons">face</span>
        <div className="menu-item-text">About Me</div>
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
