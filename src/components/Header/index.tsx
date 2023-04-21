import './Header.module.css';
import styles from './Header.module.css'

function Header() {
  return (
    // <div className="Header">
    //   <header className="">
    //     <h1>Mia Ciasullo</h1>
    //     <nav className="navbar">
    //       <ul>
    //       <li><a href="/">About Me</a></li>
    //       <li><a href="/my-work">Portfolio</a></li>
    //       <li><a href="/contact">Contact</a></li>
    //       <li><a href="/resume">Resume</a></li>
    //       </ul>
    //     </nav>
    //   </header>
    // </div>
    <div className="Header">
    <header className="">
      <h1>Mia Ciasullo</h1>
      <nav className={styles.navMenu}>
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#tech">Technologies</a>
        <a href="#contact">Contact</a>
        {/* <div className={styles.dot}></div> */}
      </nav>
    </header>
  </div>
  );
}

export default Header;