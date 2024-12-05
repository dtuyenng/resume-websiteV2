import MenuItems from "./MenuItems";

function Header() {
  return (
    <div id="header">
      <h1 id="logo">
        Hello<div id="big-letter">W</div>orld
      </h1>
      <MenuItems></MenuItems>{" "}
    </div>
  );
}

export default Header;
