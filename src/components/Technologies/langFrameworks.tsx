import { langFrameworks } from "./skillsData"
import styles from "./Skills.module.css";

export default function Technologies() {
    return (
        <>
            <h3>Technologies</h3>
            {langFrameworks.map((tech) => {
                return (
                    <div key={tech.name}>
                        <i className={`${tech.devicon} ${styles.svg}`}></i>
                        <p>{tech.name}</p>
                    </div>
                )
            })}
        </>
    )
}