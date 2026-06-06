import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
   <nav className="navbar">

  <div className="logo-container">

    <img
      src="/logo.png"
      alt="TrashTagGo"
      className="logo-image"
    />

    <h2 className="logo-text">
      TrashTagGo
    </h2>

  </div>

  <div className="nav-links">

    <a href="#features">Features</a>
    <a href="#impact">Impact</a>
    <a href="#how">How It Works</a>
    <a href="#contact">Contact</a>

    <button
      className="theme-btn"
      onClick={toggleTheme}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>

  </div>

</nav>
  );
}

export default Navbar;