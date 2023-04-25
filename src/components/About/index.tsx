import styles from './About.module.css';

export default function About() {
    return (
        <>
        <section className={styles.aboutMe}>
            <h2>About Me</h2>
            <div className={styles.myInfo}>
                <div>
                    <p>I am a former French teacher and linguist turned full-stack developer! As someone who has always been drawn to creative and artistic outlets, I have found programming to be the perfect avenue for my unique perspective and problem-solving skills. My journey into the world of tech began when I discovered my passion for designing and building projects for my students. The more I learned, the more fascinated I became with the endless possibilities of coding. From crafting intuitive user interfaces to optimizing backend functionality, I relish the opportunity to build innovative and efficient solutions.Coming from the education world, I bring a collaborative approach to my work, always striving to understand the needs and goals of my clients and team members. Whether I'm building a custom web application or optimizing existing code, I am committed to delivering quality results that exceed expectations.</p>
                    <img className={`gif ${styles.gif}`} src={process.env.PUBLIC_URL + `/assets/images/wave-hello-unscreen-crop-very-blue.gif`} alt='Mia Ciasullo waving hello!'/>
                    <p>Thank you for taking the time to learn more about me and my work. Please feel free to browse my portfolio and contact me if you have any questions or if you're interested in working together!</p>
                </div>
            </div>
        </section>
        </>
    )
}