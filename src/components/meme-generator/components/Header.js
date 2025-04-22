import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} />
      <span className="title-text">Meme Generator</span>
    </header>
  );
}
