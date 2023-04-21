import './Header.module.css';
import styles from './Header.module.css'

export default function Header() {
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
    <header className="">
      <nav className={styles.navMenu}>
        <a href="#about">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#tech">Technologies</a>
        <a href="#contact">Contact</a>
        {/* <div className={styles.dot}></div> */}
      </nav>
      <div className={styles.brand}>
        <h1 className='title'>Mia Ciasullo</h1>
        <img 
          src={process.env.PUBLIC_URL + '/assets/images/logo-no-background.png'}
          alt="blue cloud with gold flecks reading Mia Ciasullo, Fullstack developer" 
          className={styles.logo}
        />
      </div>
    </header>
  );
}

// export default Header;