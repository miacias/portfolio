import './Header.module.css';
import styles from './Header.module.css'

export default function Header(props: any): JSX.Element {
  return (
    <header className="header">
      <div className={styles.brand}>
        {/* <h1 className='title'>Mia Ciasullo</h1> */}
        <img 
          src={process.env.PUBLIC_URL + '/assets/images/logo-no-background.png'}
          alt="blue cloud with gold flecks reading Mia Ciasullo, Fullstack developer" 
          className={`logo ${styles.logo}`}
        />
      </div>
      <nav className={styles.navMenu}>
        <ul>
          <li onClick={() => props.handleView("about")} style={{color: `${props.view === 'about' ? props.color.active : props.color.inactive}`}}>About Me</li>
          <li onClick={() => props.handleView("portfolio")} style={{color: `${props.view === 'portfolio' ? props.color.active : props.color.inactive}`}}>Portfolio</li>
          <li onClick={() => props.handleView("skills")} style={{color: `${props.view === 'skills' ? props.color.active : props.color.inactive}`}}>Skills</li>
          <li onClick={() => props.handleView("contact")} style={{color: `${props.view === 'contact' ? props.color.active : props.color.inactive}`}}>Contact</li>
          {/* <div className={styles.dot}></div> */}
        </ul>
      </nav>
    </header>
  );
}