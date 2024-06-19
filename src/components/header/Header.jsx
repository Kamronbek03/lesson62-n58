import "./Header.scss";
import Logo from "../../assets/images/header/logo.svg";

function Header() {
  return (
    <div className="Header">
      <div className="container">
        <nav>
          <div className="links">
            <img style={{ cursor: "pointer" }} src={Logo} alt="Logo..." />
            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Articles</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="buttons">
            <pre>Cart (0)</pre>
            <button>Get a free quote</button>
          </div>
          <div class="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const links = document.querySelector(".links");
  const buttons = document.querySelector(".buttons");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    links.classList.toggle("active");
    buttons.classList.toggle("active");
  });
});
