import styles from "./Skills.module.css";

export default function Resume() {
    return (
        <>
        <h3>Resume</h3>
        <div className={styles.resumeInvite}>
            <p>I invite you to learn more about my experience and skills!</p>
            <a href="https://docs.google.com/document/export?format=txt&id=1gwYNMpDvR7mwU4Usuqo5Eq1bl4gdmNCJHpY-1So33Vw">
                <button className={styles.resumeBtn}>Download my resume!</button>
            </a>
        </div>
        <iframe 
            className={styles.resumeEmbed} 
            src="https://docs.google.com/document/d/e/2PACX-1vRZKTDkEFMaIs47oLeMRDUVZU1jaWY_oTowjqWj4hVip4r2nn3UkI5z8vUAX6Ow6EUTMyHfDNz7U8yB/pub?embedded=true" 
            width='850' 
            height='400' 
            title='Mia Ciasullo resume'>Loading Resume…</iframe>
        </>
    )
}