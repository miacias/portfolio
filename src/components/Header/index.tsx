import './Header.module.css';
import styles from './Header.module.css'

export default function Header(props: any): JSX.Element {
  return (
    <header className="header">
      <nav className={styles.navMenu}>
        <ul>
          <li onClick={() => props.handleView("about")} style={{color: `${props.view === 'about' ? '#fddb3a' : '#f6f4e6'}`}}>About Me</li>
          <li onClick={() => props.handleView("portfolio")} style={{color: `${props.view === 'portfolio' ? '#fddb3a' : '#f6f4e6'}`}}>Portfolio</li>
          <li onClick={() => props.handleView("skills")} style={{color: `${props.view === 'skills' ? '#fddb3a' : '#f6f4e6'}`}}>Skills</li>
          <li onClick={() => props.handleView("contact")} style={{color: `${props.view === 'contact' ? '#fddb3a' : '#f6f4e6'}`}}>Contact</li>
          {/* <div className={styles.dot}></div> */}
        </ul>
      </nav>
      <div className={styles.brand}>
        <h1 className='title'>Mia Ciasullo</h1>
        <img 
          src={process.env.PUBLIC_URL + '/assets/images/logo-no-background.png'}
          alt="blue cloud with gold flecks reading Mia Ciasullo, Fullstack developer" 
          className={`logo ${styles.logo}`}
        />
      </div>
    </header>
  );
}