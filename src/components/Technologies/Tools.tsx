import { tools } from "./skillsData"
import styles from "./Skills.module.css";

export default function Tools() {
    return (
        <>
        <h3>Tools</h3>
            <div className={styles.iconArea}>
            {tools.map((tech) => {
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