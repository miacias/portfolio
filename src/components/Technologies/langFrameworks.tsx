import { langFrameworks } from "./skillsData"
import styles from "./Skills.module.css";

export default function Technologies() {
    return (
        <>
            <h3>Technologies</h3>
            <div className={styles.iconArea}>
            {langFrameworks.map((tech) => {
                return (
                    <div className={styles.logoBlock} key={tech.name}>
                        <i className={`${tech.devicon} ${styles.svg}`}></i>
                        <p>{tech.name}</p>
                    </div>
                )
            })}
            </div>
        </>
    )
}