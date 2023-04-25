import Technologies from './langFrameworks';
import Tools from './Tools'
import Resume from './Resume';
import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <>
            <section className={styles.skills}>
                <h2>Skills</h2>
                <div className={styles.classBox}>
                    <Technologies/>
                    <Tools/>
                </div>
                <Resume/>
            </section>
        </>
    )
}