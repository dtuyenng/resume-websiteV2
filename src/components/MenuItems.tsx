const MenuItems = () => {
  const menuItems = ["Home", "Projects", "About Me", "Blog"];
  return (
    <ul className="menu">
      {menuItems.map((item) => (
        <li className="menu-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
