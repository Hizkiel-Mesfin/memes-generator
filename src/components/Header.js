import "../App.css";

const Header = ({ src }) => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img className="header-img" src={src} alt="meme logo" />
          <h2 className="app-name">Meme Generator</h2>
        </div>
      </header>
    </div>
  );
};

export default Header;
