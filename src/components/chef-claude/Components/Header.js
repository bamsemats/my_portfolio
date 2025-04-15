import logo from "../Assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="claude-header-div">
      <img src={logo} alt="Chef Claude" className="chef-claude-img" />
      <span className="title-text">Create a Recipe</span>
    </header>
  );
}
