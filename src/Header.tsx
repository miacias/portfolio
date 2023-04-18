import './Header.css';

function Header() {
  return (
    <div className="Header">
      <header className="">
        <h1>Failderp</h1>
        <nav className="navbar">
          <ul>
          <li><a href="/">About Me</a></li>
          <li><a href="/my-work">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/resume">Resume</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;